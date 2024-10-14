// function a() {
//     let x = 10;
//     function b() {
//         console.log(x);
//     }
//     return b;
// }

// let close = a()()
// //console.log(close())
// var ab= 100;
// console.log(x)
// let a=10
// function abc(){
//     a = 100
//     console.log(a)
//     let b=10
//     //console.log(b)
// }
// console.table(a)
// abc()
// console.log(a)


// const str = "aabbbcdeeeeefg"
// let res = ''
// for(let i=0; i<str.length; i++) {
//     if(res.indexOf(str[i]) === -1){
//         res += str[i];
//     }
// }
// console.log(res);



// callback

// function b(callback){
//      console.log("callback1 called")
//      callback()
// }
// function c(){
//     console.log("callback2 called")
// }

// function callback(val, b){
//     console.log("callback started")
//     b(c)
// }
// callback(10,b)




//callback  hell
// function add(num,callback) {
//     return callback(num++);
// }

// function sub(num,callback) {
//     return callback(num--);
// }

// function mul(num,callback) {
//     return callback(num*5);
// }
// add(1, function(addval){
//     sub(addval, function(subval){
//         mul(subval,function(mulval){
//             console.log(mulval)
//         })
//     })
// })


// async function name(params) {
//     console.log("pppp")
//     return params
// }

// async function bbbb(){
//     const res = await name("testt")
//     console.log(res)
// }

// bbbb()
// console.log("tttt")


// Promise 
// async function name1() {
//     let a = 10;
//     let b = 20;
//     let sum = a + b
//     return sum
// }
// async function name2() {
//     let a = 10;
//     let b = 20;
//     let sum = a + b
//     return sum
// }
// async function name3() {
//     let a = 10;
//     let b = 20;
//     let sum = a + b
//     return sum
// }
//  async function callname() {
//     const [val,val2,val3] = await Promise.all([name1(),name2(), name3()])
//     console.log(val, val2, val3)
//  }
//  callname()


// Immediate function call
// function a() {
//     console.log("function decleration");
// }

// a();

// (function b() {
//     console.log("immediatelog");
// })();


//Arrow Function
// const val = () =>"AAAA"
// console.log(val());

// const sum = (a,b) => a+b;
// console.log(sum(3,4));

// function x() {
//     console.log(arguments);
// }
// x(1,2,3)


// //closure
// function a() {
//     let count = 0;
//     return function b() {
//         count++;
//         return count
//     }
// }

// const count1 = a();
// const count2 = a();
// console.log(count1())
// console.log(count2())


// arrow vs normal function

// const nums = [1,2,3,4];
// const square = nums.map(function(num) { //using traditional function
//     return num*num;
// })
// console.log(square);

// const arrowSquare = nums.map(num=>num*num); //using arrow function
// console.log(arrowSquare)

// const arr = [10,11,12,13,14,15,16,17,18,19,20];
// const even = arr.filter(num => num%2 === 0);
// console.log(even)
// console.log(arr)

// const even1 = arr.filter(function (num) {
//     if(num %2 === 0) {
//         return num
//     }
// })
// console.log(even1)

// const a = {name:"Rohan", age: 10};
// console.log(JSON.stringify(a))


// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// // Convert JSON string to JavaScript object
// const obj = JSON.parse(jsonString);
// console.log(obj)



// console.log(a);
// function a() {
//     console.log("test")
// }

// const v = [1,2,3,4,5];
// const even  = v.filter(num => num%2===0)
// const even2  = v.filter(function(num) {
//     if(num %2 === 0){
//         return num
//     }
// })

// console.log(even,even2)
// let c = 10
// {
//     var a =10
//     let b = 20
//     //console.log(a,b)
//     let c = 400
//     console.log(c)
//     var a =100
// }
// //console.log(a)
// c = 600
// console.log(c)

// function abc() {
//     var a =10
// }

















// let arr = [10,20,30,40];
// let a;
// for(let i=0; i<arr.length;i++) {
//     for(let j=i+1; j<=arr.length; j++) {
//         if(arr[i] > arr[j]) {
//             a = arr[i] //highest
//         }
//     }
// }

//example of call stack and execution context
// var x = 10
// function b(num1, num2) {
//     const sum = num1+num2;
//     return sum;
// }
// const result = b(1,9);
//console.log(result)


import { a } from "./test.js";
//import {c, testFunc} from "./test.js";
import c from "./test.js";
// import {add} from './test.js'
console.log(a)
c()
//testFunc()
//testFunc()
// const sum = add(2,3)
// console.log(sum)






