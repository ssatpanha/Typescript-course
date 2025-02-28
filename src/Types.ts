// run command tsc -watch in terminal
//open new terminal run command node publiv/Types.js

//Explicit simple type to declare variable with a datatype

let firstname:  string = "Sat" ;
let lastname: string = "Panha";
console.log(firstname +" " +lastname);

//Specail type is to declare variable and can change the datatype 

let number: any = 12;
number = "string";
number = {
    runAnonExistentMethod: () => {
        console.log("I think therefore I am");
    }
} as{ runAnonExistentMethod: () => void}

if (typeof number === "object" && number !== null){
    (number as {runAnonExistentMethod: Function}).runAnonExistentMethod();
}

// declare a simple user in type script and change the value after declare

const user: {
    name: string;
    id : number;
    isSingle : boolean;
} = {
    name : "Sat Panha",
    id : 100033,
    isSingle : true,
};
console.log("name : "+ user.name+ "\nID : " + user.id+ "\nsingle : " + user.isSingle);

// Array and arrow function 

let list : number[] = [1, 2, 3];
list.push(4);
list.forEach((value : number ) => {
    console.log(value);
});

const sum = (a: number, b: number) => a + b;
let twoSum = sum(list[1], list[2]);
console.log(twoSum);

console.log("\n");

let queue : Array<number> = [6, 7, 8];
queue.forEach((value : number) => {
    console.log(value);
})

// tuple 

let testTuple :[name: string, id : number, isSingle : boolean];
testTuple = ["Sat Panha", 100033, true];
// testTuple.push("Panha Sat");
testTuple.forEach((value : any) => {
    console.log(value);
})