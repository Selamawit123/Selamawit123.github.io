/* Write your own version of Array.map. Write a function, myMap(arr, fun) that takes an array and
a function as arguments and returns a new array that is formed by applying the function to each
element of the array and saving the result in the new array. Do not use the Array.map method in
your code*/
"use strict"
 module.exports= {myFilter, myReduce,evenValue,sumValue};
 /**
  * 
  * @param {Number} arr Given number
  * @param {Number} fn Function
  * @returns {Number} power
  */
 function myMap(arr,fn) {
    let myArray = [];
   
    for (let i = 0; i < arr.length; i++) {
      const result =fn(arr[i], i, arr);
      myArray.push(result);
    }
    return myArray;
  }
  myMap(arr, num => num*2);

/**
 * 
 * @param {Number} arr Given number
 * @param {Number} evenValue Even Number
 * @returns {Number} newArray
 */
function myFilter(arr, evenValue) {
    let newArray = [];
    for (let key of arr) {
        if (evenValue(key)) {
            newArray.push(key);
        }

    }
    return newArray;
}

/**
 * 
 * @param {Number} element  given number
 * @returns{Number} even number
 */
function evenValue(element) {
    return element % 2 === 0;
}
console.log(myFilter[1,2,3,4,5]);


/**
* 
* @param {number} arr given
* @param {number} sumValue sum 
* @return {number} sum 
*/
function myReduce(arr, sumValue) {
    let sum = 0;
    for (let key of arr) {
        sum = sumValue(sum, key);
    }
    return sum;
}
/**
 * 
 * @param {Number} a first number
 * @param {Number} b second number
 * @returns {Number}sum of a and b
 */
function sumValue(a, b) {
    return a + b;
}
 