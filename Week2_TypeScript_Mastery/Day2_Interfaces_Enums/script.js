"use strict";
// --- 2️⃣ Enum Definition ---
var Department;
(function (Department) {
    Department["IT"] = "Information Technology";
    Department["HR"] = "Human Resources";
    Department["SALES"] = "Sales";
    Department["FINANCE"] = "Finance";
})(Department || (Department = {}));
// --- 3️⃣ Employee Data ---
const employees = [
    { id: 1, name: "Sony", age: 23, department: Department.IT, isActive: true },
    { id: 2, name: "Nani", age: 21, department: Department.HR, isActive: false },
    { id: 3, name: "Jyothi", age: 42, department: Department.SALES, isActive: true },
    { id: 4, name: "Rambabu", age: 45, department: Department.FINANCE, isActive: true },
];
// --- 4️⃣ Function to Display Employees ---
const employeeList = document.getElementById("employeeList");
function displayEmployees(list) {
    employeeList.innerHTML = ""; // clear previous output
    list.forEach((emp) => {
        const status = emp.isActive ? "🟢 Active" : "🔴 Inactive";
        employeeList.innerHTML += `
        <div>
          <strong>${emp.name}</strong> (${emp.age})<br>
          🏢 ${emp.department}<br>
          ${status}<br><br>
        </div>
      `;
    });
}
// --- 5️⃣ Function Call ---
displayEmployees(employees);
