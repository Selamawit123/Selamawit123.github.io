"use strict";
const assert = require("assert");  //always need this with node
const myExports = require("./random.js");  //with node need the name of your file with your functions here
const random = myExports.random;
describe("random", function () {   
it("random int number between 1 and 5 equals 4", function() {
    assert.strictEqual(random(1,5), 4);
  });
  it("random int number between 2 and 5 equals 3", function() {
    assert.strictEqual(random(2,5), 3);
  });
  it("random int number between 3 and 8 equals 7", function() {
    assert.strictEqual(random(3,8), 7);
  });
   
});