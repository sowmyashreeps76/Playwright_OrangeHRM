
// if
// condition - true then only execute  

// if (true) {

//     console.log("sowmya")
//     console.log("shree")

// }


// if false dont execute

// if (false) {

//     console.log("sowmya")
//     console.log("shree")

// }



// else if
// if condition - pass - task1
// condition2 - pass - task2
// condition 3 - pass - task3

if(4>6){
    console.log("sowmya")
}
else if("4" == 4){
    console.log("shree")
}
else if(false){
    console.log("PS")
}
else {
    console.log("all conditions are failing")
}

// switch

switch ('Sowmya') {

    case "gagan": {
        console .log("Gagan here")
    }
    break;
    case "tejaswini": {
        console .log("teju here")
    }
    break;
    case "jamuna": {
        console .log("jamuna here")
    }
    break;
     case "Sowmya": {
        console .log("sowmya here")
    }
    break;
    default:{
        console.log("No one is here")
    }
    break;
}




switch ('chromium') {

    case "chromium": {
        console .log("chromium browser")
    }
    break;
    case "firefox": {
        console .log("firefox browser here")
    }
    break;
    case "webkit": {
        console .log("webkit browser")
    }
    break;
    default:{
        console.log("No browser matching")
    }
    break;
}

// let x = prompt("Enter a number:");
let x = "sowmya here"
x = parseInt(x);
console.log(2 * x);