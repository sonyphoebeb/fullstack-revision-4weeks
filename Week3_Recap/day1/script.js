// -----------------------------
// 1. Variables: var, let, const
// -----------------------------

var a = 10;        // function-scoped or global-scoped
let b = 20;        // block-scoped
const c = 30;      // block-scoped + cannot be reassigned

console.log("var a:", a);
console.log("let b:", b);
console.log("const c:", c);


// -----------------------------
// 2. Data Types
// -----------------------------

let name = "Sony";             // string
let age = 23;                  // number
let isActive = true;           // boolean
let user = { id: 1, name: "Sony" };  // object
let colors = ["red", "blue"];  // array
let nothing = null;           // null
let notDefined;               // undefined

console.log(typeof name, typeof age, typeof isActive);
console.log(typeof user, typeof colors); // arrays show as "object"


// -----------------------------
// 3. Hoisting
// -----------------------------

console.log(hoistedVar);  // undefined (hoisted with default undefined)
var hoistedVar = 100;

// console.log(notHoistedLet); // ❌ Error (temporal dead zone)
// let notHoistedLet = 200;


// -----------------------------
// 4. Scope
// -----------------------------

// Global scope
let globalValue = "I am global";

function testScope() {
    let functionValue = "I am inside function";
    console.log(globalValue);      // accessible
    console.log(functionValue);    // accessible
}

testScope();

// console.log(functionValue); // ❌ Error (not accessible outside function)


// Block scope (let/const)
{
    let blockValue = "I exist only in this block";
    console.log(blockValue);
}

// console.log(blockValue); // ❌ Error


// ---------------------------------
// 5. Practice output to HTML page
// ---------------------------------

document.getElementById("output").innerHTML = `
    <h3>Practice Completed</h3>
    <p>Check the browser console for all logs and behaviors.</p>
`;
