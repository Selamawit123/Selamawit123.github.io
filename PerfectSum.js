/*An array is called a perfectly odd array if every element at the odd indices of the array is also odd.
 Write a function named isPerfectlyOdd that takes an array of integers as a parameter and checks whether it is perfectly odd.
 Return false if the array is an empty array.*/
 function isPerfectlyOdd(arr){
     if(arr.length===0){
         return false;
     }
   
     for (let n of arr){
         if(isOdd(n)){

        return true;
         }

     }
 }
 function isOdd(n){
     for(let i=0; i<n.length;i++ )
     if(i%2!==0){
          return n;
     }
 }
 let arr= [3,9,9,5,5,7,9];
 console.log(isPerfectlyOdd(arr));