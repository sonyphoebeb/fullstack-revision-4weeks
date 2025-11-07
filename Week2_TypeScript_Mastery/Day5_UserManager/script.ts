// 🌟 Day 5 — User Manager (CRUD Project)

// === Interface ===
interface IUser {
    id: number;
    name: string;
    age: number;
  }
  
  // === Class: UserManager ===
  class UserManager {
    private users: IUser[] = [];
  
    // CREATE
    addUser(name: string, age: number): void {
      const newUser: IUser = {
        id: Date.now(),
        name,
        age
      };
      this.users.push(newUser);
      this.displayUsers();
    }
  
    // READ (Display)
    displayUsers(): void {
      const userList = document.getElementById("userList") as HTMLElement;
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
    updateUser(id: number, newName: string, newAge: number): void {
      const user = this.users.find(u => u.id === id);
      if (user) {
        user.name = newName;
        user.age = newAge;
        this.displayUsers();
      }
    }
  
    // DELETE
    deleteUser(id: number): void {
      this.users = this.users.filter(u => u.id !== id);
      this.displayUsers();
    }
  }
  
  // === Initialize ===
  const manager = new UserManager();
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const ageInput = document.getElementById("age") as HTMLInputElement;
  const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
  
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
  (window as any).deleteUser = (id: number) => {
    manager.deleteUser(id);
  };
  
  (window as any).editUser = (id: number) => {
    const user = prompt("Enter new name and age (comma separated):", "Name, Age");
    if (user) {
      const [newName, newAge] = user.split(",");
      manager.updateUser(id, newName.trim(), Number(newAge));
    }
  };
  