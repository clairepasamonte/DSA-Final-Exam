// Prompt the user to input arrays
let numbers = prompt("Enter numbers separated by commas: (e.g., 24,65,21,5,9,32,42,80,57)")
    .split(',')
    .map(Number); // Convert to numbers

let names = prompt("Enter names separated by commas: (e.g., Claie,Mj,Jean,Clert,Patrick)")
    .split(',');

// Merge both arrays into a single array
let mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sort numbers numerically in reverse
let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Sorted Numbers (Descending):", sortedNumbers);

// Sort names alphabetically
let sortedNames = [...names].sort();
console.log("Sorted Names (Alphabetically):", sortedNames);
