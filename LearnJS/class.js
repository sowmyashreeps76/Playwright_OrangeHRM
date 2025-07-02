// class

// syntax
//  class classname{
//variables
//methods
// }

// class calculator {

//     x = 20
//     y = 30

//     add(num1,num2) {
//         console.log(num1+num2)

//     }

//      subtraction(num1,num2) {
//         console.log(num1-num2)

//     }

//      devide(num1,num2) {
//         console.log(num1/num2)

//     }
//     // login (username, password) {

//     // }
// }

// // to execute this should create object or instance of the class

// const call = new calculator()
// call.add(2,7)
// call.devide(5,8)
// call.subtraction(15,5)

// console.log(call.x) //20

// call.login


//constructor

// class employee {
//     printmessage () {
//     // constructor () {     //changing the method name as constructor
//         console.log("this is simple message");
//     }
//     // login(username,password) {
// constructor(username,password) {
//     console.log(username, password);

//     }
//     empname () {
//         console.log("employees name");

//     }
// }

// // const emp = new employee()
// const emp = new employee( "admin", "admin123") //passing value to the constructor



// this keyword
class employee {

    // creating a variables
    username = "sowmyashree"
    password = "ps"
    sowmya() {
        console.log("hii, this is sowmya");
        console.log(this.username);  //accessing variables using this keyword and printing
    }
    printmessage() {
        this.sowmya()
        console.log("this is simple message");
    }
    login(username, password) {
        console.log(username, password);

    }
    empname() {
        this.printmessage()
        console.log("employees name");

    }
}

const emp = new employee()

emp.empname()

// emp.sowmya()

// static  - To reduce memory consumption we will use static
// accessing the variables and methods without creating the object

class student {
    static x = "this is variable"  //static variable
    static y = "variable y"  //static variable
    // y = "variable y"  //non static variable
    static m1() {  //static method
        console.log("this is method m1");

    }
    static m2() {
        console.log("this is method m2");

    }
    static m3() {
        console.log("this is method m3");

    }
    static m4() {
        console.log("this is method m4");

    }
}

student.m1()

console.log(student.x);
