"use strict";
// --- 1️⃣ Class Definition ---
class Student {
    constructor(name, age, grade, isPassed) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.isPassed = isPassed;
    }
    displayInfo() {
        const status = this.isPassed ? "✅ Passed" : "❌ Failed";
        return `${this.name} (${this.age}) - Grade: ${this.grade} - ${status}`;
    }
}
// --- 2️⃣ Inheritance Example ---
class GraduateStudent extends Student {
    constructor(name, age, grade, isPassed, specialization) {
        super(name, age, grade, isPassed);
        this.specialization = specialization;
    }
    displayInfo() {
        return `${super.displayInfo()} 🎓 Specialization: ${this.specialization}`;
    }
}
// --- 3️⃣ Create Instances ---
const students = [
    new Student("Sony", 23, "A", true),
    new Student("Kiran", 27, "B", true),
    new GraduateStudent("Asha", 22, "A+", true, "Computer Science"),
];
// --- 4️⃣ Render to UI ---
const studentList = document.getElementById("studentList");
function displayStudents(list) {
    studentList.innerHTML = "";
    list.forEach((student) => {
        const card = document.createElement("div");
        card.className = "student-card";
        card.innerHTML = `<p>${student.displayInfo()}</p>`;
        studentList.appendChild(card);
    });
}
// --- 5️⃣ Call Function ---
displayStudents(students);
