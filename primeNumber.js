var number = 7
var isPrime = true

for(i=2;i<number;i++){
    if(number%i==0){
        isPrime = false
    }
}

console.log(isPrime);