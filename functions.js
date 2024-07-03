// function add(num1,num2){
//     return num1 + num2
// }

// console.log(add(5,8));

function fibanocciSum(num){
    var previous = 0
    var current = 1
    var sum = previous + current
    for(let i=1;i<=num;i++){
        let next = previous + current
        sum = sum + next
        previous = current
        current = next
    }
    return sum
}

console.log(fibanocciSum(0));

// function maxTwo(num1,num2){
//     return num1>num2?num1:num2
// }

// console.log(maxTwo(5,8));

// function smartSub(num1,num2){
//     return num1>num2?num1-num2:num2-num1
// }

// console.log(smartSub(5,2));