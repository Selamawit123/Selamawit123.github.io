"use strict";

const assert = require("assert");  //always need this with node
const myExports = require("./myFunction.js");  //with node need the name of your file with your functions here
 
const myFilter= myExports.myFilter;
const myReduce= myExports.myReduce;
const sumValue= myExports.sumValue;
const evenValue= myExports.evenValue;

describe("higher order functions map", function () {
 
    it("create an array of a double of each elements", function () {

        assert.deepEqual(myMap(1, 2, 3, 4, 5],custuMap), [2,4,6,8,10])
 
    })
    
 
    it("create an array of a square of each elements", function () {
 
        assert.deepEqual(myMap([-1, -2, -3, -4, -5],custeMap), [1, 4, 9, 16, 25])
    })
 
})

describe("higher order functions filter", function () {
 
    it("create an array of even Values", function () {
        assert.deepEqual(myFilter([1, 2, 3, 4, 5],evenValue), [2,4])
 
    });
    it("create an array of even values", function () {
        assert.deepEqual(myFilter([11,-20,34,13,67,31,50], evenValue), [-20, 34, 50])
 
    });
 
})

describe("higher order functions reduce", function () {
 
 
    it("sums up values of an array", function () {
 
        assert.deepEqual(myReduce([2,3,6,7,8],sumValue), 26)
    })
    it("sums up values of an array", function () {
 
        assert.deepEqual(myReduce([3,-5,6,-10],sumValue), 6)
    })
});