const toggleButton = document.getElementById("toggle-mode");
const body = document.body;

// Load the user's preference from localStorage
const savedMode = localStorage.getItem("theme");
if (savedMode === "dark") {
  body.classList.add("dark-mode");
  toggleButton.innerText = "Switch to Light Mode";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Update button text based on current mode
  if (body.classList.contains("dark-mode")) {
    toggleButton.innerText = "Switch to Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.innerText = "Switch to Dark Mode";
    localStorage.setItem("theme", "light");
  }
});
