var str1 = "ABC";
var str2 = "pqrst";

mergedString = "";

for(let i=0;i<str1.length;i++){
    mergedString += str1[i] + str2[i];
}

console.log(mergedString);