function performAddition(){
    let num1 = +box1.value
    let num2 = +box2.value
    let result = num1 + num2
    document.querySelector("#root").innerHTML = `${num1} + ${num2} = ${result}`
}

function performSubtraction(){
    let num1 = +document.querySelector("#box1").value
    let num2 = +document.querySelector("#box2").value
    let result = num1-num2
    document.querySelector("#root").innerHTML = `${num1} - ${num2} = ${result}`
}

function performMultiply(){
    let num1 = box1.value
    let num2 = box2.value
    let result = num1*num2
    document.querySelector("#root").innerHTML = `${num1} * ${num2} = ${result}`
}

function performDivide(){
    let num1 = box1.value
    let num2 = box2.value
    let result = num1/num2
    document.querySelector("#root").innerHTML = `${num1} / ${num2} = ${result}`
}

// ========================================== or ===============================================

function handleClickFunction(event){
    let operator = event.target.value;
    let num1 = box1.value;
    let num2 = box2.value;
    let result = 0

    if(operator == "+"){
        result = num1+num2
        document.querySelector("#root").innerHTML = `${num1} + ${num2} = ${result}`
    }
    else if(operator == "-"){
        result = num1+num2
        document.querySelector("#root").innerHTML = `${num1} - ${num2} = ${result}`
    }
    else if(operator == "*"){
        result = num1+num2
        document.querySelector("#root").innerHTML = `${num1} * ${num2} = ${result}`
    }
    else if(operator == "/"){
        result = num1+num2
        document.querySelector("#root").innerHTML = `${num1} / ${num2} = ${result}`
    }
}

// ========================================== or ===============================================

function handleClick(event){
    let operator = event.target.value;
    let num1 = box1.value;
    let num2 = box2.value;

    let result = eval(`${num1}${operator}${num2}`)

    document.querySelector("#root").innerHTML = `${num1} ${operator} ${num2} = ${result}`
}