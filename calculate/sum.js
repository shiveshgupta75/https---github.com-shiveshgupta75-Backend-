// Modules protect their variables  and functions from leaking
// export function calculateSum(a,b){
//     const sum=a+b;
//     console.log(sum);
// }
// export var x="Hello world";
 function calculateSum(a,b){
    const sum=a+b;
    console.log(sum);
}
var x="Hello world";
// module.exports={
//     x:x,
//     calculateSum:calculateSum,
// }
// common js module
 module.exports={x,calculateSum} // same as above
// module.exports.x=x;
// module.exports.calculateSum=calculateSum;