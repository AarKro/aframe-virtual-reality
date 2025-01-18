AFRAME.registerComponent('rewind-grab', {
  init: function () {
    this.system = this.el.sceneEl.systems.physics;

    this.GRABBED_STATE = 'grabbed';

    this.grabbing = false;
    this.hitEl = null;
    this.physics = this.el.sceneEl.systems.physics;
    this.constraint = null;
    this.stage = null;

    // Bind event handlers
    this.onHit = this.onHit.bind(this);
    this.onGripOpen = this.onGripOpen.bind(this);
    this.onGripClose = this.onGripClose.bind(this);
  },

  play: function () {
    const el = this.el;
    el.addEventListener('hit', this.onHit);
    el.addEventListener('gripdown', this.onGripClose);
    el.addEventListener('gripup', this.onGripOpen);
    el.addEventListener('trackpaddown', this.onGripClose);
    el.addEventListener('trackpadup', this.onGripOpen);
    el.addEventListener('triggerdown', this.onGripClose);
    el.addEventListener('triggerup', this.onGripOpen);

    const stageEl = document.getElementById('stage')
    const stagePos = stageEl.getAttribute('position');
    const stageWidth = 3;
    const stageDepth = 3;
    this.stage = {
      x: stagePos.getComponent(0) - (Number(stageWidth) / 2),
      z: stagePos.getComponent(2) - (Number(stageDepth) / 2),
      width: Number(stageWidth),
      depth: Number(stageDepth),
    }
  },

  pause: function () {
    const el = this.el;
    el.removeEventListener('hit', this.onHit);
    el.removeEventListener('gripdown', this.onGripClose);
    el.removeEventListener('gripup', this.onGripOpen);
    el.removeEventListener('trackpaddown', this.onGripClose);
    el.removeEventListener('trackpadup', this.onGripOpen);
    el.removeEventListener('triggerdown', this.onGripClose);
    el.removeEventListener('triggerup', this.onGripOpen);
  },

  onGripClose: function () {
    this.grabbing = true;
  },

  onGripOpen: function () {
    const hitEl = this.hitEl;
    this.grabbing = false;
    if (!hitEl) { return; }
    hitEl.removeState(this.GRABBED_STATE);
    this.system.removeConstraint(this.constraint);
    this.constraint = null;

    const physicsComponent = hitEl.components['body'];
    physicsComponent.pause();

    const hitElCurrentPos = hitEl.getAttribute('position');
    const hitElX = hitElCurrentPos.getComponent(0);
    const hitElZ = hitElCurrentPos.getComponent(2);
    if (
      !(
           (hitElX >= this.stage.x && hitElX <= (this.stage.x + this.stage.width))
        && (hitElZ >= this.stage.z && hitElZ <= (this.stage.z + this.stage.depth))
      )
    ) {
      hitEl.emit('start-rewind-position', null, false);
      hitEl.emit('start-rewind-rotation', null, false);
      setTimeout(() => {
        physicsComponent.play();
      }, 600);
    } else {
      const targetPos = hitEl.getAttribute('data-potato-pos');
      hitEl.setAttribute('position', targetPos);
      const targetRotation = hitEl.getAttribute('data-orig-rotation') || '0 0 0';
      hitEl.setAttribute('rotation', targetRotation);
    }

    this.hitEl = undefined;
  },

  onHit: function (evt) {
    const hitEl = evt.detail.el;
    // If the element is already grabbed (it could be grabbed by another controller).
    // If the hand is not grabbing the element does not stick.
    // If we're already grabbing something you can't grab again.
    if (hitEl.is(this.GRABBED_STATE) || !this.grabbing || this.hitEl) { return; }
    
    const hitElPosSnapshot = hitEl.getAttribute('data-orig-pos');
    hitEl.setAttribute('animation__rewind-position', {
      'property': 'position', 
      'to': hitElPosSnapshot, 
      'dur': '500',
      'startEvents': 'start-rewind-position'
    });
    const targetRotation = hitEl.getAttribute('data-orig-rotation') || '0 0 0';
    hitEl.setAttribute('animation__rewind-rotation', {
      'property': 'rotation', 
      'to': targetRotation, 
      'dur': '500',
      'startEvents': 'start-rewind-rotation'
    });

    hitEl.addState(this.GRABBED_STATE);
    this.hitEl = hitEl;
    this.constraint = new CANNON.LockConstraint(this.el.body, hitEl.body);
    this.system.addConstraint(this.constraint);
  }
});