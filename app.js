require("./xyz.js")
// Common JS Module(cjs)
// const {x,calculateSum}=require("./calculate/sum.js") // require("./sum") work as well
 //ES MODULE
// import {x,calculateSum} from "./sum.js"
const {multiply,calculateSum}=require("./calculate")
var name1="Shivesh";
var a=10;

var b=20;
c="my namee"
calculateSum(a,b);
multiply(a,b);
console.log(c)

const data=require("./data.json");
console.log(data)
// console.log(name1);
// console.log(a+b);
// console.log(global);
// console.log(this); // EMPTY OBJECT as in case of node js unlike in browser which gives window
// console.log(globalThis);// common for all whether it is browser or node js
console.log(globalThis===global);// it will give true
// console.log(window);// not defined as it is global object in browser

