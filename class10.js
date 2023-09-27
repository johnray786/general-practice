"use strict";
// //overloads give us type-checked calls
// //its customary to order overloads from most specific to least specific
// //function overloads allow multiple input parameters 
// function add(arg1: string, arg2: string): string;//option 1
// function add(arg1: number, arg2: number): number;//option 2
// function add(arg1: boolean, arg2: boolean): boolean;//option 3
// //this is not part of the overload list, 
// //so it has only three overloads
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }
// //Calling 'add' with any other parameter types would cause an error except for the three options
// console.log(add(1, 2));
// console.log(add("Hello", "World"));
// console.log(add(true, false));
// function greet(name:string, isHappy:boolean):string{
//     return isHappy?`Hello, ${name}! :)`:`Hello, ${name} :()`
// }
// let abab = greet("Alex",false);
// console.log(abab)
// OBJECT ORIENTED PROGRAMMING
class Student {
    constructor(name, age) {
        this.age = age;
        this.name = name;
        // console.log(this)
        //this creates the object when you call new Student();
    }
}
let studentInfo = new Student("Hamza", 33);
console.log(studentInfo);
let studentInfo1 = new Student('Dilawar', 22);
console.log(studentInfo1);
class Point {
}
let bbbb = new Point();
bbbb.x = 786;
