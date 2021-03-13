"use strict"
/**
 * 
 */
function pageLoad(){
    let btnAlarm= document.getElementById("go");
    let bodyStyel=document.getElementById("bodyPart")
    btnAlarm.onclick=setAlarm; 
    let myMinCounter;
    let mySecCounter;
    /**
     * 
     */
    function setAlarm(){
         let  min = Number(document.getElementById("min").value) 
          let sec=Number(document.getElementById("sec").value)
          mySecCounter = setInterval(alarmCounter,1000);
          /**
           * 
           * @return{};
           */
                function alarmCounter(){
                    if(min===0 && sec===0){
                        stopCounter()
                        clear();
                        bodyStyel.className= "bodyStyle"
                        return;
                    }			
                    else if(sec===0){
                        min--;
                        document.getElementById("sec").value = 59;
                        sec=Number(document.getElementById("sec").value)
                        document.getElementById("min").value = min;	
                    }
                    document.getElementById("sec").value = sec
                    sec--;	
                    }
             }
             /**
              * 
              */
    function clear(){
            document.getElementById("min").value="";
            document.getElementById("sec").value="";
    }
             
     /**
      * 
      */        
    function stopCounter(){
        clearInterval(mySecCounter);
        clearInterval(myMinCounter);  
     }
}
/**
 * 
 */
function init(){
    window.onload = pageLoad; 
}

init();