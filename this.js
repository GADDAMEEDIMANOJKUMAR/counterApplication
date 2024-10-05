//this keyword refers to object or different objects depends on how it is used
//In an object this refers object
// let pers ={
//     name:"manoj",
//     age: 24,
//     res: function obj(){
//         console.log(this.name + " " + this.age)
//     } 
// }
// pers.res()
// console.log(pers.name)

// --> alone this refer to global object
// let x = this
// console.log(x)

//--> In function this refers global object or use strict in function this is undefined
// function play(){
//     "use strict"
//     console.log(this)
// }
// play()

//call() method  is used take another objects as an argument  and to takes arguments separetly
// const pers = {
//     details : function(height){
//         console.log(this.name + " " + this.age +" " + height)
//         }
// }
// const pers1 = {
//     name : "manoj",
//     age : 24
// }
// const pers2 = {
//     name : "goutham",
//     age : 22
// }

// pers.details.call(pers2,175)

//Apply() is similar to call() method but  difference is  to takes the arguments in array 

// const pers = {
//     details : function(height){
//         console.log(this.name + " " + this.age +" " + height)
//         }
// }
// const pers1 = {
//     name : "manoj",
//     age : 24
// }
// const pers2 = {
//     name : "goutham",
//     age : 22
// }

// pers.details.apply(pers2,[175])

//bind() method is used to an object can borrow a method from another object. or functional borrrowing
// const pers = {
//     name : "rafi",
//     age : 23,
//     details : function(){
//         console.log(this.name + " " + this.age)
//         }
// }
// const pers1 = {
//     name : "manoj",
//     age : 24
// }
// const pers2 = {
//     name : "goutham",
//     age : 22
// }

// const res = pers.details.bind(pers2)
// res()
 
 