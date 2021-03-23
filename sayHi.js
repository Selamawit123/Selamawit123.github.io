"use strict";
function sayHi(){
    console.log("Hello");
}
const myHi= sayHi;
console.log(sayHi());
function higherOrder(){
    return sayHi;
}
higherOrder()();