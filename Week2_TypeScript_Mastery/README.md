<div align="center">

# 🌟 Week 2 – Day 1: TypeScript Basics

</div>

👩‍💻 **Author:** *Sony*  
📅 *Week 2 – Day 1*  
🏷️ *#TypeScript #LearningJourney #WebDev*

---

## 📘 Overview  
Practiced setting up and compiling a simple TypeScript project that runs in the browser.  
Learned how `.ts` files are compiled into `.js`, and displayed output using DOM manipulation.

---

## 🗂️ Folder Structure  

    Week2_TypeScript_Mastery/
    └── Day1_Type_Basics/
    ├── index.html
    ├── style.css
    ├── script.ts
    ├── script.js
    └── tsconfig.json

---

## ⚙️ Steps to Run  

1️⃣ Initialize TypeScript 

    tsc --init
    
2️⃣ Compile TS to JS

    tsc
    
3️⃣ Run Project

    Open index.html in browser or use Live Server.

## 🧭 Key Takeaway

* Learned the TypeScript workflow (.ts → .js).

* Practiced DOM manipulation with typed variables.

* Understood the role of tsconfig.json in project setup.

---  

✨ End of Day 1 Practice – TypeScript Basics Complete!





<br>

<div align="center">
  <h1>🌟 Week 2 – Day 2: TypeScript Interfaces & Enums</h1>
  <p>📘 Strengthening TypeScript foundations with structured data and controlled values.</p>
</div>

---

## 📅 **Day Overview**
Today’s focus was on understanding how **Interfaces** and **Enums** enhance code structure, readability, and maintainability in TypeScript.

---

## 🧠 **Concepts Covered**

### 1. 🔹 Interfaces
- Define the shape of an object.
- Help in enforcing consistency across multiple objects.
- Support optional and readonly properties.

ts

    interface Employee {
     id: number;
     name: string;
     age: number;
     department: string;
     isActive: boolean;
    }
    
### 2. 🔸 Enums
- Represent a set of named constants.
- Improve readability and prevent invalid values.

ts

    enum Department {
      IT = "Information Technology",
      HR = "Human Resources",
      SALES = "Sales",
    }
    
### 3. ⚙️ Interface + Enum Integration
- Used both together to define employees with structured department values.

ts

    interface Employee {
     id: number;
     name: string;
     age: number;
     department: Department;
     isActive: boolean;
    }
    
## 💻 Practical Task

Built a simple web page that displays a list of employees dynamically using TypeScript.

Features:

Data structured using Interface and Enum

DOM manipulation with TypeScript

Styled employee cards with hover effects and active/inactive status indicators

## 🧩 Folder Structure

Week2_TypeScript_Mastery/
└── Day2_Interfaces_Enums/
    ├── index.html
    ├── style.css
    ├── script.ts
    ├── script.js
    └── tsconfig.json
    
### 🎨 Preview

<img src="preview.png" alt="Employee List Preview" width="700">
    
## 🚀 How to Run

Open terminal in this folder.

Run the TypeScript compiler:

tsc script.ts
Open index.html in your browser.

✨ End of Day 2
“Interfaces define structure. Enums define clarity. Together, they make TypeScript powerful.”

<div align="center"> <p>✅ Day 2 Complete — Interfaces & Enums Mastered!</p> </div> ```
