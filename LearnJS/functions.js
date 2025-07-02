// function printMessage () {
//     console.log ("Anjali")
//     console.log("Ashwini")
// }
// printMessage()

// printMessage() //print exactly same values

// change the values while calling - pass the argument
function printMessage (value1, value2) {
    console.log (value1)
    console.log(value2)

console.log(value1+value2) //concatinate the strings and add the numbers
}
printMessage("sowmya", "shree") //"sowmya" is value1 and "shree" is value2

printMessage(3,7)

// functions without params or arguments 
// function printMessage () {
//     console.log ("Anjali")
//     console.log("Ashwini")
// }
// printMessage()


// functions with params or arguments 
// function add (num1, num2) {
//     console.log("sowmya")

//     console.log(num1) //undefined
//     console.log(num2) //undefined

//     console.log(num1+num2) //undefined + undefined = NaN

//     console.log("execution completed")

// }

// add() //not passing value for arguments

// function with return keyword - to return some value
function displayname (){
    // console.log("sowmyashree here")
    return "sowmyashree here"
}
displayname() //sowmyashree here

x = displayname() //save displayname in x variable 

console.log(x) //print x



function add (num1, num2) {
    return num1+num2
}

// y = add(5,8)
// console.log(y)

console.log(add(5,8))   //also print like this


// Arrow function

// from ES6 version onwords functions are simplified and introduced as arrow functions


// without Arrow function
// function printMessage () {
//     console.log ("This is normal function")
// }
// printMessage()

// with Arrow function
printMessage = () => {
    console.log("this is Arrow functions")
}
printMessage()

// Arrow function with different syntax

// normal function
// function squarenum (num) {
//     console.log(num*num)
// }

// Arrow
// when we have single parameter or argument
squarenum = num => {  // in Arrow function when we have single argument no need to provide ()
                    //   direct we can give argument or params
console.log(num*num)
                        
}
squarenum(5)

// when we have multiple parameter or arguments

add = (num1, num2) => {
    console.log(num1+num2)
}
add (25, 6)

// without params or arguments
printingMessage = () => {
    console.log("this is Arrow functions")
}
printingMessage()


// when we have single return statement no need to open {} and no need to mention return keyword 
addnum = (num1, num2) => num1+num2
console.log(addnum(4,7))


// when we have multiple statements we should opn {} write code inside {}