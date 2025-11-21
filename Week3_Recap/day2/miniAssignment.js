// 1. Square of a number using arrow function
const square = (number) => number * number;
document.getElementById("square").innerHTML = `Square of 5 is ${square(5)}`;

// 2. Maximum of two numbers using arrow function
const findMax = (a, b) => a > b ? a : b;    
document.getElementById("max").innerHTML = `Maximum of 10 and 30 is ${findMax(10, 30)}`;

