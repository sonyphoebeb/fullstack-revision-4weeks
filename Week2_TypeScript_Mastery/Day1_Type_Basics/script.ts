// --- Selecting output area ---
const output = document.getElementById("output") as HTMLElement;

// Helper function for displaying
function show(title: string, data: any) {
  output.innerHTML += `\n🟣 <strong>${title}</strong>\n${JSON.stringify(data, null, 2)}\n`;
}

// --- 1️⃣ Basic Types ---
let userName: string = "Sony";
let age: number = 23;
let isActive: boolean = true;

show("Basic Types", { userName, age, isActive });

// --- 2️⃣ Union Types (|) ---
let userId: string | number;
userId = 101;
show("Union Type (number)", userId);

userId = "U101";
show("Union Type (string)", userId);

// --- 3️⃣ Type Aliases ---
type User = {
  name: string;
  email: string;
  age?: number; // optional
};

const user1: User = { name: "Sony", email: "sony@google.com", age: 23 };
show("Type Alias Example", user1);

// --- 4️⃣ Intersection Types (&) ---
type Employee = {
  id: number;
  role: string;
};

type Manager = User & Employee; // combine User + Employee

const manager: Manager = {
  name: "Dhiren",
  email: "dhiren@google.com",
  id: 2001,
  role: "Team Lead",
};

show("Intersection Type Example", manager);

// --- 5️⃣ Function with Typed Parameters ---
function greet(person: string, age: number): string {
  return `Hello ${person}, you are ${age} years old.`;
}

show("Function Example", greet("Sony", 23));
