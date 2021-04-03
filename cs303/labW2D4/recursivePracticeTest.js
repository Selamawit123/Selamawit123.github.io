"use strict";

/*const assert = require("assert"); 
const myExports = require("./recursivePractice.js");
const subtree = myExports.subtree;*/



describe("Return subtree ", function () {
   let genet;
    it("Given a target value, return value", function () {

          assert.deepEqual(subtree(genet, "Genet"), 0);
    });

    it("Reverse name ", function () {
        let genet;
        assert.deepEqual(subtree(genet, "Genet"), false);

    });
});