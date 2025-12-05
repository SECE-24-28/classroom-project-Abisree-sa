let nums=[10,1,2,4,12,20,30,40];

const a=[];
for(let d of nums){
    if(d>=20){
        a.push(d);
    }
}
console.log(a);

// using filter function
const res=nums.filter((d)=>{return d>=20});
console.log(res);

//reduce function
let num=[10,2,3];
var s=0;
for(let i of num){
    s=s+i;
}
console.log(s);

// using reduce function
const sum=num.reduce((a,b)=>{return a+b;})
console.log(sum);

// another example of reduce function
const prod=num.reduce((a,b)=>{return a*b;})
console.log(prod);

//find function
let n=[12,34,45,67,89,90];
let ans=n.find((d)=>{return d>20;}   );
console.log(ans);  