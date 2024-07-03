var fullName = "john doe"
var firstName = fullName.slice(0,fullName.indexOf(" "))
var lastName = fullName.slice(fullName.indexOf(" "))
console.log(firstName,lastName);