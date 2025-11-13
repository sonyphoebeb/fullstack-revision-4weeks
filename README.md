<h1 align="center">💻 Backend Development Learning Summary 🚀</h1>

**Author:** Sony Phoebe  
**Date:** November 9, 2025  
**Technologies:** Node.js | TypeScript | SQL Server | Postman

---

## 📘 Overview
This repository documents my learning journey and practical implementation of backend development concepts.  
It focuses on integrating **Stored Procedures (SPs)** with **Node.js** using a layered architecture — ensuring clean code, maintainability, and performance.

---

## 🧩 Topics Covered

### 1. 🧱 Stored Procedures (SP)
- Learned how **Stored Procedures** encapsulate SQL logic and improve security, reusability, and performance.  
- Created and tested SPs inside **SQL Server Management Studio (SSMS)** before integrating them into code.
- Added those SP calls to the **Repository Layer** using MSSQL queries in Node.js.
- Example flow:
  
      EXEC [patient].[spCreatePatient]
      @first_name = 'Sony',
      @last_name = 'Phoebe',
      @gender = 'F',
      @dob = '2002-05-15';

- Verified every stored procedure execution through **Postman API testing**.

---

### 2. 📄 Pagination
- Learned the concept of **pagination** to manage large datasets efficiently.
- Implemented page-wise data fetching using query parameters like `pageNumber` and `pageSize`.
- Added pagination logic inside stored procedures for optimized data retrieval.
- Ensured API responses return both **data** and **metadata** (e.g., total records, total pages).

---

### 3. 🧩 JSON Output Formatting
- Implemented a **Helper** function to format database field names into **UpperCamelCase (PascalCase)** before sending JSON responses.
- Used **Model interfaces** to ensure type safety and consistent structure across endpoints.
- Improved readability and client-side integration through standardized output formats.

---

### 4. 🪲 Debugging and Testing
- Practiced debugging across different backend layers:
- Repository Layer → SQL Query & Connection issues  
- Business Service Layer → Logic flow  
- Controller Layer → Request/Response validation
- Used **console logging** and **error tracing** to identify root causes.
- Verified end-to-end API execution with **Postman**, ensuring correct data flow from DB to API response.

---

## ⚙️ Project Flow Recap

SQL Server (SP creation & testing)

↓

Repository Layer (executes SPs)

↓

Business Service (handles logic)

↓

Controller (handles API requests)

↓

Routes (exposes endpoints)

↓

Postman (testing and validation)

---

## ✅ Key Takeaways
- Gained a strong understanding of backend **layered architecture**.  
- Learned how to connect SQL logic with Node.js repositories effectively.  
- Improved debugging skills, data consistency, and response formatting.  
- Practiced writing clean, modular, and maintainable backend code.  

