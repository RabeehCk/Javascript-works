class Employee{

    constructor(name,department,position){
        this.name = name;
        this.department = department;
        this.position = position;
    }

    employeeDisplay(){
        console.log(this.name,this.department,this.position);
    }
}

var obj = new Employee("rabeeh","hr","manager");
obj.employeeDisplay();