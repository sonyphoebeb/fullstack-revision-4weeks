
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

<br>

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

 ✅ Regular Function


    function greet(name) {
    return `Hello, ${name}!`;
    }

✅ Function Expression

    const add = function(a, b) {
    return a + b;
    };

✅ Arrow Function

    const multiply = (x, y) => x * y;
    
✅ Callback Function

    function processUserInput(callback) {
    const userName = "Sony";
    return callback(userName);
    }

    function displayUser(name) {
    return `Callback executed → Hello ${name}!`;
    }

    console.log(processUserInput(displayUser));
    
🧩 Output:

    Callback executed → Hello Sony!

# 💻 Folder Structure

    Day2_Functions/
    │
    ├── index.html     # HTML structure
    ├── style.css      # Styling
    └── script.js      # JavaScript logic
    
# 🚀 How to Run

1. Open index.html in your browser.

2. Check both the web output and console logs for clarity.

3. Each function example is clearly displayed with section titles.

# 🧩 Mini-Concept Recap

<table border="1" cellspacing="0" cellpadding="8">
  <thead>
    <tr>
      <th>Type</th>
      <th>Syntax</th>
      <th>Key Feature</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Regular Function</td>
      <td><code>function greet() {}</code></td>
      <td>Hoisted, has its own <code>this</code></td>
    </tr>
    <tr>
      <td>Function Expression</td>
      <td><code>const x = function() {}</code></td>
      <td>Not hoisted</td>
    </tr>
    <tr>
      <td>Arrow Function</td>
      <td><code>const x = () =&gt; {}</code></td>
      <td>Short syntax, no own <code>this</code></td>
    </tr>
    <tr>
      <td>Callback</td>
      <td>Passed as argument</td>
      <td>Executed later</td>
    </tr>
  </tbody>
</table>


# 🏁 Goal

Reinforce your understanding of different function types and how callbacks allow one function to control when another runs — a core JS skill used in async operations, event handling, and APIs.


✨ **Author:** *Sony*  
📂 *Project: A_FullStack_Revision*  
📘 *Week 1 – Day 2 Practice*


<br>

# 🌟 Day 3 – Arrays & Objects (Interactive)

This mini project is part of my **4-Week JavaScript Revision**.  
It demonstrates **Arrays and Objects** in action — including `map()`, `filter()`, and `reduce()` methods — through an interactive webpage.

---

## 🧩 Topics Covered
- Arrays basics (`push`, `map`, `filter`, `reduce`)
- Objects basics (properties, access, modification)
- DOM manipulation using JavaScript
- Event handling (`addEventListener`)
- Displaying data dynamically in HTML
- Using `JSON.stringify()` for object visualization

---

## 📂 Project Structure

    Week1/
    └── Day3_Arrays_Objects/
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md

---

## 🖥️ How It Works

1. **index.html**
   - Contains buttons for performing array operations.
   - Displays the array and results dynamically in the browser.

2. **script.js**
   - Handles logic for:
     - Showing initial array
     - Performing `map()`, `filter()`, and `reduce()` operations
     - Displaying object details with `JSON.stringify()`
   - Includes a reset button to restore the original array.

3. **style.css**
   - Adds a modern look to the output section and buttons.
   - Uses hover effects and spacing for better readability.

---

## ⚡ Features

✅ Interactive buttons to trigger array operations  
✅ Displays real-time output updates  
✅ Shows formatted object data  
✅ Easy to understand code flow with comments  

---

## 🧠 Example Outputs

**Array:**  
`[ 10, 20, 30, 40, 50 ]`

**map():** Doubled → `[ 20, 40, 60, 80, 100 ]`  
**filter():** >25 → `[ 30, 40, 50 ]`  
**reduce():** Sum → `150`  

**Object (JSON format):**
```json
{
  "name": "Sony",
  "age": 24,
  "city": "Hyderabad",
  "skills": ["JS", "TS", "Angular"]
}
🧭 Concepts Reinforced
Difference between arrays and objects

How map, filter, and reduce work step-by-step

Using JSON.stringify(obj, null, 2) for pretty printing

Updating DOM elements dynamically

🚀 How to Run
Clone or open this folder in VS Code:

bash
Copy code
git clone https://github.com/<your-username>/js-revision-lab.git
cd Week1/Day3_Arrays_Objects
Open index.html in your browser.

Click the buttons and see live results in the browser.

🏁 Author
👩‍💻 Sony
Part of “4-Week JavaScript Revision Series” (Week 1 – Day 3)

✨ "Code, click, and learn interactively!"








