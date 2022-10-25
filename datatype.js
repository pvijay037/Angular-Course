"use strict";
//let iname="vijay";
//iname=100;
//const enum Color{
// red,
//blue,
//  green
//}
Object.defineProperty(exports, "__esModule", { value: true });
//let c: Color =Color.blue;
let dob = "25";
let result = parseInt(dob);
//boolean
//let isvalid :boolean;
//console.log(isvalid);
//it will give error
//struict rule in typescript doesnot want to run the program
let isvalid = false;
console.log(isvalid);
//array
//let emplist=[];
//this look in javascript
let emplist1;
emplist1 = ["vijay", "krishna", "ambica"];
let deplist = (Array);
console.log(emplist1);
//this two are used to use array in type script.
let numlist;
numlist = [2, 3, 4, 5, 6, 32, 2, 1];
let res = numlist.filter((num) => num > 2);
let num = numlist.find((num) => num === 2);
console.log(res);
console.log(num);
let emp = emplist1.find((emp) => emp === "vijay");
console.log(emp);
let sum1 = numlist.reduce((acc, num) => acc + num);
console.log(sum1);
let c = 1 /* Color.blue */;
//tuple
let swapNumb;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumb = swapNumbers(10, 20);
swapNumb[0];
//it will give error when u try to enter index numbers out of range
//in array it wont show error
//any keyword
//try to avoid any datatype.
//in production it will give error.
//any is automatically declre.
