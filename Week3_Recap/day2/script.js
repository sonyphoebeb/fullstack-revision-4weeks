// -------------------------------------------
// Day 2: Functions, Arrow Functions, Callbacks
// -------------------------------------------

// 1. Basic Function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Sony"));


// 2. Function Expression
const add = function (a, b) {
    return a + b;
};
console.log("Addition (Function Expression):", add(5, 7));


// 3. Arrow Function
const multiply = (x, y) => x * y;
console.log("Multiplication (Arrow Function):", multiply(4, 6));


// 4. Function with Default Parameter
function welcome(message = "Welcome to Day 2 Practice!") {
    return message;
}
console.log(welcome());


// 5. Callback Function Example
function processData(value, callback) {
    console.log("Processing data...");
    callback(value);
}

processData(100, function (result) {
    console.log("Callback executed with value:", result);
});


// 6. Display Output in HTML
document.getElementById("output").innerHTML = `
  <h3>Day 2 Practice Completed ✔</h3>
  <p>Check console for results of function examples.</p>
`;
