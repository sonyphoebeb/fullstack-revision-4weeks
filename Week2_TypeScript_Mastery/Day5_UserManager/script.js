"use strict";
// 🌟 Day 5 — User Manager (CRUD Project)
// === Class: UserManager ===
class UserManager {
    constructor() {
        this.users = [];
    }
    // CREATE
    addUser(name, age) {
        const newUser = {
            id: Date.now(),
            name,
            age
        };
        this.users.push(newUser);
        this.displayUsers();
    }
    // READ (Display)
    displayUsers() {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        if (this.users.length === 0) {
            userList.innerHTML = "<p>No users found.</p>";
            return;
        }
        this.users.forEach(user => {
            const div = document.createElement("div");
            div.classList.add("user-card");
            div.innerHTML = `
          <p class="user-name">👤 ${user.name}</p>
          <p class="user-age">Age: ${user.age}</p>
          <div class="user-actions">
            <button onclick="editUser(${user.id})">✏️ Edit</button>
            <button onclick="deleteUser(${user.id})">🗑 Delete</button>
          </div>
        `;
            userList.appendChild(div);
        });
    }
    // UPDATE
    updateUser(id, newName, newAge) {
        const user = this.users.find(u => u.id === id);
        if (user) {
            user.name = newName;
            user.age = newAge;
            this.displayUsers();
        }
    }
    // DELETE
    deleteUser(id) {
        this.users = this.users.filter(u => u.id !== id);
        this.displayUsers();
    }
}
// === Initialize ===
const manager = new UserManager();
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const addBtn = document.getElementById("addBtn");
// === Event Listeners ===
addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    if (!name || isNaN(age) || age <= 0) {
        alert("Please enter a valid name and age!");
        return;
    }
    manager.addUser(name, age);
    nameInput.value = "";
    ageInput.value = "";
});
// === Global Functions for Buttons ===
window.deleteUser = (id) => {
    manager.deleteUser(id);
};
window.editUser = (id) => {
    const user = prompt("Enter new name and age (comma separated):", "Name, Age");
    if (user) {
        const [newName, newAge] = user.split(",");
        manager.updateUser(id, newName.trim(), Number(newAge));
    }
};
