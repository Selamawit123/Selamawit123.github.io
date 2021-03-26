"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, getMaxSubSum, truncate , camelize, checkSpam,extractCurrencyValue};  



function ucFirst(str) {

  if (!str) return str;
  if(str=== "") return "";
  let lower = str.toLowerCase();

  return lower[0].toUpperCase() + lower.slice(1);
}

function checkSpam(str) {
  let lowerStr = str.toLowerCase();
   if(lowerStr.includes('Buy viagra Now') || lowerStr.includes('Free xxxxx')){
     return true;
   }
    return false;
}

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
 function getMaxSubSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
      let start = 0;
      for (let j = i; j < arr.length; j++) {
          start += arr[j];
          maxSum = Math.max(maxSum, start);
      }
  }
  return maxSum;
}


function camelize(str){

  let camel = false;
  let camelString = '';

  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === '-'){
      camel = true;

    } else if(camel) {
      camelString += str.charAt(i).toUpperCase();
      camel = false;
    } else {
      camelString += str.charAt(i);
    }
  } 
  return camelString;
}


function extractCurrencyValue(str) {
  return +str.slice(1);
}