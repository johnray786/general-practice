// //ARRAY PRACTICE
// //different ways to initialize the arrays
// //you can declare array as asiaTeams:Array<string>=[""]
// let asiaTeams:Array<string> = ["PAK","AUS","IND","BAN","AFG","SLK"];
// //you can declare arrays as worldTeams:(string|number)[]=[""]
// let worldTeams:(string|number)[]=["AUS",1,"PAK",2,"IND",3];
// //you can declare arrays as teamRank:Array<string|number>=[""]
// let teamRank: Array<string|number>=[1,"PAK",2,"IND",3,"BAN"];

// console.log(asiaTeams);
// //above will print the whole asiaTeams array
// console.log(asiaTeams[0]);
// //above will print only the item at index 0 of the asiaTeams array or the first array item
// console.log(worldTeams);
// //above will print the whole worldTeams array
// console.log(worldTeams[1]);
// //above will print the only item at index 1 of the array or the second array item
// console.log(teamRank);
// //above will print the whole team rank array
// console.log(teamRank[2]);
// //above will print only item at index 2 of array or the third array item

//FUNCTION PRACTICE

// let teamScore = [50,0,25,100,10,55,20,22,15,17,0];
// function teamTotal(a:number,b:number):number {
//     let sum = a+b;
//     return sum;
// }
// //above is a simple function 
// let grandTotal:number=0;
// for (let i=0;i<teamScore.length-1;i++){
// grandTotal=grandTotal+teamScore[i];
// console.log(grandTotal);
// }
// //above is the code to add all the numbers in an array

//ANONYMOUS FUNCTION
// let functionVariable = function(a:number,b:number) {
//     console.log(a+b);
// }
// functionVariable(12,200);//this is how to call an anonymous function
//above is the example of anonymous function
//where the function is passed into a variable.
//and it is aslso a void function because it is not
//returning any value.

// let subtraction :(a:number,b:number)=>number=function (a:number,b:number):number{
//     return(a-b);
// }

// console.log(subtraction(15,10));
// //above is the example of anonymoys function 
// // with explicit return type

// //ARROW FUNCTIONS OR LAMBDA FUNCTIONS
// let multi = (a:number,b:number)=>{
//     return a*b;
// }
// console.log(multi(5,111));

// let abb = (c:number,d:number)=>{
//     return c+d;
// }
// console.log(abb(43,11));
// let subbb = (e:number,f:number)=>{
//     return e-f;
// }
// console.log(subbb(70,11));
// //above are the examples of arrow functions or lambda functions

// function wtF(fn:(find:string)=>void){
//     fn(`WTF is this clownry?`);
// }
// function noF(msgs:string){
//     console.log(msgs);
// }
// wtF(noF);
//above wtF function accepts function as parameter and contains only
//a string and does not return any value
//function noF takes a string and displays it
//then woF is called with noF as its argument
//note that noF is not called as a function as it is without paranthesis

// //OPTIONAL PARAMETERS IN THE FUNCTION
// function stRecord(stName:string,stAge:number,stCity?:string){
//     if(stCity){
//         console.log(`${stName} is of ${stAge} years, from ${stCity}.`);
//     }
//     else {
//         console.log(`${stName} is of ${stAge} years, from unknown city.`)
//     }
// }
// stRecord('Juned',35,'TMK');
// stRecord('Dilawar',25);

//DEFAULT PARAMETER IN THE FUNCTION
function carDetails(name:string,model:string,make=1999){
    console.log(name,model,make);
}
carDetails('Suzuki','ALTO');
carDetails('TOYOTA','PRIUS',2022);