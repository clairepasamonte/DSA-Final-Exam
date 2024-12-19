// Prompt the user for array values
let numbers = [];
for (let i = 0; i < 8; i++) {
    let num = parseInt(prompt(`Enter number ${i + 1}:`));
    numbers.push(num);
}

// Bubble Sort Function
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing: ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                console.log(`Swapped: ${arr[j]} and ${arr[j + 1]}`);
            }
        }
    }
    return arr;
}

// Sort the numbers using Bubble Sort and log the process
console.log("Original Array:", numbers);
let sortedArray = bubbleSort(numbers);
console.log("Sorted Array:", sortedArray);
