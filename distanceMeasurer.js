const latProjection = 10;
const longProjection = 8;

const positionLatProjection = 2;
const positionLongProjection = 2;

const legA = latProjection - positionLatProjection;
const legB = longProjection - positionLongProjection;

const distance = Math.sqrt(legA ** 2 + legB ** 2);

console.log(distance);
