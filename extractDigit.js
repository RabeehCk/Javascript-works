var number = 153

while(number>0){
    let rem = number%10
    number = Math.floor(number/10)
    console.log(rem);
}