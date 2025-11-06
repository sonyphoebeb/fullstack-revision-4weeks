// --- 1️⃣ Compile Time vs Run Time Example ---
const timeOutput = document.getElementById("timeOutput") as HTMLElement;

function showCompileVsRunTime() {
    const message = `
  🔹 <strong>Compile Time:</strong> Checked by TypeScript before running your code. 
  (e.g., type errors, missing properties)

  🔸 <strong>Run Time:</strong> Happens when the code is actually executed in the browser or JS engine.
  (e.g., logic errors, undefined variables)
  `;
    timeOutput.innerHTML = message;
}

showCompileVsRunTime();

// --- 2️⃣ Generics in Action ---
const genericOutput = document.getElementById("genericOutput") as HTMLElement;

// Generic function that works with any type
function displayData<T>(value: T): string {
    let displayValue: string;

    if (typeof value === "object" && value !== null) {
        displayValue = JSON.stringify(value, null, 2); // Pretty print the object
    } else {
        displayValue = String(value);
    }

    return `Value: ${displayValue} | Type: ${typeof value}`;
}

function showGenericExamples() {
    const examples = [
        displayData<string>("Hello TypeScript"),
        displayData<number>(2025),
        displayData<boolean>(true),
        displayData<object>({ name: "Sony", age: 23 }),
    ];

    genericOutput.innerHTML = examples.join("<br>");
}

showGenericExamples();

// --- 3️⃣ Dynamic Value Example ---
const userInput = document.getElementById("userInput") as HTMLInputElement;
const showBtn = document.getElementById("showBtn") as HTMLButtonElement;
const dynamicOutput = document.getElementById("dynamicOutput") as HTMLElement;

// Generic function to handle dynamic user values
function showGenericValue<T>(value: T): void {
    let displayValue =
        typeof value === "object" && value !== null
            ? JSON.stringify(value, null, 2)
            : String(value);

    dynamicOutput.innerHTML = `<strong>Dynamic Value:</strong> ${displayValue} <br> <strong>Type:</strong> ${typeof value}`;
}

showBtn.addEventListener("click", () => {
    const value = userInput.value;

    // If the value is numeric, convert it to number
    const parsedValue = isNaN(Number(value)) ? value : Number(value);
    showGenericValue(parsedValue);
});
