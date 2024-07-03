str1 = "silent";
str2 = "listen";

sortedStr1 = str1.split("").sort().join("");
sortedStr2 = str2.split("").sort().join("");

console.log(sortedStr1==sortedStr2 ? "Anagram" : "Not anagram");