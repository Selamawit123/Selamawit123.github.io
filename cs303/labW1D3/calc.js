"use strict";
//module.exports={Calculator};

 /**
  *@returns {Calculator} constructor function 
  */
function Calculator(){
    /**
     * 
     * @returns{Number} sum;
     */
    this.sum=function(){
       return this.a+this.b;
    };
    /**
     * 
     * @returns {Number} multiply;
     */
    this.mul=function(){
        return this.a*this.b;
    };
    /**
     * 
     * @returns {Number} subtract;
     */
    this.sub=function(){
        return this.a-this.b;
    };
    /**
     * 
     * @returns {Number} divide;
     */
    this.div=function(){
        return this.a/this.b;
    };
}

