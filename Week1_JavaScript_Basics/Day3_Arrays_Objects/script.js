// --- Array Setup ---
let numbers = [10, 20, 30, 40, 50];
const arrayDisplay = document.getElementById("arrayDisplay");
const result = document.getElementById("result");

function showArray() {
    arrayDisplay.textContent = `[ ${numbers.join(", ")} ]`;
    result.textContent = "Click a button to see the result 👇";
}

showArray();

// --- Buttons ---
document.getElementById("mapBtn").addEventListener("click", () => {
    const doubled = numbers.map(n => n * 2);
    result.textContent = `map(): Doubled ➜ [ ${doubled.join(", ")} ]`;
});

document.getElementById("filterBtn").addEventListener("click", () => {
    const filtered = numbers.filter(n => n > 25);
    result.textContent = `filter(): >25 ➜ [ ${filtered.join(", ")} ]`;
});

document.getElementById("reduceBtn").addEventListener("click", () => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    result.textContent = `reduce(): Sum ➜ ${sum}`;
});

document.getElementById("resetBtn").addEventListener("click", () => {
    numbers = [10, 20, 30, 40, 50];
    showArray();
});

// --- Object Example ---
const person = {
    name: "Sony",
    age: 24,
    city: "Hyderabad",
    skills: ["JS", "TS", "Angular"]
};

document.getElementById("objectDisplay").textContent =
    JSON.stringify(person, null, 2);
