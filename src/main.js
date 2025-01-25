import { modelConfig } from "./modelConfig.js";
import { asCoordinates, coordsToString, patch } from "./utlis.js";

const accessoryStartCoords = asCoordinates(-5, 1.6, 0);

export const createModels = () => {
  let accessoryCounter = 0;
  const models = modelConfig.map((model) => {
    const el = document.createElement('a-entity');
    el.setAttribute('id', model.id);
    el.setAttribute('gltf-model', `#${model.id}Model`);
    el.setAttribute('scale', coordsToString(model.scale || {x: 1, y: 1, z: 1}));

    switch (model.kind) {
      case 'environment':
        el.setAttribute('position', coordsToString(model.position));
        el.setAttribute('body', 'type: static; mass: 0; shape: none;');
        el.setAttribute('shadow', 'cast: true; receive: true');
        break;
      case 'accessory':
        const position = coordsToString(patch(accessoryStartCoords, 0, 0, accessoryCounter * -1));
        el.setAttribute('position', position);
        el.setAttribute('data-accessory-slot', model.accessorySlot);
        el.setAttribute('body', 'type: dynamic; mass: 5; shape: none;');
        el.setAttribute('shadow', 'cast: true; receive: false');
        el.classList.add('grabbable');

        // animations
        el.setAttribute('animation__rewind-position', {
          'property': 'position', 
          'to': position, 
          'dur': '500',
          'startEvents': 'start-rewind-position'
        });

        el.setAttribute('animation__rewind-rotation', {
          'property': 'rotation', 
          'to': coordsToString(model.rotation), 
          'dur': '500',
          'startEvents': 'start-rewind-rotation'
        });

        el.setAttribute('animation__potato-position', {
          'property': 'position', 
          'to': coordsToString(model.potatoPos), 
          'dur': '500',
          'startEvents': 'start-potato-position'
        });

        el.setAttribute('animation__potato-rotation', {
          'property': 'rotation', 
          'to': coordsToString(model.potatoRotation), 
          'dur': '500',
          'startEvents': 'start-potato-rotation'
        });

        accessoryCounter++;
        break;
      default:
        throw new Error('kind was not specified for model ' + model.id);
    }

    el.setAttribute('rotation', coordsToString(model.rotation));

    if (model.hitbox) {
      el.setAttribute('shape__main', `shape: ${model.hitbox.shape}; halfExtents: ${coordsToString(model.hitbox.halfExtents)}; offset: ${coordsToString(model.hitbox.offset)}`);
    }

    if (model.material) {
      el.setAttribute('material', model.material);
    }
    
    return el;
  });
  
  const ankor = document.getElementById('rig');
  models.forEach((model) => {
    ankor.insertAdjacentElement('afterend', model);    
  });
}

export const loadAssets = () => {
  const models = modelConfig.map((model) => {
    const el = document.createElement('a-asset-item');
    el.setAttribute('id', `${model.id}Model`);
    el.setAttribute('src', `./src/assets/${model.id}.${model.fileExtension || "gltf"}`);

    return el;
  });
  
  const ankor = document.getElementById('assets');
  models.forEach((model) => {
    ankor.appendChild(model);    
  });
}