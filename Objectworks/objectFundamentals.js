var students = {
    name:"Rabeeh",
    place:"Malappuram",
    total:450,
    points:10
}

if("total" in students){
    console.log("present");
}

else{
    console.log("Not present");
}

if("points" in students){
    students.points+=10
}

else{
    students.points=15
}

console.log(students);