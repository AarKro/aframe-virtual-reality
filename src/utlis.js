export const vector3ToString = (vector, percision = 2) => {
  return `${vector.getComponent(0).toFixed(percision)} ${vector.getComponent(1).toFixed(percision)} ${vector.getComponent(2).toFixed(percision)}`;
} 

export const rotationVectorToString = (vector) => {
  return `${vector.x} ${vector.y} ${vector.z}`
}