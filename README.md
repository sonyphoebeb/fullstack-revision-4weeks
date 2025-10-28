
# 🌸 JavaScript Day 1 – Variables, Data Types & Scope Practice

Welcome to **Week 1, Day 1** of my **4-Week Full Stack Revision Plan** 🚀  
This session focuses on **core JavaScript fundamentals** — variables, data types, hoisting, and scope — with a hands-on HTML integration.

---

## 🎯 **Learning Objectives**
- Understand how variables work (`var`, `let`, `const`)
- Differentiate between primitive and non-primitive data types
- Explore **hoisting** and the **temporal dead zone**
- Learn **scope** types → global, function, and block
- Connect JS output dynamically to HTML using DOM manipulation

---

## 🧩 **Project Overview**

A simple interactive page that displays:
- Variable values  
- Data type checks using `typeof`  
- Hoisting and scope examples  
- Console logs for additional clarity  

The project demonstrates how to write JS separately and link it to HTML and CSS files.

---

## 🗂️ **Folder Structure**

     Week1_Day1_JS_Basics/
    ├── index.html # Main HTML file (links CSS + JS)
    ├── style.css # Handles page styling
    ├── script.js # JavaScript logic and DOM output
    └── README.md # Documentation (this file)

---

## ⚙️ **How to Run the Project**

   1. Clone or download this folder  
   2. Open `index.html` in your browser  
   3. View results directly on the webpage  
   4. Open DevTools (`F12` → Console) for additional logs  

---

## 🧠 **Key Concepts Illustrated**

| Concept | Description |
|----------|--------------|
| `var`, `let`, `const` | Variable declaration differences |
| Data Types | String, Number, Boolean, Null, Undefined, Object, Array |
| Hoisting | How JS moves declarations to the top of scope |
| Scope | Global, function, and block scope rules |
| DOM Manipulation | Using `getElementById` and `innerHTML` |

---

## 🖼️ **Preview (Output Example)**

🌸 JavaScript Day 1 – Variables, Data Types, Scope Practice

1️⃣ Variables

Name: Sony

Age: 23

City: Hyderabad

2️⃣ Data Types

Boolean: true

Array: JS, TS, Angular

Object: {"name":"Sony","age":23,"city":"Hyderabad"}

---

## 🧩 **Next Step → Day 2**
**Functions, Arrow Functions & Callbacks**

---

### 💡 **Note**
> This project is part of the [`fullstack-revision-4weeks`](https://github.com/sony/fullstack-revision-4weeks) repository — a complete 4-week hands-on refresh covering JavaScript, TypeScript, and Angular fundamentals.

---

👩‍💻 **Author:** *Sony*  
📅 *Week 1 – Day 1*  
🏷️ *#JavaScript #Practice #RevisionPlan*


# ⚡ Day 2 – Functions, Arrow Functions & Callbacks

## 📅 Week 1: JavaScript Deep Refresh  
**Focus:** Understanding different types of functions and how callbacks work.

---

## 🎯 **Topics Covered**
- Regular Functions  
- Function Expressions  
- Arrow Functions  
- Default Parameters  
- Callback Functions  

---

## 🧩 **Overview**

Functions are the building blocks of JavaScript logic.  
They let you **reuse code**, **organize logic**, and **control execution flow** efficiently.

This practice demonstrates:
- How to define and call functions in different ways  
- The difference between regular and arrow functions  
- How to pass one function as an argument to another (callback)

---

## 🧠 **Example Concepts**

### ✅ Regular Function
```js
function greet(name) {
  return `Hello, ${name}!`;
}
✅ Function Expression
js
Copy code
const add = function(a, b) {
  return a + b;
};
✅ Arrow Function
js
Copy code
const multiply = (x, y) => x * y;
✅ Callback Function
js
Copy code
function processUserInput(callback) {
  const userName = "Sony";
  return callback(userName);
}

function displayUser(name) {
  return `Callback executed → Hello ${name}!`;
}

console.log(processUserInput(displayUser));
🧩 Output:

nginx
Copy code
Callback executed → Hello Sony!
💻 Folder Structure
bash
Copy code
Day2_Functions/
│
├── index.html     # HTML structure
├── style.css      # Styling
└── script.js      # JavaScript logic
🚀 How to Run
Open index.html in your browser.

Check both the web output and console logs for clarity.

Each function example is clearly displayed with section titles.

🧩 Mini-Concept Recap
Type	Syntax	Key Feature
Regular Function	function greet(){}	Hoisted, has its own this
Function Expression	const x = function(){}	Not hoisted
Arrow Function	const x = () => {}	Short syntax, no own this
Callback	Passed as argument	Executed later

🏁 Goal
Reinforce your understanding of different function types and how callbacks allow one function to control when another runs — a core JS skill used in async operations, event handling, and APIs.

✨ Author: Sony
📂 Project: A_FullStack_Revision
📘 Week 1 – Day 2 Practice

yaml
Copy code

---

Would you like me to now generate the **callback flow diagram image** (with arrows & colors) to include below this READM