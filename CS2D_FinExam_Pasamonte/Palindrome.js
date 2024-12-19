// Create a new JavaScript file named palindrome.js

// Prompt the user to input two strings
let str1 = prompt("Enter the first string: (e.g., RACECAR)");
let str2 = prompt("Enter the second string: (e.g., RECORDER)");

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Reverse the strings
let reversedStr1 = reverseString(str1);
let reversedStr2 = reverseString(str2);

// Log the original strings and their reversed versions
console.log("Original String 1:", str1);
console.log("Reversed String 1:", reversedStr1);
console.log("Original String 2:", str2);
console.log("Reversed String 2:", reversedStr2);

// Check if the original strings are equal to their reversed strings
let isPalindrome1 = (str1 === reversedStr1);
let isPalindrome2 = (str2 === reversedStr2);

console.log("Is the first string a palindrome?", isPalindrome1);
console.log("Is the second string a palindrome?", isPalindrome2);
