var assert = require('assert');
var isPureFunction = require('../index.js');

describe('isPureFunction', function () {
  it('must return TRUE if a function take at least one argument', function () {
    var f = function(a) { return a; };
    assert(f.length > 0, isPureFunction(f));
  });
  it('must return FALSE if a function take no argument', function () {
    var f = function() {};
    assert(f.length ===0, isPureFunction(f));
  });
  it('must return TRUE if a function return something other than undefined', function () {
    var f = function(a) { return a; };
    assert(f(1), isPureFunction(f));
  });
});
