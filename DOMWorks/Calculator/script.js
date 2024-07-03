var pointFrequency = 1

function displayNumber(event){
    const operators = ["+","-","*","/","."]

    let textBox = document.querySelector("#result")

    let currentExp = textBox.value

    let currentDisplayNum = event.target.value;

    if(currentDisplayNum == "." && pointFrequency == 1){
        pointFrequency = 0
    }
    else if(currentDisplayNum == "." && pointFrequency == 0){
        return
    }

    if(operators.includes(currentDisplayNum) && currentDisplayNum != "."){
        pointFrequency = 1
    }

    let currentExpLastChar = currentExp.slice(-1)

    if(operators.includes(currentExpLastChar) && operators.includes(currentDisplayNum)){
        currentExp = currentExp.slice(0,-1)
    }

    textBox.value = currentExp+currentDisplayNum
}

function clearBox(){
    document.querySelector("#result").value = ""

    pointFrequency = 1
}

function evaluateExpression(){
    let currentExpression = document.querySelector("#result").value;

    let result = eval(currentExpression);

    if(result.toString().split("").includes(".")){
        pointFrequency = 0
    }
    else{
        pointFrequency = 1
    }
    document.querySelector("#result").value = result;
}

function backSpace(){
    let currentExpression = document.querySelector("#result").value;

    let result = currentExpression.slice(0,-1)

    document.querySelector("#result").value = result;
}