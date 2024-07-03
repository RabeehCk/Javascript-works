var arr = [10,20,30,40];
var k = 2;

for(let i=1;i<=k;i++){
    let popped = arr.pop();
    arr.unshift(popped);
}

console.log(arr);