
// Primitive data types
//1.number
// 2.strings
// 3.boolean
// undefined
// null



x= 34
console.log(typeof(x))

x= "Sowmya"
console.log(typeof(x))

x= true
console.log(typeof(x))

//assigning differnyt value is poassible - automatically do type conversion

x= 34
x = "Hello"
console.log(typeof(x))

x = undefined
console.log(typeof(x))

x = null
console.log(typeof(x))

let test;
console.log(test)



let s = "55.56";
let y = 88;
console.log(s + y);

let t = "64";
let p = 8;
console.log(t/p);
console.log(t*p);
console.log(t-p);



// non primitive data types
//  1, arrays
// 2. objects
// 3. Regular expressions

arr = []     //empty array

arr1 = ["Admin", "admin123"]

arr2 = ["Sowmya", 34, true, undefined, null]

arra3 = [1,2,3,4,5]

// index always starts from 0

console.log(arr1[0])
console.log(arr1[1])

console.log(typeof(arr2))

console.log(typeof(arr2[1]))

arr4 = ["eat", "sleep"]
console.log(arr4)

arr4[1] = "study"
console.log(arr4)

str = "javsscript"
str[3] = "a"

// objects

// syntax of objects
// objectname = {
//     propertyname : propertyvalue
// }    

student = {
    firstname : "sowmya",
    lastname : "Shree",
    place : "tmkr"
}
console .log(student.firstname)
console .log(student.place)

creds = {
    username: "Admin",
    password: "admin123"
}

console.log(creds.username)

