//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes.
You can either display all of the values in the object - or, if you want a much tougher challenge,
loop through values(if applicable) to grab each favorite food.

Example 1:
Output This persons favorite pizza is ["Deep Dish","South Side Thin Crust"]...

Example 2 (Harder):
This person has many favorite foods:
Deep Dish, South Side Thin Crust, anything not from taco bell, Portillos Burgers, CHocolate, Vanilla, oreo...
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
// Example 1:
console.log(person3.pizza) 

// Example 2:
let faveFoods = (() => {
    for(let i = 0; i < Object.values(person3).length; i++){
        console.log(Object.values(person3)[i])
    }
})
console.log(faveFoods(person3))


//=======Exercise #2=========//
/*
Write a class for a Person that has attributes for name, age, and array of their hobbies.
If should also have a printInfo method that prints the attributes in a formatted string.
Create a method that accepts a parameter to add to a Person's list of hobbies.
Create two people using the 'new' keyword, and print 
both of their infos. Add a hobby to one persons hobby list.
*/

// Create our Person Class here
class Person{
    constructor(name, age, hobbies){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies
    }

    printInfo(){
        return `Name: ${this.name} \nAge: ${this.age} \nHobbies: ${this.hobbies}`
    }
}
let aaron = new Person('Aaron', 28, ['soccer', 'coding'])
let fred = new Person('Fred', 24, ['baseball', 'skiing'])
console.log(aaron.printInfo())
console.log(fred.printInfo())

// Create another function for the addHobbies method that takes one parameter
let addHobbies = (() =>{
    hobbies = [aaron.hobbies];
    return(hobby) =>{
        hobbies.push(hobby)
        return hobbies
    }
})()

// Adding to the hobbies array...
console.log(addHobbies('fishing')) 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let checkLength = (x) =>{
    return new Promise( (resolve, reject) =>{
        if (x.length > 10){
            resolve(true)
        }else if (x.length < 10){
            reject(false)
        }
    })
};
checkLength('Hello')
.then( (result) =>{
    console.log("Big Word")
})
.catch( (error) =>{
    console.log("Small Number")
})

// Codewars JS

//Problem 1: Sum of positive
function positiveSum(arr) {
    let num = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            num += arr[i]
        }
    }
    return num
}

//Problem 2: Function 1 - hello world
let greet = () => "hello world!";
