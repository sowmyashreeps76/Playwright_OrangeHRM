car = {
    model : "2025",
    make : "jaguar",
    number : "pa2345ss",
    color: "Black",
    doors : "6"
}
console.log(car.number, car.color)

console.log(car['color'])

car['color'] = 'red' //Ipdating the property value
console.log(car['color'])

car['ownername'] = 'sowmya' //adding the new property and its value
console.log(car)
console.log(car.ownername)

delete car['make'] // delete the property
console.log(car)


console.log(car.make)

menuitems = {
    menu1 : "Admin",
    menu2 : "PIM",
    menu3 : "Leave"
}

// for in   using for in to iterate the menuitems
for (item in menuitems) {
    console.log("loop starts")
    console.log(menuitems[item])
    console.log("loop end")
}

//  using objects we can achieve data driven testing



str1 = "sowmya"
str2 = "shree"

str3 = `${str1} and ${str2} is a full name` //using backticks here to achiev output
console.log(str3)

