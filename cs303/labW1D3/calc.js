"use strict"
module.exports= {Calculator};
/**
 * @returns {Calculator} this is a constructor function
 */
 function Calculator() {

 
  this.getvalues=  function(val1,val2) {
     
      this.a = val1;
      this.b = val2;
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calc = new Calculator();
  calc.read();
  
        