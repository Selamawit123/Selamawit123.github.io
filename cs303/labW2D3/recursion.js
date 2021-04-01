"use strict";
module.exports= {sumTo}
/**
 * 
 * @param {Number} num Given number
 * @returns {Number} number
 */
function sumTo(num) {
    if (num === 1) return 1;
    return num + sumTo(num - 1);
  }
  
console.log(sumTo(10));
 /**
 * 
 * @param {Number} num Given number
 * @returns {Number} number
 */
function factorial(num){      
    if (num===1){
        return 1;
    }
    else{
        return num* factorial(num-1);
    }
}
console.log(factorial(5));
/**
 * 
 * @param {Number} num Given number
 * @returns {Number} number
 */
function fibonacchi(num){
if(num<2){
    return num;
}
    else{
     return fibonacchi(num-1)+(num-2);
    }
}
console.log(fibonacchi(5));
