var num1 = 45;
var num2 = 30;
var gcd = 1
var smallest = num1<num2?num1:num2;

for(i=1;i<=smallest;i++){
    if(num1%i==0 && num2%i==0){
        gcd = i
    }
}
console.log(gcd);