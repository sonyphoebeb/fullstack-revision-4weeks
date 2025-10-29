// --- 1️⃣ Arrays Basics ---
const numbers = [10, 20, 30, 40, 50];
const fruits = ["Apple", "Banana", "Cherry"];
const mixed = [1, "Hello", true, { name: "Sony" }];

// --- 2️⃣ Array Methods: map(), filter(), reduce() ---
const doubled = numbers.map(num => num * 2);  // new array with doubled numbers
const filtered = numbers.filter(num => num > 25); // elements greater than 25
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // total sum

// --- 3️⃣ Objects Basics ---
const person = {
    name: "Sony",
    age: 23,
    city: "Hyderabad",
    skills: ["JS", "TS", "Angular"]
};

// --- 4️⃣ Accessing & Modifying Objects ---
person.country = "India"; // add new property
person.age = 24; // modify existing

// --- 5️⃣ Combining Arrays & Objects ---
const users = [
    { name: "Sony", age: 24 },
    { name: "Kiran", age: 27 },
    { name: "Asha", age: 21 }
];

const userNames = users.map(u => u.name);
const adults = users.filter(u => u.age >= 23);
const averageAge = users.reduce((sum, u) => sum + u.age, 0) / users.length;

// --- 6️⃣ Display in HTML ---
document.getElementById("output").innerHTML =
    `
  <div class="section-title">1️⃣ Arrays</div>
  Numbers: [${numbers}]<br>
  Fruits: [${fruits}]<br>
  Mixed: [${mixed.join(", ")}]<br><br>

  <div class="section-title">2️⃣ map(), filter(), reduce()</div>
  Doubled: [${doubled}]<br>
  Filtered (>25): [${filtered}]<br>
  Sum: ${sum}<br><br>

  <div class="section-title">3️⃣ Object Example</div>
  ${JSON.stringify(person)}<br><br>

  <div class="section-title">4️⃣ Array of Objects</div>
  Users: ${JSON.stringify(users)}<br>
  User Names: [${userNames}]<br>
  Adults (≥23): ${JSON.stringify(adults)}<br>
  Average Age: ${averageAge.toFixed(1)}
`
    ;

console.log("✅ Arrays & Objects examples displayed successfully!");
