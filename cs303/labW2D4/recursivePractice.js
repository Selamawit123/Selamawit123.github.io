"use strict";
//1- Qeestion one
exports.subtree = subtree;


class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendents = [];
    }
}
/* replacemtn of above treenode clas code */
/**
 * 
 * @param {*} value nodes
 */
function treeNode2(value) {
    this.value = value;
    this.descendents;
}
// create nodes with values
const welde = new TreeNode("Welde");
const genet = new TreeNode("Genet");
const selam = new TreeNode("Selam");
const mahder = new TreeNode("Mahder");
const nahom = new TreeNode("Nahom");
// associate root with is descendents
welde.descendents.push(genet);
genet.descendents.push(selam, mahder, nahom);

/**
 * 
 * @param {*} node 
 * @returns{}
 */
function printName(node) {

    if (node.descendents === null) {
        console.log("name:", node.value);
    }
    else {        
        console.log("name:", node.value);
        for (let child of node.descendents) {
            printName(child);
        }
    }
}

console.log(printName(welde));
/*2,Given a target value, return true or false if there is a node in the tree with the target value. E.g.,
contains(tree, “Lisa”) → true
contains(tree, “Crusty”) → false*/
 /**
  * 
  * @param {*} node in the tree
  * @param {*} target value
  * @returns {Boolean} contains true
  */
function contains(node, target) {
    if (node.descendents === null) {
        if (node.value === target) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        let childresult = false;
        if (node.value === target) {
            return true;
        }
        for (let child of node.descendents) {
            childresult = contains(child, target);
            if (childresult === true) {
                return true;
            }
        }
        return childresult;
    }
}

console.log(contains(welde, "Selam"));//this should be true;
console.log(contains(welde, "Mahder"));//this should be true;

/*  3. Given a target value, return the subtree with the found node or null if no match. Extend the
tree to have a more interesting test. Create a mocha test to run at least 2 or 3 tests on your
tree.
findSubtree(tree, “Homer”) → subtree with Homer as the root
 */

/**
 * 
 * @param {*} TreeNode tree
 * @param {*} target value
 * @returns {*} subtree
 */
    function subtree(TreeNode, target) {
        /* base case -- if children is null or empty */
        if (TreeNode.descendents === []) {
            if (TreeNode.value === target) {
                return TreeNode;
            } else {
                return undefined;
            }
        } else { //reductive recursion step
            let childResult = null;
            if (TreeNode.value === target) {
                return TreeNode;
            }
            for (let child of TreeNode.descendents) {
                childResult = subtree(child, target);
                if (childResult === TreeNode) {
                    return TreeNode;
                }
            }
            return undefined; //did not find the target 
        }
    }

 console.log("testing welde, should be true: ", subtree(welde, "Welde"));


 

/* 6. Write a recursive function, treeModifier, that will take a tree and a modifier function as
parameters. Walk through the tree and apply the function to each node. The function should
apply the following operations to each node. treeModifier(tree, modiferFunc)
• allCaps(node) will change the value of a node to be all caps.
• addStars(node) will change the value to have *** in front and behind the node value.
• reverseNode(node) will reverse the string of the node value. Abe -> ebA
Call your recursive function with each of these modifier functions. */
/**
 * 
 * @param {*} treeNode given
 * @param {*} modFunc tree modifier
 * @returns {*}modified
 */
function treeModifier(treeNode, modFunc) {
    modFunc(treeNode);
    if (treeNode.descendents.length === 0) {
        return undefined;
    } else {  //loop through the array of descendents and recursively call treeModifier
        for (const node of treeNode.descendents) {
            treeModifier(node, modFunc);
        }
    }
}
/**
 * 
 * @param {*} node node
 * @return {*} 
 */
function caps(node) {
    node.value = node.value.toUpperCase();
}

console.log("the tree modifier rules", treeModifier(welde, caps));
console.log("now tree has stars", welde);

/*7- Write a recursive function, treeCollector(tree) that will walk the tree and collect the values of
each node into an array [“Abe”, “Homer”, “Bart”, “Lisa”, “Maggie”] for this tree. You may want
to use an accumulator variable that is external to the function to hold the values. */
// let lisa = { name: "Lisa", next: null }
// let berta = { name: "Berta", next: null }
// let maggie = { name: "Maggie", next: null }
// let hommer = { name: "Hommer", next: [maggie, berta, lisa] }
// let abe = { name: "Abe", next: hommer }
//console.log(abe);
/**
 * 
 * @param {*} arg tree 
 * @returns 
 */
function linkedlist(arg) {
    let x = arg.name;
    let z = arg.next;
    if (z === null) {
        return x
    }
    else {
        for (let y in arg.name) {
            linkedlist(y)

        }
    }
    return x, z;
}
console.log(linkedlist(welde));



/* 
8. Find the bank.js file in 303Demos\d24recursiveStructures\bank.js. Complete the
implementation as indicated in the code. */

const bank = {
    transactionDB: [],
};

bank.transactionDB = [
    { custID: 1, custTrans: [10, 50, -40] }, // balance = 20
    { custID: 2, custTrans: [10, 10, -10] }, // balance = 10
    { custID: 3, custTrans: [5, -5, 55] }, // balance = 55
];

bank.checkId = function (id) {
    const foundCustmr = bank.transactionDB.find(customer => customer.custID === id);
    return foundCustmr;
};

bank.getBalance = function (id) {
    const customer = this.checkId(id);
    const balance = customer.custTrans.reduce((sum, item) => sum + item, 0);
    return balance
}

bank.saveTransaction = function (id, amount) {
    const customer = this.checkId(id);
    customer.custTrans.push(amount);
}

bank.debit = function (id, amount) {
    let balance = this.getBalance(id);
    if (amount < 0) {
        console.log("Invalid amount. Please enter positive amount !");
    } else if (amount > balance) {
        console.log("Insufficient balance. Please try again !");
    } else {
        amount = amount * -1;
        balance += amount;
        this.saveTransaction(id, amount);
    }
    return balance;
};

bank.credit = function (id, amount) {
    let balance = this.getBalance(id);
    if (amount < 0) {
        console.log("Invalid amount. Please enter positive amount !");
    } else {
        balance += amount;
        this.saveTransaction(id, amount);
    }
    return balance;
}

bank.totalBalance = function () {
    const custArr = this.transactionDB;
    let sum = 0;
    for (const customer of custArr) {
        const id = customer.custID;
        const custBalance = this.getBalance(id);
        sum += custBalance;
    }
    return sum;
}