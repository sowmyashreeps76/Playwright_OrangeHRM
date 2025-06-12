// creating dynamic data
// Generating random email ids - it will generate random 5 characters each time. 
// like sowmya + random 5 characters + @gmail.com

let randomtext = (Math.random() + 1).toString(36).substring(7);

emailid = "sowmya"+randomtext+"@gmail.com"
console.log(emailid)