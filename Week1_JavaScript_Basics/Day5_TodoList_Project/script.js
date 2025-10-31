// --- Select Elements ---
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const completed = document.getElementById("completedCount");
const pending = document.getElementById("pendingCount");

let tasks = [];

// --- Add Task ---
function addTask() {
  const text = input.value.trim();
  if (!text) return alert("⚠️ Please enter a task!");
  tasks.push({ id: Date.now(), text, done: false });
  input.value = "";
  render();
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", e => e.key === "Enter" && addTask());

// --- Render All Tasks ---
function render() {
  list.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.classList.toggle("completed", task.done);
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="toggle(${task.id})" class="task-btn done">✔️</button>
        <button onclick="remove(${task.id})" class="task-btn delete">❌</button>
      </div>`;
    list.appendChild(li);
  });
  updateCount();
}

// --- Mark as Done ---
function toggle(id) {
  const task = tasks.find(t => t.id === id);
  task.done = !task.done;
  render();
}

// --- Delete Task ---
function remove(id) {
  tasks = tasks.filter(t => t.id !== id);
  render();
}

// --- Update Counts ---
function updateCount() {
  const done = tasks.filter(t => t.done).length;
  completed.textContent = done;
  pending.textContent = tasks.length - done;
}
