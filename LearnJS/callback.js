 function greet(){

   console.log("Hey Hi")
}

function greet1(value1){

     console.log("Namaste " + value1)
}


function printMessage(value, callback){
callback()
//    greet()
  console.log(value)

 
}
function printMessage(value, value1, callback){

  let x = value1
  callback(x)      //closure function
  console.log(value)

 
}

//printMessage("Raju", greet )

printMessage("Raju","guru",greet1)


// closure

// callback function is also called as closure funtion in certain times only


//promises
// .then()
// .catch()0000000000000000000000000000000000000000