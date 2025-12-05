//arrow function
const add=()=>{console.log("hello arrow function")}
add()
console.log("see you later")

// arrow function with argument and return type
const sum=(a,b)=>
{
    c=a+b;
    return c;
}
let result=sum(12,34)
console.log("result is ", result)

//another way of writing arrow function with argument and return type
const multiply=(a,b)=>a*b
let res=multiply(23,45)
console.log("multiplication is ", res)

//no argument with return type
const greet=()=> "good evening"
let message=greet()
console.log(message)
console.log("bye")

// no argument no return type
const display=()=>console.log("hello display arrow function")
display()
console.log("see you soon")

// arrow function with argument and no return type
const show=(a,b)=>
{
    let c=a+b
    console.log("sum is ", c)
}