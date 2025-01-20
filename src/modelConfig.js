import { asBox, asCoordinates, patch } from "./utlis.js";

const accessorySlots = {
  hat: asCoordinates(3.68, 1.85, -2),
  glasses: asCoordinates(3.2, 1.46, -2),
}

export const modelConfig = [
  {
    id: 'potato',
    kind: 'environment',
    position: asCoordinates(4, 1.25, -2),
    rotation: asCoordinates(0, 90, 0),
  },
  {
    id: 'room',
    kind: 'environment',
    hitbox: asBox(10, 0.5, 10, 0, -5.1, 0),
    position: asCoordinates(0, 4, 0),
    rotation: asCoordinates(0, -90, 0),
  },
  {
    id: 'table',
    kind: 'environment',
    hitbox: asBox(6, 1.2, 1.2),
    position: asCoordinates(-5, -0.5, -2),
    rotation: asCoordinates(0, 90, 0),
  },
  {
    id: 'stage',
    kind: 'environment',
    hitbox: asBox(10, 0.5, 10, 0, -5.1, 0),
    position: asCoordinates(4, -0.5, -2),
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