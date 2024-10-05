// var a = 100
// console.log(a)
// var a = 200
// console.log(a)
// a=300
// console.log(a)

const { json } = require("express/lib/response")

// const a = 10
// console.log(a)
// const a = 20
// console.log(a)
// a = 30
// console.log(a)
// const b ;
// const b = "manoj"
// console.log(b.split("").reverse().join())

// otp generate  examples
// function generateOTP(){
//     let otp = ""
//     otp = Math.floor(Math.random()*9000+1000)
    
//     return otp

// }
// console.log(generateOTP())

//Hoisting topic examples

// console.log(a)
// var a =2;

// console.log(b)
// let b = 3

// console.log(c)
// const c = 4

// function declaration hositing to declare a function before initialize it is access because memory phase to store a function 
// sum(5,6)
// function sum(a,b){
//     console.log(a+b)
// }

// function expressions are arrow functions before initialization it access that function is not possible because memory phase it allocate a variable value undefined, it shows error
// sum()
// var sum = function(){ // function expression
//     console.log(5+6)
// }
// sum()
// var sum =() =>{    // arrow functions h
//     console.log(5+6)
// } 

// Data types  -> the value type assigned a variable
// primitive data type -> number,string,boolean,null,undefined,symbol,bigint
//non-primitive datatype -> arrays and object

// let arr2=[1,"hello","js", true,[1,2,3,4],{NAME:"HELLO"}]

//length -->calculate length
// let out=arr2.length
// console.log(out)

//push --> add a new element to an array at the end
// let out=arr2.push(false)
// console.log(out)
// console.log(arr2)

//pop -- removes the last element from an array
// let out=arr2.pop()
// console.log(out)
// console.log(arr2)

//shift --> removes the first element from an array
// let out=arr2.shift()
// console.log(out)
// console.log(arr2)

//unshift --> add a new element to an array at the begining
// let out=arr2.unshift("react")
// console.log(out)
// console.log(arr2)

//concat --> create a anew array ny merging existing arrays
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren)

// splice() --> method can be used to add new items to an array or removing elements specified
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(1, 2, "Lemon", "Kiwi");
// console.log(fruits)

// slice() --> method slices out a piece of an array into a new array
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus)

//toString() --> converts an array to a string of (comma separated) array values
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString())

//The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join("2"))

// The sort() method sorts an array alphabetically:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const sorted = fruits.sort();
// console.log(fruits)

//ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.
// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();
// console.log(sorted)
// console.log(months)

// The reverse() method reverses the elements in an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// console.log(fruits)

// ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.
// The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const reversed = months.toReversed();
// console.log(reversed)
        

//Math operations
// let a= Math.random()*100
// console.log(a)

// let ceil_number= Math.ceil(a)
// console.log(ceil_number)

// let power = Math.pow(2,6)
// console.log(power)

// let round = Math.round(a)
// console.log(round)
// console.log(a)

// let square_root = Math.sqrt(Math.round(a))
// console.log(Math.round(a))
// console.log(square_root)

// let absolute = Math.abs(a)
// console.log(a)
// console.log(absolute)

// let maximum = Math.max(1,2,5,8,18,15,28,14,17)
// console.log(maximum)

// let minimum = Math.min(1,2,5,8,18,15,28,14,17)
// console.log(minimum)


//let
// let a= 100
// let a= 200
// console.log(a)
// // redeclaration is not possible


// let a=13
// a=15
// console.log(a)
// //reassignment is possible


// let b;
// b=15
// console.log(b)
// //at the time of initialization vale assignment is not mandatory


//..........Block Scope..................//


// //function declaration
// function sum(){
//     if(true){
//         let r=15
//         console.log(r)
//     }
//     console.log(r)
// }
// sum()
// console.log(r)

//  GEC
// console.log(a)
// var a = 5
// function sum (){
//     var b = 6
//     function war(){
//         var c=8
//         function log(){
//             var d = 9
//             var a =4
//             console.log(a+b+c+d)
//         }
//         log()
//     }
//     war()
// }
// sum()


// a function which binds together to its lexical scope forms a closure
// var a=10
// function play(){
//   var d=20     // lexical scope
//   function sum(){
//     console.log(d)
//   }
//   return sum
// }
// let result = play()
// result()



// const arr = [1,2,3]
// console.log(arr[arr.length] = arr.pop())
// // console.log(arr)
// console.log(arr.length)


 
// callback function --> when we pass a function as a argument to anoter function then that is called callback function
//Highre order function -->  A function which allows to another function then that function is called Higher order function

// function game(){
//     console.log("manoj")
// }
// function player(a){
//     a()
// }
// player(game)

// player is a Higher Order Function
// game is a Callback function

//Map, Filter and Reduce are known as Higher Order functions

//map
// const arr = [1,2,3]
// const map = arr.map(e => e*2)
// console.log(arr)
// console.log(map)

