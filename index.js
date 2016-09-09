module.exports = isPureFunction;

function isPureFunction(f) {
  return f.length > 0 && typeof f(1) !== 'undefined';
};
