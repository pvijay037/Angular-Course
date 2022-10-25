//function add(a,b);{
//    return a+b;
//}
//it is written in javascript
function add(a:number,b:number):number{
    return a+b;
}
//named function

console.log(add(2,3));
const sub=(num1:number,num2:number):number=>num1-num2;
console.log(sub(3,1));
//arrow function

const mul=function(num1:number,num2:number):number{
return num1*num2;
}
console.log(mul(2,3));
//fuction expression

//tis are the some types we can write the functions in angular

//optional para,required,rest parameters
//optional parameter
function add1(a:number,b:number,c?:number):number{
    return c?a+b+c:a+b;
}
console.log(add1(2,3));
console.log(add1(2,3,5));

//required parameters
const sub1=(num1:number,num2:number, num3=10):number=>num1-num2-num3;
console.log(sub1(3,1));
console.log(sub1(3,1,6));

//rest parameters
function add2(a:number,b:number,...c:number[]):number{
    return a+b+c.reduce((a,b)=>a+b,0);
}
console.log(add(5,9));

let nums=[1,2,3,4,5];
console.log(add2(2,3,...[3,4,3,5,4,6,5]));
console.log(add2(1,3,...nums));
console.log(add2(1,3,4,5,5,6,6,7,7,5757,567,657,567,65,765,765,765,7,657,657,657,6));

//generic function
 
function getItems<Type>(items:Type[]):Type[]{
    return new Array<Type>().concat(items);
}
let concatres=getItems([1,2,3,7,4,5,]);
let constring=getItems<String>(["vijay","krishna"])
console.log(concatres);
console.log(constring);