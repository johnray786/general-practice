"use strict";
let food = ["ali", "wasi", 100, 200];
console.log(food[2]);
let price = [100, 200, 300, 400];
// price.push("1000") this shows error because price is not string.
function sum(a, b) { return a + b; }
//this is named function
let sumAnonymous = function (a, b) { return a + b; }; //if function doesnt return its called void function
//how to call anonymous function
sumAnonymous(1, 2);
function voidExample() {
    console.log(`Hello`);
}
voidExample();
//anonymous function with explicit type definition
let sub //return tyoe
 = function (num1, num2) {
    return num1 - num2;
};
console.log(sub(15, 12));
// what is callback function & arrow function & callback & async & sync
//arrow function or lambda are anonymous function
let multiply = (a, b) => {
};
function greeter(fn) {
    fn("hello");
}
function abc(message) {
    console.log(message);
}
greeter(abc); //passing function as argument and program starts from this
//abc is not called. it is passed as argument thats why no paranthesis
