"use strict";
// run command tsc -watch in terminal
//open new terminal run command node publiv/Types.js
//Explicit simple type to declare variable with a datatype
let firstname = "Sat";
let lastname = "Panha";
console.log(firstname + " " + lastname);
//Specail type is to declare variable and can change the datatype 
let number = 12;
number = "string";
number = {
    runAnonExistentMethod: () => {
        console.log("I think therefore I am");
    }
};
if (typeof number === "object" && number !== null) {
    number.runAnonExistentMethod();
}
// declare a simple user in type script and change the value after declare
const user = {
    name: "Sat Panha",
    id: 100033,
    isSingle: true,
};
console.log("name : " + user.name + "\nID : " + user.id + "\nsingle : " + user.isSingle);
// Array and arrow function 
let list = [1, 2, 3];
list.push(4);
list.forEach((value) => {
    console.log(value);
});
const sum = (a, b) => a + b;
let twoSum = sum(list[1], list[2]);
console.log(twoSum);
console.log("\n");
let queue = [6, 7, 8];
queue.forEach((value) => {
    console.log(value);
});
// tuple 
let testTuple;
testTuple = ["Sat Panha", 100033, true];
// testTuple.push("Panha Sat");
testTuple.forEach((value) => {
    console.log(value);
});
