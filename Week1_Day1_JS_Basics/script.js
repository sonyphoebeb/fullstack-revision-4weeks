// --- 1. Variables ---
var name = "Sony";
let age = 25;
const city = "Chennai";

// --- 2. Data Types ---
const isDeveloper = true;
const skills = ["JS", "TS", "Angular"];
const details = { name, age, city };
const nothing = null;
let notAssigned;

// --- 3. Hoisting ---
var hoistedVar;
let hoistingExample;
hoistedVar = "I am hoisted!";
// let/const are not hoisted in the same way (Temporal Dead Zone)

// --- 4. Scope ---
function checkScope() {
  var a = 10;
  let b = 20;
  if (true) {
    var a = 30; // re-declared (same function scope)
    let b = 40; // block scoped
  }
  return `a = ${a}, b = ${b}`;
}

// --- 5. Display Output in HTML ---
const output = document.getElementById("output");

output.innerHTML = `
  <div class="section-title">1️⃣ Variables</div>
  Name: ${name}<br>
  Age: ${age}<br>
  City: ${city}<br><br>

  <div class="section-title">2️⃣ Data Types</div>
  Boolean: ${isDeveloper}<br>
  Array: ${skills.join(", ")}<br>
  Object: ${JSON.stringify(details)}<br>
  Null: ${nothing}<br>
  Undefined: ${notAssigned}<br><br>

  <div class="section-title">3️⃣ Hoisting Example</div>
  Hoisted var: ${hoistedVar}<br>
  (Try using let/const before declaration → check console for ReferenceError)<br><br>

  <div class="section-title">4️⃣ Scope Example</div>
  ${checkScope()}<br><br>

  <div class="section-title">5️⃣ typeof Operator</div>
  typeof name: ${typeof name}<br>
  typeof skills: ${typeof skills}<br>
  Array check: ${Array.isArray(skills)}
`;

console.log("✅ Output also logged to console for clarity.");
