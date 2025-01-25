import { asBox, asCoordinates, patch } from "./utlis.js";

const potatoCoords = asCoordinates(4, 1.5, 0);

const accessorySlots = {
  hat: patch(potatoCoords, -0.32, 0.55, 0),
  glasses: patch(potatoCoords, -0.8, 0.21, 0),
}

export const modelConfig = [
  {
    id: 'potato',
    kind: 'environment',
    position: potatoCoords,
    rotation: asCoordinates(0, 90, 0),
  },
  {
    id: 'room',
    kind: 'environment',
    hitbox: asBox(10, 0.5, 10, 0, -5.1, 0),
    position: asCoordinates(0, 4.5, 0),
    rotation: asCoordinates(0, -90, 0),
  },
  {
    id: 'couch',
    kind: 'environment',
    position: asCoordinates(0, 0.6, -8),
    scale: asCoordinates(1.5, 1.5, 1.5),
  },
  {
    id: 'couch_small',
    kind: 'environment',
    position: asCoordinates(7, 0.6, -6),
    scale: asCoordinates(1.5, 1.5, 1.5),
    rotation: asCoordinates(0, -45, 0),
  },
  {
    id: 'plant',
    kind: 'environment',
    position: asCoordinates(-5, 0.9, 3),
  },
  {
    id: 'lamp',
    kind: 'environment',
    position: asCoordinates(2, 3, -5),
    scale: asCoordinates(1.5, 1.5, 1.5),
    rotation: asCoordinates(0, -45, 0),
  },
  // {
  //   id: 'table', // old
  //   kind: 'environment',
  //   hitbox: asBox(6, 1.2, 1.2),
  //   position: asCoordinates(-5, -0.5, -2),
  //   rotation: asCoordinates(0, 90, 0),
  // },
  {
    id: 'table',
    kind: 'environment',
    hitbox: asBox(2.23, 0.28, 0.385, -0.07, 0.1, -0.03),
    position: asCoordinates(-5, 0.47, -2),
    scale: asCoordinates(1.2, 1.2, 1.2),
    rotation: asCoordinates(0, 90, 0),
  },
  // {
  //   id: 'stage', // old
  //   kind: 'environment',
  //   hitbox: asBox(1.5, 1.2, 1.2),
  //   position: asCoordinates(4, -0.5, -2),
  // },
  {
    id: 'stage',
    kind: 'environment',
    hitbox: asBox(0.88, 0.1, 0.87, -0.02, 0.08, -0.18),
    position: asCoordinates(4.1, 0.72, 0.25),
    scale: asCoordinates(1.3, 1.3, 1.3),
  },
  {
    id: 'hatA',
    kind: 'accessory',
    accessorySlot: 'hat',
    hitbox: asBox(0.2, 0.2, 0.2, 0, 0.08, 0),
    potatoPos: accessorySlots.hat,
  },
  {
    id: 'hatB',
    kind: 'accessory',
    accessorySlot: 'hat',
    hitbox: asBox(0.2, 0.12, 0.2),
    potatoPos: accessorySlots.hat,
    rotation: asCoordinates(0, 90, 0),
    potatoRotation: asCoordinates(0, -90, 0),
  },
  {
    id: 'glassesRed',
    kind: 'accessory',
    accessorySlot: 'glasses',
    hitbox: asBox(0.4, 0.15, 0.2),
    potatoPos: accessorySlots.glasses,
    rotation: asCoordinates(0, -90, 0),
    potatoRotation: asCoordinates(0, 90, 0),
  },
  {
    id: 'monocleA',
    kind: 'accessory',
    accessorySlot: 'glasses',
    hitbox: asBox(0.2, 0.15, 0.2),
    potatoPos: patch(accessorySlots.glasses, 0, 0, -0.25),
    rotation: asCoordinates(0, -90, 0),
    potatoRotation: asCoordinates(0, 90, 0),
  }
];