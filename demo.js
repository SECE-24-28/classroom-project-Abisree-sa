
var a=5;
if(a<10)
  a=50;
console.log(a);

let b=5;
if(b<10){
 let b=50;
}
console.log(b);

//const c=5;
//if(c<10){
// c=50;
//}
//console.log(c); // This will throw an error because 'c' is a constant and cannot be reassigned.

let name="John"
let val1=23
let val2=32.5
let isdatavail=true
let nodata=null
let obj
console.log(typeof(name))
console.log(val1)
console.log(val2)
console.log(isdatavail)
console.log(nodata)
console.log(obj) // This will log 'undefined' because 'obj' is declared but not initialized.

let arr=20;
let arr1="20";
console.log(arr==arr1) // true, because '==' does type coercion
console.log(arr===arr1) // false, because '===' checks for both value and type

let x=10;
let y=20;
let z=10;
console.log(x<y && x==z)  // true
console.log(x>y || x==z)  // true
console.log(!(x<y && x==z))    // false