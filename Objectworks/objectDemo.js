// var items = [
//               ["potato",45],
//               ["tomato",50],
//               ["ginger",250],
//               ["garlic",300],
//               ["onion",35]
//         ]

// var costlyItem = items.reduce((p1,p2)=>p1[1]>p2[1] ? p1:p2)
// console.log(costlyItem);

// var lowCostItem = items.reduce((p1,p2)=>p1[1]<p2[1] ? p1:p2)
// console.log(lowCostItem);


var items = {potato:45,tomato:50,ginger:250,garlic:300,onion:35}

var nestedArray = Object.entries(items)

var costly = nestedArray.reduce((p1,p2) => p1[1]>p2[1] ? p1:p2)

console.log(costly);

var cheap = nestedArray.reduce((p1,p2) => p1[1]<p2[1] ? p1:p2)

console.log(cheap);