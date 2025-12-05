let arr=[12,34,45,564,67,67,4,34,22]
for(let a in arr)
console.log(arr[a])  // prints index
console.log("im outside")

for(let a of arr)
console.log(a)  // prints element

// no argument no return type function
function display()
{
    console.log("hello")
}
display()
console.log("see you")

//with argument and with return type function
function add(a,b)
{
    let c=a+b
    console.log("hello")
    return c
}
let ans=add(10,23)
console.log("see u ", ans)

// with argument and no return type function
function multiply(a,b)
{
    let c=a*b
    console.log("hello multiply ")
}
multiply(12,3)
console.log("see u later")

// no argument with return type function
function greet()
{
    return "good morning"
}
let msg=greet()
console.log(msg)
console.log("bye")