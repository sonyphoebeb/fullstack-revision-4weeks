// --- 1️⃣ Class Definition ---
class Student {
    name: string;
    age: number;
    grade: string;
    isPassed: boolean;

    constructor(name: string, age: number, grade: string, isPassed: boolean) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.isPassed = isPassed;
    }

    displayInfo(): string {
        const status = this.isPassed ? "✅ Passed" : "❌ Failed";
        return `${this.name} (${this.age}) - Grade: ${this.grade} - ${status}`;
    }
}

// --- 2️⃣ Inheritance Example ---
class GraduateStudent extends Student {
    specialization: string;

    constructor(
        name: string,
        age: number,
        grade: string,
        isPassed: boolean,
        specialization: string
    ) {
        super(name, age, grade, isPassed);
        this.specialization = specialization;
    }

    displayInfo(): string {
        return `${super.displayInfo()} 🎓 Specialization: ${this.specialization}`;
    }
}

// --- 3️⃣ Create Instances ---
const students: Student[] = [
    new Student("Sony", 23, "A", true),
    new Student("Nani", 21, "D", false),
    new GraduateStudent("Jyothi", 25, "A+", true, "Computer Science"),
];

// --- 4️⃣ Render to UI ---
const studentList = document.getElementById("studentList") as HTMLElement;

function displayStudents(list: Student[]): void {
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
