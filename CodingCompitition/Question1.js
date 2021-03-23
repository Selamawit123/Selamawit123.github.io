/*Write a function divisibleSumPairs that takes an array of integers and a positive integer k, 
determines the number of (i,j) pairs where i<j and arr[i]+arr[j] is divisible by k.*/


function divisibleSumPairs( k, arr){
    count=0;
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            if (i<j && (arr[i]+arr[j])%k===0);
            count++
        }
        return count
    }
}

console.log(divisibleSumPairs(3,[1,2,3,4,5,6]));