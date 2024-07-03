var weightInKg = 75
var heightInCm = 165
var heightInM = heightInCm/100

var bmi = (weightInKg/(heightInM**2))
console.log(Math.round(bmi));

if(bmi<19){
    console.log("Underweight");
}
else if(bmi<=25){
    console.log("Normal");
}
else if(bmi<=30){
    console.log("Overweight");
}
else if(bmi>30){
    console.log("Obese");
}