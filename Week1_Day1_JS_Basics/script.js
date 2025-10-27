// 🌸 JavaScript Day 1 – Variables, Data Types, Hoisting & Scope Practice
// -------------------------------------------------------------

// --- 1️⃣ Variables ---
var name = "Sony";
let age = 23;
const city = "Hyderabad";

// --- 2️⃣ Data Types ---
const isDeveloper = true;
const skills = ["JS", "TS", "Angular"];
const details = { name, age, city };
const nothing = null;
let notAssigned; // undefined

// --- 3️⃣ Hoisting ---
// Internally, JS does this:
// var hoistedVar;        // declared (initialized as undefined)
// let hoistingExample;   // declared (in TDZ — not accessible yet)
hoistedVar = "I am hoisted!";
// let/const are not hoisted in the same way (Temporal Dead Zone)

// Uncomment to test hoisting behavior:
// console.log(hoistingExample); // ❌ ReferenceError (in TDZ)
// let hoistingExample = "Testing TDZ";

// --- 4️⃣ Scope ---
function checkScope() {
    var a = 10;
    let b = 20;

    if (true) {
        var a = 30; // re-declared in the same function scope (var)
        let b = 40; // new variable, block scoped
    }

    return `a = ${a}, b = ${b}`;
}

// --- 5️⃣ Display Output in HTML ---
const outputElement = document.getElementById("output");

outputElement.innerHTML = `
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

// --- 6️⃣ Console Output (for Debugging / Learning) ---
console.log("✅ Output Summary:");
console.log({
    name,
    age,
    city,
    isDeveloper,
    skills,
    details,
    hoistedVar,
});
console.log("Scope test →", checkScope());
console.log("✅ Output also logged to console for clarity.");
