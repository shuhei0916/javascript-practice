import assert from 'assert';
import isLeapYear from './isLeapYear.js'

describe('isLeapYear', function () {
  it ('should return false for a year divivible by 4', function () {
    assert.equal(isLeapYear(2024), true);
  });

  it ('should return false for a year divivible by 100', function () {
    assert.equal(isLeapYear(1900), false);
  });
  
  it ('should return true a year divivible by 400', function () {
    assert.equal(isLeapYear(2000), true);
  });
  
  it ('should return false for other year', function () {
    assert.equal(isLeapYear(2025), false);
  });

});