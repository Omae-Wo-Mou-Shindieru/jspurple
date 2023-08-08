const addressLat = 10;
const addressLong = 8;

const positionLat = 2;
const positionLong = 2;

const latProjection = addressLat - positionLat;
const longProjection = addressLong - positionLong;

const distance = Math.sqrt(latProjection ** 2 + longProjection ** 2);

console.log(`Расстояние до точки ${distance} метров`);
