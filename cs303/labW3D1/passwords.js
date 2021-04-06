"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */
/*Do these exercises from the Advanced working with functions > Function binding section of section
of the book:
• Function property after bind
o (Illustrates concept of a function being bound to an object, ‘this’)
Use the Mocha test file, passwordTests.js, for the following two tasks from the book. You will need to
modify the book functions to return values instead of displaying alerts.
• Fix a function that loses “this” (do with bind, wrapper, call, and apply)
• Partial application for login
*/


let prompt = require("prompt-sync")();
/**
 * this is ask password using bind
 */
console.log("\nthis is using bind to solve problem of this \n");
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

/**
 * this is ask password using call
 */
console.log("\nthis is using call to solve problem of this \n");
function askPassword1(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user1 = {
  name: "John",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword1.call(user1, user1.loginOk, user1.loginFail);

/**
 * this is ask password using apply
 */
console.log("\nthis is using apply to solve problem of this \n");
function askPassword2(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: "John",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword2.apply(user2, [user2.loginOk, user2.loginFail]);


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {askPassword, user, askPassword2, user2 }; 