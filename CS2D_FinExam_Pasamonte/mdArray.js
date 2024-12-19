// Prompt the user for input
let subArray1 = prompt("Enter names separated by commas: (e.g., Genevieve,Juan,Luna,Gabriel,Elise)").split(',');
let subArray2 = prompt("Enter ages separated by commas: (e.g., 24,65,21,5,9)").split(',').map(Number);

// Restructure the arrays into a multi-dimensional array [name, age]
let multiDimArray = subArray1.map((name, index) => [name, subArray2[index]]);

// Log the restructured array
console.log("Restructured Multi-Dimensional Array:");
multiDimArray.forEach(subArray => console.log(subArray));
