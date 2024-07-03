var text = "the quick brown fox jumps over the lazy dog"
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var isPanagram = true

for(let ch of alphabet){
    if(!text.includes(ch)){
        isPanagram = false
        break
    }
}

console.log(isPanagram);