//filter
// const arr  = [1,4,6,8,10]
// const filter = arr.filter(e => e > 5)
// console.log(arr)
// console.log(filter)

//reduce
// const arr = [1,2,3,4,5]
// const reduce = arr.reduce((accumulator,currentvalue)=>accumulator*currentvalue)
// console.log(arr)
// console.log(reduce)

// OBJECT --> object is collection of different properties of a object in the form of key value pairs & instance of class
// create a object
// const profile = {
//     name : "manoj", // --> name is a key and manoj ia a value it forms key-value pairs
//     age  :24,
//     graduation : "degree",
//     play : function(){
//         console.log("hello")
//     },
//     Car :{
//         brand:"kia",
//         model: "GTX",
//         fule: "petrol",
//         prop: [1,2,3,4,"Super", "hybrid","null", "undefined"]
//     }

// }
//console.log(profile)

// how to access tha values in object ?
// there are two types 1) (.)Dot notation 2) Braket notation
//console.log(profile.name) // --> Dot notation
//console.log(profile["graduation"]) // --> Bracket notation

// update the values in object
// profile.name = "Prasad"
// console.log(profile.name)
//  profile.age = 23
// console.log(profile)

//add the values in object
// profile.height = 175
// profile["Marks"] = 75
//console.log(profile)

// Delete the values
// delete profile.height
// delete profile["Marks"]
//console.log(profile)

// access object inside functions or objects
//console.log(profile.play())
// profile.Car.brand = "Kia celtos"
// let result = profile.Car.prop[5]
// profile.Car.type = result
//console.log(profile.Car)
//profile.play()


// optional chaining operator(?) --> are allows to access the properties of object without raising an error but any error showing null or undefined
// console.log(profile?.horse?.brand) 
// console.log(profile?.Car?.brand) 

//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
// console.log(null ?? "manoj")

// const arr = [0,1,2]
// arr[arr.length] = arr.length
// console.log(arr)

// function fetch(){
//     a=7
//     console.log(a)
// }
// let a;
// fetch();

// consitional statements -- > if, else, else if, Switch, ternery operator
// let marks = 34;

// if(marks >= 70) {  
//     console.log("pass")
// }
// else{
//     console.log("fail")
// }


// if (marks > 70 && marks < 80){
//     console.log("Excellent")
// }
// else if(marks > 60 && marks < 70){
//     console.log("good")

// }
// else if (marks > 35 && marks < 60){
//     console.log("Pass and Improve")
// }
// else{
//     console.log("fail")
// }


//switch
// let day =3;
// switch(day) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break; 
//     case 3:
//         console.log("Wednesday");
//         break; 
//     case 4:
//         console.log("Thursday");
//         break;  
//     case 5:
//         console.log("Friday");
//         break;   
//     case 6:
//         console.log("Saturday");
//         break; 
//     default:
//         console.log("day not found")
// }


//ternery operator
// let marks = 75;
// let grade = marks > 70 ? "Pass" : "Fail"
// console.log(grade)

// Loops -->loop will execute a block of code until it meets termination condition 
// for in  --> itearte a index in array returns index values
// for of --> iterate a sequence of characters in string or array

// let a = 10
// while(a > 2){
//     console.log(a)
//     a=a-1
// }

// do{
//     console.log(a)
//     a=a-1
// }
// while(a > 5){
//     console.log(a)
//     a=a-1
// }

// for (let i=10; i > 0; i--){
//     console.log(i)
// }

// let arr = [1,2,"hello","hii",true,6]
// for  (let i in arr){
//     console.log(i)
// } 

// for (let i of arr){
//     console.log(i)
// }

// //Date
// let time = new Date
// console.log(time.getFullYear())



//JSON stands for javascript object notation, it is used to send data between computers and it is text  format for storing and transporting data and it is lightweight data interchange format
// javascript hads built in function they are two types
//json.stringify it converts js objects to string format
//  const pers = {
//     name:"manoj",
//     age:24
//  }
//  let string  = JSON.stringify(pers)
//  console.log(string) // --> {"name":"manoj","age":24}

//Json.parse() it converts to strings to js objects
//  let perse = JSON.parse(string)
//  console.log(perse)  // --> { name: 'manoj', age: 24 }


//local storage uses to  save the data in local storages but the data is never lost after get the data
//session storages are similar to local storage but the data is clear when tab is closed 
//methods are same in two storage methods
// SetItem() --> set the data in storages --> localStorage.setItem("name","manoj")
//getItem() --> get the data in storages --> localStorage.getItem("name")
//removeItem() --> remove the items storages individually --> localStorage.removeItem("name")
//clear() --> cler all items in storages --> localStorage.clear()
 

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }
  
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// function checkAge(age) {
//     if (age < 18) {
//       const message = "Sorry, you're too young.";
//     } else {
//        const message = "Yay! You're old enough!";
//     }
  
//     return message;
//   }
  
//   console.log(checkAge(21));
