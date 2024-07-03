var num = 1634;
var total = 0;
var temp = num;
var len = String(num).length;

while(num>0){
    let rem = num % 10;
    let cube = rem**len;
    num = Math.floor(num/10);
    total = total + cube;
}
console.log(total);

if(temp==total){
    console.log("Armstrong");
}
else{
    console.log("Not armstrong");
}