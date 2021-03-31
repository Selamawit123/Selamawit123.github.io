/* Write your own version of Array.map. Write a function, myMap(arr, fun) that takes an array and
a function as arguments and returns a new array that is formed by applying the function to each
element of the array and saving the result in the new array. Do not use the Array.map method in
your code*/
"use strict"
 module.exports= {myFilter, myReduce,evenValue,sumValue};
const array= [10,30,45,60];
let users= [{ id:1,name:"Selam"},
{id:2, name:"Nahom"},
{id:3, name: "Mahe"}
]

Array.prototype.custeMap = function(myMap){
let newArray= [];
for( let i=0;i<this.length;i++){
    newArray.push(myMap(this[i]));
}
return newArray;
}
let newUsers = users.custeMap(obj=>{
    let nObj ={}
    nObj[obj.id]= obj.name;
    return nObj;
});
let newArr= array.custeMap(x => x*2);
console.log(newArr);
console.log(newUsers);


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
 