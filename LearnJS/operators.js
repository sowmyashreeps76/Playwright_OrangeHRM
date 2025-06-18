// 1.Arithematic operators
// +  Addition
// -  subtraction
// *  multiplication
// /  devision
// %  modulus
// ++  increment operator
// --  decrement operator


console.log(6+7)

console.log("sowmya" + "shree") //concatination

console.log("sowmya" + " "+ "shree")

console.log(45 + "sowmya")

console.log(45 + "23") //4523

console.log(2+3+5+"4"+4+2) //10442 after string numbers are converted to string it is colled s coertion

console.log(20/10)
console.log(4*6)

// 14/5 remainder 4 to get this we have modulus
console.log(14%5)


// logical operators
// AND 
// OR
// NOT
// XOR 
// NAND  
//  && symbole AND

console.log((true) && (true))

console.log((4>3) && (5<4))

// OR

console.log((true) || (false))

console.log(4>3 || 5>4)

//NOT
console.log(!(true))
console.log(!(false))

// Comparision operators
// ==
// ===
// >
// <
// >=
// <=


// ==
console.log(5 == "5")

console .log (20 == "0")

console .log(20 == "20")

console.log(5 == "sowmya")

// ===

console .log(5==="5")
console .log(5===5)
console .log(5===3)

// Assignment operator
// =
x = 30

//  +=
x += 5  
// x = x+5 meaning
console .log(x)

// -=
x-=5   //x = x-5
console .log(x)

// *=

x*=4
console .log(x)  //x= x*4

// same like modulus and  devide equal is there
// /=
// %=
// **    introduced newly

// 2^5 = 2*2*2*2*2

console .log(2**5)

// conditional or turnery operators

value1 = "sowmya"
value2 = "shree"

// condition  true or false
// syntax   
// condition ? value1 : value2

y = 4==="4"? value1:value2
console .log(y)

// example
// like if else statement


let age = 18;
let message = (age >= 18) ? "you can vote" : "you can not vote"
console .log(message)

let age1 = 16;
let message1 = (age1 >= 18) ? "you can vote" : "you can not vote"
console .log(message1)