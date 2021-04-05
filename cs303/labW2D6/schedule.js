"use strict"
/*1. Do the 2 timeout exercises from the Advanced working with functions > Scheduling: 
setTimeout and setInterval section of the book:
a. Output every second
o setInterval version
o make the numbers print out after the “from” seconds, e.g., 5 will print after 5 seconds, 
then 6 in one more second, etc (this is optional – if you want extra coding practice)
 */

/** 
 * @param {Number} from seconds
 * @param {Number} to  in one more seconds
 * @returns {Number} outPut in every second
 */
function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
    console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    },6000);
  }
  
  printNumbers(5, 10);

/*2. Recall the bank question from the first exam. The transactionsDB is publicly accessible to any 
code that has access to the bank object. Write a makeBank function that will encapsulate and 
return the bank object. Make the transactionsDB private by making it a local variable in the 
makeBank function instead of a property on the bank object.*/

const bank = { transactionsDB: [],};
bank.transactionsDB = [
 { customerId: 1, customerTransactions: [10, 50, -40] },
 { customerId: 2, customerTransactions: [10, 10, -10] },
 { customerId: 3, customerTransactions: [5, -5, 55] }];

bank.getBalance = function (id) {
 const customer = bank.transactionsDB.find(customer => customer.customerId === id);
 let balance = 0;
 for (const trans of customer.customerTransactions) { balance += trans; }
 return balance; };


/**  
 *  @returns {number} returns sum of all balances 
 */
 bank.bankBalance = function () { 
    const customerArray = this.transactionDB;
    let sum = 0;
    for(const customer of customerArray){
        const customerId = customer.custID;
        const custBalance = this.getBalance(customerId);
        sum += custBalance;
    }
    return sum;
};