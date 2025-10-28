// --- 1️⃣ Regular Function ---
function greet(name) {
    return `Hello, ${name}! Welcome to JS Revision 🌸`;
}

// --- 2️⃣ Function Expression ---
const add = function (a, b) {
    return a + b;
};

// --- 3️⃣ Arrow Function ---
const multiply = (x, y) => x * y;

// --- 4️⃣ Function with Default Parameters ---
function introduce(name = "Guest", role = "Learner") {
    return `${name} is a ${role}.`;
}

// --- 5️⃣ Callback Function ---
function processUserInput(callback) {
    const userName = "Sony";
    return callback(userName);
}

function displayUser(name) {
    return `Callback executed → Hello ${name}!`;
}

// --- 6️⃣ Display Output ---
const resultHTML = `
    <div class="section-title">1️⃣ Regular Function</div>
    ${greet("Sony")}<br><br>
  
    <div class="section-title">2️⃣ Function Expression</div>
    5 + 3 = ${add(5, 3)}<br><br>
  
    <div class="section-title">3️⃣ Arrow Function</div>
    4 × 6 = ${multiply(4, 6)}<br><br>
  
    <div class="section-title">4️⃣ Default Parameters</div>
    ${introduce("Sony", "Developer")}<br>
    ${introduce()}<br><br>
  
    <div class="section-title">5️⃣ Callback Function</div>
    ${processUserInput(displayUser)}
  `;

document.getElementById("output").innerHTML = resultHTML;

console.log("✅ Functions executed successfully!");
