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
//anonymous function with explicit type definition
let sub : (num1:number,num2:number)=>number//return type
= function(
    num1:number,
    num2:number
):number {
    return num1-num2;
};

console.log(sub(15,12));

// what is callback function & arrow function & callback & async & sync
//reference in const scenario
//arrow function or lambda are anonymous function
let multiply = (a:number,b:number):void=>{

}


function greeter(fn:(message:string)=>void){
    fn("hello");
}
function abc(message:string){

    console.log(message);
}
greeter(abc)//passing function as argument and program starts from this
//abc is not called. it is passed as argument thats why no paranthesis

//optional parameter

function abcd(name:string,age:number,contact?:number)//optional parameter
{
if (contact){console.log(contact)}
else {console.log(`No contact number`)};
}
abcd('ali',19,300);
// default paramaters in optional values
function exp(name:string,contact:number,address=`karachi`)
{
    console.log(name,contact,address);
}

exp('Juned',300,'hyderabad');


//rest parameters using rest operator ...
//rest parameters are used in the end of function parameters
function restEg(op:string, ...numm:number[]){
console.log(op,numm);
}
restEg('Juned',1,2,3,4);
//tuples or fixed array is where you fix the length of the array
let a:[1,2,3,4] = [1,2,3,4];
//but if you use a.push() it lets you add the value in the array. thats an issue in TS.
// we can also push() in const
const bbb = ["A","B","C"];
bbb.push("D");
console.log(bbb);


