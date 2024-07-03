var year = 2100;

if ((year % 100 == 0 && year % 400 == 0) || (year % 100 != 0 && year % 4 == 0)){
    console.log("Leap year");
}
else{
    console.log("Not a leap year");
}