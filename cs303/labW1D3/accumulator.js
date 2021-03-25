 "use strict"
 //module.exports= {Accumulator};


 
function Accumulator(currentValue,increment){
       this.currentValue=currentValue;
       this.increment=increment;
       this.accumulate=function(){
         return this.currentValue+=this.increment;
       };
       this.report=function(){
          return this.currentValue;   
       }
}
//let accumulate= new Accumulator(4,6)
//let accumulate= new Accumulator(4,6)
//accumulate();
  
