"use strict";
/**
 * 
 * @param {number} num1 is a number
 * @param {number} num2 is a number 
 * @param {number} num3 is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(num1, num2, num3){ 
    if(num1>num2&&num1>num3){
        return num1;
    }
    else if(num2>num1&&num2>num3){
        return num2;
    }
    else{
    return num3;
     }
}

/**
 * @param {Number} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let total = 0;
    
    for(let i=0; i<arr.length; i++){
        total= total +arr[i];

    }

    return total;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} product of arr numbers
 */
function multiply(arr){
    let total = 1;
    for (let i=0; i<arr.length;i++){
        total= total*arr[i];
    }

    return total;

}
/*
3.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one. 
*/
/**
 * 
 * @param {String} arr of words
 * @returns {Number} length of the longest word
 */
function findLongestWord(arr){
    let longest = arr[0];
    for(let i=0; i<arr.length;i++){
        if(arr[i].length>arr[0].length){
            longest=arr[i];
        }
      
    }
    return longest.length;
}
/*
4.	Reverse an Array 
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
For this exercise, write two functions, reverseArray and reverseArrayInPlace.
 The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
  The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
   Neither may use the standard reverse method. 
*/
/**
 * 
 * @param {String} arr of atring
 * @returns {string} reversed string
 */
function reverseArray(arr){
    let arr1= [];
     for(let i=arr.length-1;i>=0;i--){
    arr1.push(arr[i]);
     }
     return arr1;
    
 }
 //console.log(reverseArray(["3","2","1"]));
/**
 * 
 * @param {String} arr of String
 * @returns {String} reversed String
 */
 function reverseArrayInPlace(arr){
    
    for(let i=0; i<arr.length;i++){
         arr.reverse();
    }
    return arr.reverse();
}
//console.log(reverseArrayInPlace(["3","2","1"]));
/**
 * 
 * @param {Number} array of Student answers
 * @param {Number} correctAnswers correct answers
 * @returns {Number} correctCount
 */    
function scoreExams(array, correctAnswers) {
    let studentsAnswers = [];
 
    for (let i = 0; i < array.length; i++) {
        let correctCount = 0;
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === correctAnswers[j]) {
                correctCount++;
 
            }
        }
        studentsAnswers.push(correctCount);
    }
    return studentsAnswers;
}
 
//console.log(scoreExams([[1, 1, 2], [2, 1, 2], [3, 1, 3]], [3, 1, 2]));
module.exports= {maxOfThree,sum,multiply,findLongestWord,reverseArray,reverseArrayInPlace,scoreExams}




