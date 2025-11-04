// --- 1️⃣ Interface Definition ---
interface Employee {
    id: number;
    name: string;
    age: number;
    department: Department;
    isActive: boolean;
}

// --- 2️⃣ Enum Definition ---
enum Department {
    IT = "Information Technology",
    HR = "Human Resources",
    SALES = "Sales",
    FINANCE = "Finance",
}

// --- 3️⃣ Employee Data ---
const employees: Employee[] = [
    { id: 1, name: "Sony", age: 24, department: Department.IT, isActive: true },
    { id: 2, name: "Kiran", age: 27, department: Department.HR, isActive: false },
    { id: 3, name: "Asha", age: 22, department: Department.SALES, isActive: true },
    { id: 4, name: "Ravi", age: 29, department: Department.FINANCE, isActive: true },
];

// --- 4️⃣ Function to Display Employees ---
const employeeList = document.getElementById("employeeList") as HTMLElement;

function displayEmployees(list: Employee[]): void {
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
