"use strict";
module.exports= {random};
/**
 * 
 * @param {Number} min given number
 * @param {Number} max max given number
 * @returns {Number} random number
 */
function random(min, max) {
    let randNumber= Math.floor(min + Math.random() * (max - min));
    if (randNumber===min){
      return randNumber+1;
    }
    else if(randNumber===max){
      return randNumber-1;
    }
    else{
      return randNumber;
    }

  }
  
  console.log((random(1, 5)));
  console.log((random(2, 10)));
  console.log((random(3, 7)));
