var x //Declation of the variable
var x = 10 // assign the value to the variable

console.log(x)

var stuname = "sowmya"

stuname = "shree"

// console.log(stuname)
var stuname = "PS"

console.log(stuname)

console.log(8*8*8)

// **  // this symbole introduced in new version
// 2^5

console.log(2**5)

str= "     shree     "
console.log(str.trim())

console.log(str.trimStart())

console.log(str.trimEnd())

// var  - global scope
// let - blocked scope


var greet = "Namaste"
if(4>3){

console.log(greet)

}


if(4>3){
var greet = "Namaste"
console.log(greet)

}


if(4>3){
var greet = "Namaste"

}
console.log(greet)

// let = blocked scope

// if(4>3){

// let greet = "Namaste"

// }
// console.log(greet)

if(4>3){
let greet = "Namaste"
console.log(greet)

}

//  reassigning different value is possible

if(4>3){

let greet = "Namaste"
greet = "Good morning"
console.log(greet)

}

//  re declaration of same variable is not possible


// if(4>3){

// let greet = "Namaste"
// greet = "Good morning"

// let greet = "abc"

// console.log(greet)

// }

// const = blocked scope

if(4>3){
const greet = "Namaste"

}
console.log(greet)

if(4>3){
const greet = "Namaste"
console.log(greet)

}

// reassigning different value is not possible

if(4>3){
const greet = "Namaste"
greet = "hii"
console.log(greet)

}

// re declaration of same variable is not possible

// if(4>3){
// const greet = "Namaste"
// const greet = "hii"
// console.log(greet)

// }

if(4>3){
let greet = "Namaste"
if(5<6){
    console.log(greet)
}
}