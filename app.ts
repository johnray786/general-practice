let food: Array<string|number>=["ali","wasi",100,200];
console.log(food[2]);
let price = [100,200,300,400];
// price.push("1000") this shows error because price is not string.
function sum(a:number,b:number):number//return value type
{return a+b;}
//this is named function
let sumAnonymous = function (a:number,b:number):number //anonymous function saved in variable
{return a+b;}//if function doesnt return its called void function
//how to call anonymous function
sumAnonymous(1,2);
function voidExample (){
    console.log(`Hello`)
}
voidExample();

let sub : (num1:number,num2:number)=>number//return tyoe
= function(
    num1:number,
    num2:number
):number {
    return num1-num2;
};

console.log(sub(15,12));
