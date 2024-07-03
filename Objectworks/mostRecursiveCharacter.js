var text = "pneumonoultramicroscopicsilicovolcanoconiosis"

wc = {}

text.split("").map(ch => ch in wc ? wc[ch]+=1 : wc[ch]=1)
console.log(wc);

var nestedArray = Object.entries(wc)
console.log(nestedArray);

var mostRecursive = nestedArray.reduce((p1,p2) => p1[1]>p2[1] ? p1:p2)
console.log(mostRecursive);
