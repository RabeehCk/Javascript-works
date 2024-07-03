// javascript does not support multiple inheritance

class GrandParent{

    m0(){
        console.log("Inside grandparent m0 method");
    }
}

class Parent{

    m1(){
        console.log("Inside parent m1 method");
    }
}

class Child extends Parent{

    m2(){
        console.log("Inside child m2 method");
    }
}

const ch = new Child();
ch.m2()
ch.m1()