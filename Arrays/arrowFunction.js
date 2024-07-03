// var add = (n1,n2)=>n1+n2
// console.log(add(2,3));

// var square = (num)=>num**2
// console.log(square(4));

// var cube = (num)=>num**3
// console.log(cube(4));

// var isOdd = (num)=>num%2!=0
// console.log(isOdd(2));

// var isEven = (num)=>num%2==0
// console.log(isEven(2));

// var isPositive = (num)=>num>0
// console.log(isPositive(10));

// var smartSub = (num1,num2)=>num1>num2?num1-num2:num2-num1
// console.log(smartSub(10,5));
// console.log(smartSub(5,10));

// var arr = [10,11,12,13,14,15,16,17,18]

// var cubes = arr.map(num=>num**3)
// console.log(cubes);

// var squares = arr.map(num=>num**2)
// console.log(squares);

// var result = arr.map(num => num<12?num-1: num>12?num+1: num)
// console.log(result);

// var nmGtFifteen = arr.filter(num => num>15)
// console.log(nmGtFifteen);

// var evens  = arr.filter(num => num%2 == 0)
// console.log(evens);

// var odds  = arr.filter(num => num%2 != 0)
// console.log(odds);



var arr1 = ["program","project","profile","proffession","poem"]

// var upperCase = arr.map(w => w.toUpperCase())
// console.log(upperCase);

// var lengthstring = arr.map(w => w.length);
// console.log(lengthstring);

// var wordStart = arr.filter(w => w.startsWith("pro"))
// console.log(wordStart);

// var wordEnd = arr.filter(w => w.endsWith("m"))
// console.log(wordEnd);


// ======================================================== REDUCE ============================================================


// var total = arr.reduce((n1,n2)=>n1+n2)
// console.log(total);

// var product = arr.reduce((n1,n2)=>n1*n2)
// console.log(product);

// var max = arr.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max);

// var min = arr.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(min);

// var longest = arr1.reduce((ch1,ch2)=>ch1.length>ch2.length?ch1:ch2)
// console.log(longest);

// var shortest = arr1.reduce((ch1,ch2)=>ch1.length<ch2.length?ch1:ch2)
// console.log(shortest);


// ======================================================== SORT ============================================================


var arr = [20,10,11,12,13,14,15,16,1000,17,18,136];

// console.log(arr.sort()); 

// arr.sort((o1,o2) => o1-o2)  // sorts in ascending order
// console.log(arr);

// arr.sort((o1,o2) => o2-o1)  // sorts in descending order
// console.log(arr);

arr1.sort((o1,o2)=>o1.length-o2.length)

console.log(arr1);