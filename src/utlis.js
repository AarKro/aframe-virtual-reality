export const vector3ToString = (vector, precision = 2) => {
  return `${vector.getComponent(0).toFixed(precision)} ${vector.getComponent(1).toFixed(precision)} ${vector.getComponent(2).toFixed(precision)}`;
};

export const coordsToString = (coords = { x: 0, y: 0, z: 0}) => {
  return `${coords.x} ${coords.y} ${coords.z}`;
};

export const asCoordinates = (x, y, z) => ({
  x, y, z,
});

export const asBox = (x, y, z, offsetX = 0, offsetY = 0, offsetZ = 0) => ({
  shape: 'box',
  halfExtents: asCoordinates(x, y, z),
  offset: asCoordinates(offsetX, offsetY, offsetZ),
});

export const patch = ({x, y, z}, deltaX, deltaY, deltaZ) => ({
  x: x + deltaX,
  y: y + deltaY,
  z: z + deltaZ,
});