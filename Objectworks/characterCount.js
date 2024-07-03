var word = "hellopython"

var wc = {}

for(let ch of word){
    if(ch in wc){
        wc[ch] += 1
    }
    else{
        wc[ch] = 1
    }
}

console.log(wc);