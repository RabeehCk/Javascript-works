function one(){
    console.log("inside first function");
}

function two(){
    one()
    console.log("inside second function");
}

function three(){
    two()
    console.log("inside third function");
}

three()