// AFRAME.registerComponent('cursor-listener', {
//   init: function () {
//     var lastIndex = -1;
//     var COLORS = ['red', 'green', 'blue'];
//     this.el.addEventListener('click', function (evt) {
//       lastIndex = (lastIndex + 1) % COLORS.length;
//       this.setAttribute('material', 'color', COLORS[lastIndex]);
//       console.log('I was clicked at: ', evt.detail.intersection.point);
//     });
//   }
// });

// AFRAME.registerComponent('abutton-event', {
//   init: function () {
//     var lastIndex = -1;
//     var COLORS = ['red', 'green', 'blue'];
//     const box = document.getElementById('box');
//     box.addEventListener('abuttonchanged', function (evt) {
//       lastIndex = (lastIndex + 1) % COLORS.length;
//       this.setAttribute('material', 'color', COLORS[lastIndex]);
//     });
//   }
// });

// AFRAME.registerComponent('thumbstick-logging',{
//   init: function () {
//     this.el.addEventListener('thumbstickmoved', this.logThumbstick);
//   },
//   logThumbstick: function (evt) {
//     if (evt.detail.y > 0.95) { console.log("DOWN"); }
//     if (evt.detail.y < -0.95) { console.log("UP"); }
//     if (evt.detail.x < -0.95) { console.log("LEFT"); }
//     if (evt.detail.x > 0.95) { console.log("RIGHT"); }
//   }
// });