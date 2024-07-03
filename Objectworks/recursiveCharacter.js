var text = "ABCDABDDE"

var wc = {}

for(let ch of text){
    if(ch in wc){
        console.log(ch,"is the first recursive letter");
        break
    }
    else{
        wc[ch] = 1
    }
}