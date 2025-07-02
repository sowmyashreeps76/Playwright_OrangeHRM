// 1.encapsulation
class employee {

    empdetails(name, place, org) {
        this.EmployeeName = name
        this.EmployeePlace = place
        this.Employeeorg = org
    }
    printEmployeeDetails() {
        console.log(this.EmployeeName);
        console.log(this.EmployeePlace);
        console.log(this.Employeeorg);
    }
}

const emp1 = new employee

emp1.empdetails("sowmya", "blr", "dbs")
emp1.printEmployeeDetails()


// 2.inheritance

// single inheritance a and b
class A {    //base class / parents class
    m1 () {
        console.log("this is m1 method");
        
    }
     m2 () {
        console.log("this is m2 method");
        
    }
     m3 () {
        console.log("this is m3 method");
    }
    m4 () {
        console.log("this is m4 method");
    }
}

class B extends A {    // class B is Derived class / child class
m5 () {
        console.log("this is m5 method");
    }
    m6 () {
        console.log("this is m6 method");
    }
    m7 () {
        console.log("this is m7method");
    }
    m8 () {
        console.log("this is m8 method");
    }
}
// multi level inheritance is possible
class C extends B {
    m9 () {
        console.log("this is m9 method");
    }
    m10 () {
        console.log("this is m10 method");
    }
}

const inheclass = new C ()
inheclass.m1()
inheclass.m7()
inheclass.m10()

// multile inheritance is not possible

// hirarchical inhritance is posiible
// class B extends A - to access this need to create another Object
// calss C extends  A -to access this need to create another Object


// 3.Polymorphism

// Method overriding

// Method overloading


// method overriding
class messageA {
    printMessage () {
        console.log("Hi How are you");
        
    }
    add(num1, num2) {
        console.log(num1);
        console.log(num2);
        console.log(num1+num2)
     }
}
class messageB extends messageA {
     printMessage () {
        console.log("Hi doing good");
        
    }
    add(num1, num2, num3) {
        console.log(num1);
        console.log(num2);
        console.log(num3);
        console.log(num1+num2 + num3)
     }

}

const obj = new messageB()
obj.printMessage()   // it is only execute child class not parent class - method overriding
obj.add(4,3,3)

const obj1 = new messageA()
obj1.printMessage()   
obj1.add(4,12,3) //method overloading - it will only add num1 + num2 so 4 +12 = 16 i ignores 3


// 4.Prototyping

class ABC {
    stname = "sowmya"
    stlastname = "shree"
    mm1(){
        console.log("this is simple mm1 method");
        
    }
    mm2(){
        console.log("this is simple mm2 method");
        
    }
}

//creating variable outside the class
ABC.prototype.stplace = "Bengaluru" //classname.prototype keyword.variable

// crating methods outside the class
ABC.prototype.mm3 = function(){
        console.log("this is simple mm3 method");
        
    }

const obj12 = new ABC()

const obj13 = new ABC()

console.log(obj12.stplace)

console.log(obj13.stplace)

obj12.mm3()
obj13.mm3()

