// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const PI = 3.141;
// const g = 9.8;

// module.exports.sum = (a, b) => a + b;
// module.exports.mul = (a, b) => a * b;
// module.exports.PI = 3.141;
// module.exports.g = 9.8;

// exports.sum = (a, b) => a;
// exports.mul = (a, b) => a * b;
// exports.PI = 3.141;
// exports.g = 9.8;

// module.exports = "hello";
// module.exports = 245;

// const obj = {
//   sum: sum,
//   mul: mul,
//   PI: PI,
//   g: g,
// };

// module.exports = obj;

// module.exports = {
//   sum: sum,
//   mul: mul,
//   PI: PI,
//   g: g,
// };

//exports = 5;//it is invalid for module.exports.

//require vs import:we can not selectively load the pieces we need with require but import, we can selectively load only the pieces we need, which can save memory.

export const sum = (a, b) => a + b;
export const mul = (a, b) => a * b;
export const PI = 3.141;
export const g = 9.8;
