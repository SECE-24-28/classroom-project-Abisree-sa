a=[12,34,45]
result=a.length // length property
console.log(result)
b=a.push(56) //  adds element at the end
console.log(b)  
console.log(a)
res1=a.pop()  // removes element from the end
console.log(res1)
console.log(a)
res2=a.shift()  // removes element from the start
console.log(res2)
console.log(a)
a.unshift(5)  // adds element at the start
console.log(a)
x=[23,45,78,67,98,36]
res3=x.splice(1,3) // from index 1, remove 2 elements
console.log(res3)
console.log(x)
res4=x.splice(2,0,70) // from index 2, remove 0 elements, add 70
console.log(res4) // no elements removed, just adding 70 at index 2
console.log(x)
res5=x.slice(1,4) // from index 1 to index 3
console.log(res5)
console.log(x)
res6=x.slice(2) // from index 2 to end 
console.log(res6)
console.log(x)
res7=x.join("-") // joins all elements with "-"
console.log(res7, typeof(res7))
console.log(x)
res8=x.includes(98) // checks if element is present
console.log(res8)
res9=x.indexOf(100) // element not found
console.log(res9)
res10=x.reverse() // reverses the array
console.log(res10)
console.log(x)
res11=x.sort() // sorts the array
console.log(res11)
console.log(x)
