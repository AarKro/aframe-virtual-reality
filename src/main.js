import { modelConfig } from "./modelConfig.js";
import { asCoordinates, coordsToString, patch } from "./utlis.js";

const accessoryStartCoords = asCoordinates(-5, 1.2, -1);

export const createModels = () => {
  let accessoryCounter = 0;
  const models = modelConfig.map((model) => {
    const el = document.createElement('a-entity');
    el.setAttribute('id', model.id);
    el.setAttribute('gltf-model', `#${model.id}Model`);

    switch (model.kind) {
      case 'environment':
        el.setAttribute('position', coordsToString(model.position));
        el.setAttribute('body', 'type: static; mass: 0; shape: none;');
        break;
      case 'accessory':
        const position = coordsToString(patch(accessoryStartCoords, 0, 0, accessoryCounter * -1));
        el.setAttribute('position', position);
        el.setAttribute('data-orig-pos', position);
        el.setAttribute('data-potato-pos', coordsToString(model.potatoPos));
        el.setAttribute('data-orig-rotation', coordsToString(model.rotation));
        el.setAttribute('data-potato-rotation', coordsToString(model.potatoRotation));
        el.setAttribute('body', 'type: dynamic; mass: 5; shape: none;');
        el.classList.add('grabbable');
        accessoryCounter++;
        break;
      default:
        throw new Error('kind was not specified for model ' + model.id);
    }

    el.setAttribute('rotation', coordsToString(model.rotation));

    if (model.hitbox) {
      el.setAttribute('shape__main', `shape: ${model.hitbox.shape}; halfExtents: ${coordsToString(model.hitbox.halfExtents)}; offset: ${coordsToString(model.hitbox.offset)}`);
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
    el.setAttribute('src', `./src/assets/${model.id}.gltf`);

    return el;
  });
  
  const ankor = document.getElementById('assets');
  models.forEach((model) => {
    ankor.appendChild(model);    
  });
}