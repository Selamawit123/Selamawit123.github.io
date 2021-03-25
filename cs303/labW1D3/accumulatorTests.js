"use strict";
/* global assert Accumulator */
const assert = require("assert");  
const myExports = require("./accumulator.js");
const myExports = require("./calc.js");
const Accumulator = myExports.Accumulator;  
const Calculator = myExports.Calculator;  

/*
Write a constructor function Accumulator(initialValue, increment).  The object it creates should:
•	Store the current accumulated value in a property currentValue.  The constructor should set this to be initialValue.
•	The accumulate method should increase the currentValue by the increment.
•	The report method should return the currentValue.
*/

describe("accumulator", function () {


    it("checks initialValue and increment", function () {
        const accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.currentValue, 5);
        assert.strictEqual(accumulator.increment, 10);
    });

    it("checks accumulate", function () {
        const accumulator = new Accumulator(5, 10);
        accumulator.accumulate();
        accumulator.accumulate();
        assert.strictEqual(accumulator.currentValue, 25);
        assert.strictEqual(accumulator.increment, 10);
    });    

    it("checks report", function () {
        const accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.report(), 5);
    });    

});