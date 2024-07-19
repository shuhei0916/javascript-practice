import assert from 'assert';
import isLeapYear from './isLeapYear.js'

describe('isLeapYear', function () {
  it('should return true for a year divisible by 4', function () {
    const year = 2024;
    const actual = isLeapYear(year);
    const expected = true;
    assert.equal(actual, expected);
  });
});