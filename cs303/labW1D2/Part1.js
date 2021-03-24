"use strict";
let user={name:"John",surname:"smith"};
user.name="pete";
delete user.name;
console.log(user);
/**
 * 
 * @param {Object} obj obj
 * @returns {Boolean} Boolean
 */
function isEmpty(obj){
    for (let key in obj){
        //if the object has properties
        return false;
    }
    return true;
}
let schedule = {};

console.log(( isEmpty(schedule))); // true

schedule["8:30"] = "get up";

console.log(( isEmpty(schedule))); // false


let salaries={John:100,Ann:160,Pete:130}; 
let sum=0;  
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

 /**
  * 
  * @param {Object} obj obj
  * @returns {Object} obj 
  */
function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == "number") {
        obj[key] *= 2;
      }
      return obj[key]*2;
    }
   
  }
  let menu = {width: 200,height: 300, title: "My menu"};
  multiplyNumeric(menu);
  console.log("width:" +menu.width + " height:"+ menu.height + " title:" + menu.title) ;

