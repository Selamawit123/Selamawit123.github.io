"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/*module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator, 
  copySorted,sortByAge,getAverageAge }; //add all of your function names here that you need for the node mocha tests*/


function filterRange(arr, a, b) {     
    return arr.filter(item => (a <= item && item <= b));
  }  
  let arr = [5, 3, 8, 1];  
  let filtered = filterRange(arr, 1, 5);  
  console.log(( filtered));    
  console.log((arr ));  
 
  function filterRangeInPlace(arr, a, b) {
      for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
          arr.splice(i, 1);
          i--;
        }
      }    
    }    
    let arr1 = [5, 3, 8, 1];    
    filterRangeInPlace(arr1, 1, 5); 
    console.log(arr1); 
    console.log(filterRangeInPlace([3,2,1],1,5));



  function Calculator() {
     let a;
     let b;
     let op;

      this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "*": (a, b) => a * b,
       // "**":(a, b) => a ** b,
      };
    
      this.calculate = function(str) {    
        let split = str.split("")
          a = +split[0],
          op = split[1],
          b = +split[2];    
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
          return NaN;
        }    
        return this.methods[op](a, b);
      };    
      this.addMethod = function(name, func) {
        this.methods[name] = func;
      };
    }
  //let calculator= new Calculator;
 //console.log(calculator.calculate("2+3"));
// console.log(calculator.calculate("5-3"));
// console.log(calculator.calculate("5*2"));
  //console.log(calculator.calculate("2**3"));
   

  function unique(arr) {    
      let result = [];    
      for (let str of arr) {
        if (!result.includes(str)) {
          result.push(str);
        }
      }
    
      return result;
  }
  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }  
  
  function copySorted(arr) {
    return arr.slice().sort();
  }
  
  function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
  }
  
  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  