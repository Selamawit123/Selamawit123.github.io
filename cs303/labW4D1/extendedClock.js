//eslint-disable require-jsdoc;
"use strict";

//const{Clock}=require("./clock")
class ExtendedClock extends Clock{
    constructor({ options },stick=2000){
        super({ options})
        this.stick=stick;
    }
    start() {
        this.render();
        this.timer = setInterval(() => {this.render()
          
        }, this.stick);
      }

}
let clock =new ExtendedClock({options: 'h:m:s'},2000)
 clock.start()