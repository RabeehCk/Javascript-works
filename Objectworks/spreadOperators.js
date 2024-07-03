// var colors = ["red","green","blue","yellow"];
// var colorsCopy = [...colors];    // ... spread operator
// colorsCopy.pop()
// console.log(colors);
// console.log(colorsCopy);

// var user = {name:"rabeeh",email:"rabeeh@gmail.com",password:"rabeeh",isActive:true}
// var userCopy = {...user}
// userCopy.isActive = false
// console.log(user);
// console.table(user);

var product = {id:1,brand:"samsung",price:12000,isAvailable:false}
var productCopy = {...product,isAvailable:true}
console.log(product);
console.log(productCopy);