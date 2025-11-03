"use strict";
// --- Selecting output area ---
const output = document.getElementById("output");
// Helper function for displaying
function show(title, data) {
    output.innerHTML += `\n🟣 <strong>${title}</strong>\n${JSON.stringify(data, null, 2)}\n`;
}
// --- 1️⃣ Basic Types ---
let userName = "Sony";
let age = 24;
let isActive = true;
show("Basic Types", { userName, age, isActive });
// --- 2️⃣ Union Types (|) ---
let userId;
userId = 101;
show("Union Type (number)", userId);
userId = "U101";
show("Union Type (string)", userId);
const user1 = { name: "Sony", email: "sony@example.com", age: 24 };
show("Type Alias Example", user1);
const manager = {
    name: "Kiran",
    email: "kiran@example.com",
    id: 2001,
    role: "Team Lead",
};
show("Intersection Type Example", manager);
// --- 5️⃣ Function with Typed Parameters ---
function greet(person, age) {
    return `Hello ${person}, you are ${age} years old.`;
}
show("Function Example", greet("Sony", 24));
