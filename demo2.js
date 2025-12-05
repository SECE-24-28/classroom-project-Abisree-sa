a=[3,2,4];
arr=[];
for(var i=0;i<=a.length;i++){
  arr.push(a[i]*2);
}
console.log(arr);

// using map function it simplifies the code without for loop 
const b=a.map((d)=>{return d*2});
console.log(b);

//lowercase to uppercase
let words=["apple","banana","grape","orange"];
let upper=[];
for(var i=0;i<words.length;i++){
    upper.push(words[i].toUpperCase());
}
console.log(upper);

// using map function
const up=words.map((w)=>{return w.toUpperCase()});
console.log(up);
