//spread operator is used to unpack the values of array or objects in to individual values
// let arr = [1,2,3,4,5]
// console.log(...arr)

// let arr1 = [1,2,3,[4,5]]
// console.log(...arr1)

let pers = {
    name : "manoj",
    age : 24
}

// console.log(pers)
// console.log({...pers})

//Destructuring assignment makes easy to assign a values of arrays and object propertoies to variables

let arr = [1,2,3,4,5]
// let [a,b] = arr
// console.log(a,b) // this is called array destructuring
// console.log(arr)

// let person = {
//     name: "manoj",
//     age : 24
// }
// let {name} = person
// console.log(name) 

// for/of loops are itearble such as arrays ,strings,maps etc..

// let arr2 = "string"
// for(let i of arr2){
//     console.log(i)
// }



// Maps holds the key value pairs keys are any data types and maps are similar to object
// const man = new Map([["name","manoj"],["age",24]])
// man.set("graduation","degree") 
// man.set("height", 167)
// man.delete("height")
// console.log(man)

// man.forEach(element => {  // --> for each
//     console.log(element)
// });
// console.log(man.get("age"))

// console.log(man.has("name"))

// console.log(man.size)

//set is a collection of unique values and each value can occur onlly once and sets can store any data type like number, string, boolean
// const set_of = new Set(["A",1,"B",2,"C",3])

// set_of.add("D")
// set_of.add(4)

// set_of.delete(4)
// set_of.delete("D")

// let iterate = set_of.entries()
// console.log(iterate)
// for (let i of iterate){
//     console.log(i)
// }

// console.log(set_of)

// console.log(set_of.has(2))

// console.log(set_of.size)


//Template literals is used create a strings and using backticks(``) that allows to string interpolationa and multi line strins
// let name = "manoj"
// let age = 24

// let result = `My name is ${name} and Age is ${age}`
// console.log(result)

