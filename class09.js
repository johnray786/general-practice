"use strict";
// //class 09
// //async programming 
// //what is sync - to work step by step or in a serires
// //if theres a code which takes time then rest of the code doesnt run
// //for that async works
// //meaning rest of the code is being run while a task is being performed
// console.log("Task 1");
// for (let i = 0; i < 10000000000; i++){}
// // above code takes time to run so async programming comes into play
// //so that the program does not stop at one calculation and runs other code
// console.log("Task 2");
// //call back function
// // when you pass function as parameter in function
// function parentFunction (cbFunc:any){
//     console.log(`Parent Function`);
//     cbFunc();
// }
// function cb(){
//     console.log(`CallBack Function`);
// }
// parentFunction(cb);
// console.log(`First`);
// //settimeout is by default async function
// //outocme will be First, Third, Second
// setTimeout(()=>{
//     console.log(`Second`)
// }, 2000);
// for (let i = 0; i < 10000000000; i++){}
// setTimeout(()=>{
//     console.log(`Third`)
// }, 2000);
//call stack runs the code until timeout function 
//then gives the code running function to web API.
//then after timeout the code is given to call back queue
// let orderPizza = ()=>{
//     console.log(`Preparing Pizza`);
//     setTimeout(() => {
//        return `Pizza Ready` 
//     }, 5000);
// }
// let pizza = orderPizza();
// console.log(pizza);
// console.log(`Juned`);
// //needs clarification
let orderPizza = (cb, handleErrorCb) => {
    console.log(`Preparing Pizza`);
    let isBurnt = true;
    setTimeout(() => {
        if (!isBurnt) {
            cb();
        }
        else {
            handleError();
        }
    }, 5000);
    console.log(`Test Console`);
};
let ringBell = () => {
    console.log(`Your Pizza Is Ready`);
};
let handleError = () => {
    console.log(`Something went wrong`);
};
let pizza = orderPizza(ringBell, handleError);
