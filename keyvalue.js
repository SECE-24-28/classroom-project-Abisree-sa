let person={
    name:"John",
    age:30,
    city:"New York"
}
console.log(person);  
console.log(person.age);

//another method to access key value pairs
let person1={
    person1.name="John",
    person1.age=30,
    person1.city="New York"
}
console.log(person1);  
console.log(person1.age);

//another way

function Person2(){
    
        this.name=name;
        this.age=age;
        this.city=city;
    
 }
let person2=new Person2("John",30,"New York");
console.log(person2);
console.log(person2.age);      