var number = 153
var sum = 0

while(number>0){
    let rem = number%10
    number = Math.floor(number/10)
    sum = sum + rem
}
console.log(sum);