// Data
let numbers = [10, 20, 30, 40, 50];
const person = {
    name: "Sony",
    age: 23,
    city: "Hyderabad",
    skills: ["JS", "TS", "Angular"]
};

// Cache DOM nodes once
const arrayDisplay = document.getElementById("arrayDisplay");
const result = document.getElementById("result");
const objectDisplay = document.getElementById("objectDisplay");

// Helper to show the current array
const showArray = () => {
    arrayDisplay.textContent = `[ ${numbers.join(", ")} ]`;
    result.textContent = "Click a button to see the result 👇";
};

// Button actions (short and direct)
document.getElementById("mapBtn").addEventListener("click", () =>
    result.textContent = `map(): Doubled ➜ [ ${numbers.map(n => n * 2).join(", ")} ]`
);

document.getElementById("filterBtn").addEventListener("click", () =>
    result.textContent = `filter(): >25 ➜ [ ${numbers.filter(n => n > 25).join(", ")} ]`
);

document.getElementById("reduceBtn").addEventListener("click", () =>
    result.textContent = `reduce(): Sum ➜ ${numbers.reduce((acc, curr) => acc + curr, 0)}`
);

document.getElementById("resetBtn").addEventListener("click", () => {
    numbers = [10, 20, 30, 40, 50];
    showArray();
});

// Initial render
showArray();

// Pretty-print object into a <pre> using JSON.stringify with indentation
objectDisplay.textContent = JSON.stringify(person, null, 2);
