import { asBox, asCoordinates, patch } from "./utlis.js";

const accessorySlots = {
  hat: asCoordinates(3.68, 2.05, -2),
  glasses: asCoordinates(3.2, 1.71, -2),
}

export const modelConfig = [
  {
    id: 'potato',
    kind: 'environment',
    position: asCoordinates(4, 1.5, -2),
    rotation: asCoordinates(0, 90, 0),
  },
  {
    id: 'room',
    kind: 'environment',
    hitbox: asBox(10, 0.5, 10, 0, -5.1, 0),
    position: asCoordinates(0, 4.5, 0),
    rotation: asCoordinates(0, -90, 0),
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
    position: asCoordinates(-5, 0.7, -2),
    scale: asCoordinates(1.7, 1.7, 1.7),
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
    position: asCoordinates(4.1, 0.72, -1.75),
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