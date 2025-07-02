// str = "bangalore" //Double quotes

// str = 'Bengaluru' //single quotes

// str = `Bengaluru` //Backticks

// str = `bangluru's` //backticks

// string methods



// lenght - count the character in the string
str = 'javascript'
console.log(str.length)

// get specific element
console.log(str[0])

// charAt - to acces particular character
console.log(str.charAt(4))


// concat() 
str1 = "sowmya"
str2= "shree"
console.log(str1.concat(str2))

// trim() - remove white space at the begining and end
str4 = "      login     "
console.log(str4.trim())

// trimStart 
console.log(str4.trimStart())

// trimEnd()
console.log(str4.trimEnd())


console.log(str4.trim().length)

// convert uppercase - toUpperCase
str5 = "this is javascript coding"
console.log(str5.toUpperCase())

// convert to lower case - toLowerCase
str5 = "This Is JavaScript CODING"
console.log(str5.toLowerCase())

// charAt - to acces particular character
// console.log(str.charAt(0))

// to get substring  - substr()

console.log(str5.substr(6))

// define multiline strings - \n
str6 = "sowmya\nshree"
console.log(str6)

// \t  - tab space
str6 = "sowmya\tshree"
console.log(str6)


// includes() - verify some substring is present or not
// it will return true or false

console.log(str5.includes("JavaScript")) //true

console.log(str5.includes("sowmyashree")) //false

// template literals $ - to access the string from one object to another
str7 = "Bengaluru"
str8 = `capital of karnataka is ${str7}` //in this case mandatory to give backticks

console.log(str8)


// strings are immutable
str = "sython"
str[0] = "p" //no error but it wont change s to p

console.log(str)  //return as it is like sython

// replace()
// replaceAll()

str = Number("10")

price1 = Number("₹69,999".replace("₹", "").replace(",",""))
price2 = Number("₹79,999".replace("₹", "").replace(",",""))

total = price1 + price2

console.log(total) 