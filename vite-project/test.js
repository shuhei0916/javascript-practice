import assert from 'assert';
import isLeapYear from './isLeapYear.js'

describe('isLeapYear', function () {
  it('should return true for 2024', function () {
    const year1 = 2024;
    assert.equal(isLeapYear(year1), true);
  });

  it ('should return false for a year divivible by 100', function () {
    const year = 1900;
    assert.equal(isLeapYear(year), false);
  });
  
  it('should return false for 2025', function () {
    const year2 = 2025;
    assert.equal(isLeapYear(year2), false);
  });

});