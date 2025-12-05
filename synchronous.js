console.log("hai1")
 
 setTimeout(()=>{
  console.log("hello")
 },2000)
 console.log("hai3")

function display(){

  console.log("im inside the method")
  setTimeout(()=>{
    console.log("im inside the timer")
  },3000)
}

display();
console.log("bye")

//callback method 
function add(a){
    istrue=true
    if(istrue){
        a("sasi") //display function called back
    }
}
console.log("bye")
add(display)
function display(name){
console.log("im good",name)
}

//promise method
let mypromise=new Promise((resolve,reject) => {
let isdone=true
if(isdone){
  resolve()
}
else{
  reject()
}
})
mypromise.then(success).catch(fail)
function success(){
  console.log("promise resolved successfully")
}

function fail(){
  console.log("promise rejected")
}  

//another example of promise
function display(){
return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject("failed")
  })
  }
   

 display().then((data)=>{ console.log("done!....................",data)})
  .catch(()=>{console.log("not done")} )

//async await method
async function show(){
  let result=await display()
  console.log(result)
}

//access data from api using fetch
async function getdata(){
  try{
    var res=await fetch("https://jsonplaceholder.typicode.com/users");
    var data=await res.json()
    console.log(data)
  }
  catch(error){
    console.log(error)
  }
}
getdata();

//create data using post method
async function createdata(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:"sasi",
                age:23,
            
            })
    });
    var data=await res.json()
    console.log(data)
  }
  catch(error){
    console.log(error)
  }
}
createdata();