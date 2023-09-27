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
//this is called callback function
//a string and does not return any value
//function noF takes a string and displays it
//then woF is called with noF as its argument
//note that noF is not called as a function as it is without paranthesis

// function parentFunction (cbFunc:any){
//     console.log(`Parent Function`);
//     cbFunc();
// }

// function cb(){
//     console.log(`CallBack Function`);
// }
// parentFunction(cb);
// console.log(`First`);

// //OPTIONAL PARAMETERS IN THE FUNCTION
//optional paramter is added using "?" question mark after parameter name
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
//this lets you set default parameter using = sign in a function
// function carDetails(name:string,model:string,make=1999){
//     console.log(name,model,make);
// }
// carDetails('Suzuki','ALTO');
// carDetails('TOYOTA','PRIUS',2022);

// //REST PARAMETER EXAMPLE
//with rest parameters you can add many parameters at once in a function
// function yourfavfood(name:string,...names:string[]){
//     console.log(name,names)
// }

// yourfavfood('biryani','burger','pizza','pulao','steak');
// function totalSum(...num:number[]){
// let sum:number=0;
//     for(let i=0;i<num.length;i++){
//         sum=sum+num[i]
// }
// console.log(sum);
// }
// totalSum(10,20,30,40,50,60,70,80,90,100);

//TUPLES PRACTICE

// let ab:['John','Wick']=["John","Wick"];
// console.log(ab);
// //this is a fixed array you can not ammend it
// const abb = ['Ahmed',"Bhai"];
// abb.push("UK");
// console.log(abb);

// // ASYNC FUNCTION PRACTICE

// console.log(`First code to be run FIRST`);
// setTimeout(() => {
//     console.log(`This is second step but will be run THIRD`);
// }, 2000);
// console.log(`Third step will be run SECOND`);

// let orderKFC = ()=>{
//     console.log(`Order Received`);
//     console.log(`Preparing Zinger`);
//     setTimeout(() => {
//         console.log(`Your Zinger is ready for Delivery`);
//     }, 5000);
// }

// let myOrder = orderKFC();
// console.log(`Please wait`)
// //in above example when orderKFC is called then
// //first thing to run is Order Received
// //second thing to run is Preparing Zinger
// //third theres a timeout with 5sec delay 
// //so callstack goes to  Please wait instead of Your Zinger..
// //so Please wait is printed third
// //then after 5 sec delay Your Zinger ... is printed fourth


//CALLBACK FUNCTIONS

// let orderBigMac = (cb:()=>void,errorhandle:()=>void)=>{
// console.log(`Preparing Burger`);
// let isAsh=true;
// setTimeout(() => {
//     if(isAsh){errorhandle();}
//     else{cb();}
// }, 4000);
// }
// let macReady = ()=>{console.log(`BigMac Ready!`)};
// let macError = ()=>{console.log(`BigMac NOT ready, something went wrong!`)};
// orderBigMac(macReady,macError);

// //above method works fine in simple scenarios
// //but in complex scenarios when there are many functions
// //the situation becomes nightmare


//BETTER APPROACH IS PROMISES THAN CALLBACKS
// console.log(`Order Received`)
// let chkPromise = () => {
//     return new Promise((resolve, reject) => {
      
//       setTimeout(() => {
//         let jal = true;
//         if (jal) {
//           reject();
//         } else {
//           resolve('Enjoy Your Meal');
//         }
//       }, 3000);
//     });
//   };
  
//   chkPromise()
//     .then((value) => console.log(value))
//     .catch(() => console.log('BURNT'));
  
//   chkPromise().catch(() => console.log('BURNT'));
//  let checkpromise = ()=> 
//  {
// return new Promise((resolve,reject) =>
//     {
//         setTimeout(() => 
//         {
//             let mealstat = false;
//             if (mealstat)
//             {
//                 reject(mealstat);
//             }
//             else
//             {
//                 resolve(`Ordered Meal Ready`);
//             }
//         }, 3000);
//     }
//                   )
//  } 
//  checkpromise()
//     .then((value)=>console.log(value))
//     .catch(()=>console.log(`Burnt meal! SORRY`));

// console.log(`Your Order is received`);
// console.log(`Preparing your meal`);
// let againcheckpromise = ()=>
// {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             let stat = false;
//             if (stat){resolve(`THE MEAL YOU ORDERED IS READY`)}
//             else{reject()}
//         }, 2000);
//     })
// }
// againcheckpromise()
//     .then((value)=>console.log(value))
//     .catch(()=>console.log(`Meal Burnt. Apologies`))

// console.log(`Order Received.`);
// console.log(`Preparing Your Meal`);
// let checking = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         let sarh = false;
//         if(sarh){reject()}
//         else{console.log(`Order Ready`)}
//         }, 2000);        

//     })
// }
// checking()
//     .then((value)=>console.log(value))
//     .catch(()=>console.log(`SO SORRY! THE MEAL BURNT ;(`))
// console.log(`Your Order Received!`)
// setTimeout(() => {
//     console.log(`Preparing`)
// }, 1000);

// setTimeout(() => {
//     for (let i=0;i<=3;i++)
//     {console.log(`.`);}
// }, 2000);
// let barbarcheck= ()=> {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let maani = true;
//             if(maani){resolve(maani)}
//             else{reject(maani)}
//         }, 2000);
//     })
// }
// barbarcheck()
//     .then((value)=>console.log(`WAIT IS OVER! ENJOY YOUR MEAL`))
//     .catch((value)=>console.log(`OH NO! The meal burnt ;(`))
let makeOrderz = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let burnt = true;
            if(burnt){reject(`BURNT PIZZA`)}
            else {resolve(`YOUR PIZZA IS READY`);}
        }, 4000);
        
    });
}

let getOrderz = async () => {
    // in this approach try and catch is used for error handling
    try{
        let result = await makeOrderz();
        console.log(result);}
    catch(error){
        console.log(error);
    }
    }
    
    getOrderz();