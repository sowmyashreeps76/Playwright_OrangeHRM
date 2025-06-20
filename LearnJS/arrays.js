arr = [] //empty array

arr1= ["sowmya",2,3,4,5,6,7,8,9]

console.log(arr1.length) //countinag length of array element 

// index in array always starts from  0
// first Element index is 0 
console.log(arr1[5])

creds = ["Admin", "admin123"]
console.log(creds[0])

//printimng data types of array elements
console.log(typeof(arr1[0]))

//sort array7 elements in assending order
arr2 = [9,5,7,8,6,2,3,1]
arr3 = arr2.sort()
console.log(arr3)

arr4 = ["sowmya", "anjali", "gagan", "Raju", "yashu", "gowthami"]
// arr5 = arr4.sort()
console.log(arr4.sort())

//reverse the elements
arr6 = arr4.reverse()
console.log(arr6)

// combines all the elements and become single string
str = arr4.join(" ")
console.log(str)

// convert string to array
str = "this is javascript class"
arr7 = str.split(" ")
console.log(arr7)

str = "this is javascript class"
arr8 = str.split("j")
console.log(arr8)

// reverse the string and finsd the length - interview question

str2 = "sowmyashreeps"

revstr = str2.split("").reverse().join("").length
console.log(revstr)

// add new element to at the end of the  existing array
arra = ["eat", "study"]

arra.push("sleep")

console.log(arra)

// add new element to the begining of the existing array
arra.unshift("drink")
console.log(arra)

// remove the elements in the ened of the array
arr4 = ["sowmya", "anjali", "gagan", "Raju", "yashu", "gowthami"]
arr4.pop()
console.log(arr4)

// rmeove the elements in begining of the array
arr4.shift()
console.log(arr4)

// Remove all the elemets in a array and make it empty
// for (let i = 0; i<=arr4.length-1; i++) {
//     arr4.pop()
    
// }
// console.log(arr4)


// replace the existing element to new element in array


reparr = [ 'drink', 'eat', 'study', 'sleep' ]
// reparr[3] = "play"
// console.log(reparr)

// includes() - true or false
// reparr.includes("drink")
// console.log("element is present")

// checking element is present or not 

if(reparr.includes("drink")){  //true
    console.log("element is present")
}  

if(reparr.includes("drinking")){  //false
    console.log("element is present")
}  
else {
    console.log("element is not present")
}

