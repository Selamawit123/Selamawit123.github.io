"use strict"
module.exports={Accumulator};
/**
 * 

 * @returns {Accumulator} constructor function
 */
 function Accumulator(startVal) {
    this.value = startVal;
  
    this.read = function(val1,val2) {
      this.value= this.value+ val1+val2 ;
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  
