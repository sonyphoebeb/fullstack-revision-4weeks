// 🌐 JS Day 4 – Promises, Async/Await & Fetch API

// --- 1️⃣ Select elements from the DOM ---
const fetchBtn = document.getElementById("fetchBtn");
const userCard = document.getElementById("userCard");
const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const cityEl = document.getElementById("city");
const statusEl = document.getElementById("status");

// --- 2️⃣ Promise-based Function ---
function fetchUserData() {
    // Returns a new Promise
    return new Promise((resolve, reject) => {
        fetch("https://randomuser.me/api/") // API call
            .then(response => {
                if (!response.ok) {
                    // if API response fails
                    reject("⚠️ Failed to fetch data");
                }
                return response.json(); // Convert to JSON
            })
            .then(data => resolve(data)) // resolve Promise
            .catch(err => reject(err)); // catch network errors
    });
}

// --- 3️⃣ Async Function using await ---
async function getUser() {
    try {
        statusEl.textContent = "⏳ Fetching user data...";
        userCard.classList.add("hidden");

        // Wait for the promise to resolve
        const data = await fetchUserData();
        const user = data.results[0];

        // Extract & display user data
        avatar.src = user.picture.large;
        nameEl.textContent = `${user.name.first} ${user.name.last}`;
        emailEl.textContent = `📧 ${user.email}`;
        cityEl.textContent = `🏙️ ${user.location.city}, ${user.location.country}`;

        userCard.classList.remove("hidden");
        statusEl.textContent = "✅ User data fetched successfully!";
    } catch (error) {
        statusEl.textContent = `❌ Error: ${error}`;
    }
}

// --- 4️⃣ Button Event Listener ---
fetchBtn.addEventListener("click", getUser);
