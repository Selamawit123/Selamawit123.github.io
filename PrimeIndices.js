/*3.	Write a function that given an array of integers returns the sum of elements at the prime indices. 
For e.g. for an array [1,5,6,7,8,3] result would be a sum of 6+7+3=16 
which are values at the prime indices of the array.*/
function primeIndices(arr){
    if(arr.length===0){
        return false;
    }
        for(let i=0; i<arr;i++ )
    if(i%2!==0){
         return true;
    }
        if(isOdd(n)){

       return true;
        }

    }

function isOdd(n){
    
}
let arr= [3,9,9,5,5,7,9];
console.log(primeIndices(arr));