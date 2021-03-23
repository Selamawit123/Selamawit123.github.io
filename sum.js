/*	Write a JavaScript function isSumOfPrimesEven that takes an array of positive integers as an
 argument and returns true if the sum of all the prime elements in the given array is even otherwise returns false. 
If the array is empty or if the array does not contain any prime element it should return false.*/
function isSumofPrimesEven(arr){
    let input=[];
    let sum=0;
    for(let i=0; i<input.length; i++){
       
        if(input%i!==0){
           sum= sum+i;
            if(sum%2==0){
            return true;}
        }
       else if(input===""){
           return false;
       }
        else {
            return false;
        }
        
    }   
}
let input1= [1,2,3,4,5,6]
console.log(isSumofPrimesEven(input1));
