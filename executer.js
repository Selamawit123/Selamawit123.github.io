"use strict";
const assert = require("assert");
/* eslint-disable */
/* write functions executor, add, and mult as defined by the test below */
describe("executor", function(){
it ("tests add", function(){
assert.strictEqual(executor(add, 5, 10), 15);
});
it("tests mult", function(){
assert.strictEqual(executor(mult, 5, 10), 50);
});
});




function executor(add,num1,num2){
    return add(num1,num2);
    
}
function executor(mult,num1, num2){
    return mult(num1, num2);
}
function add(num1, num2){
    return num1 +num2;
}
function mult(num1,num2){
    return num1*num2;
}