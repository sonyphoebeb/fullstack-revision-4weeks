// --- Select Elements ---
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");

// --- Store Tasks ---
let tasks = [];

// --- Add Task ---
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return alert("⚠️ Please enter a task!");

  const newTask = {
    id: Date.now(),
    text,
    completed: false,
  };

  tasks.push(newTask);
  taskInput.value = "";
  renderTasks();
}

// --- Render Tasks ---
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button class="task-btn done" onclick="toggleComplete(${task.id})">✔️</button>
        <button class="task-btn delete" onclick="deleteTask(${task.id})">❌</button>
      </div>
    `;

    taskList.appendChild(li);
  });

  updateCounts();
}

// --- Toggle Complete ---
function toggleComplete(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

// --- Delete Task ---
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

// --- Update Counters ---
function updateCounts() {
  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.length - completed;

  completedCount.textContent = completed;
  pendingCount.textContent = pending;
}
