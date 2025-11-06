"use strict";
// === Day 4: TypeScript Generics ===
// ✅ Section 1: Compile Time vs Run Time
const timeOutput = document.getElementById("timeOutput");
let compileTimeNote = "✅ Compile Time: Errors are detected before code execution.";
let runTimeNote = "⚙️ Run Time: Errors occur while the program is running.";
timeOutput.innerHTML = `
  <p><strong>${compileTimeNote}</strong></p>
  <p><strong>${runTimeNote}</strong></p>
`;
console.log("Compile Time vs Run Time explained.");
// ✅ Section 2: Generics in Action
const genericOutput = document.getElementById("genericOutput");
// A simple generic function
function displayData(value) {
    console.log("Value:", value);
    return value;
}
// Using the generic function
const result1 = displayData("Hello, Generics!");
const result2 = displayData(12345);
const result3 = displayData(true);
// Display on UI
genericOutput.innerHTML = `
  <p>🔹 String: ${result1}</p>
  <p>🔹 Number: ${result2}</p>
  <p>🔹 Boolean: ${result3}</p>
`;
// ✅ Section 3: Dynamic Value Example
const input = document.getElementById("userInput");
const btn = document.getElementById("showBtn");
const dynamicOutput = document.getElementById("dynamicOutput");
// Generic function for dynamic input
function showDynamicValue(value) {
    return `You entered: ${value} (Type: ${typeof value})`;
}
// Button click event
btn.addEventListener("click", () => {
    const userValue = input.value;
    // Determine if number or string
    const parsedValue = isNaN(Number(userValue)) ? userValue : Number(userValue);
    const output = showDynamicValue(parsedValue);
    dynamicOutput.innerHTML = `<p>${output}</p>`;
});
