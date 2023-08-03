// Function to toggle night mode
function toggleNightMode() {
  const body = document.getElementById("body");
  body.classList.toggle("night-mode");
  body.classList.toggle("day-mode");

  // Save night mode preference to local storage
  const isNightMode = body.classList.contains("night-mode");
  localStorage.setItem("nightMode", isNightMode);
}

// Check local storage for previous night mode preference
const isNightModeSaved = localStorage.getItem("nightMode");
if (isNightModeSaved === "true") {
  // If night mode was saved as true, enable night mode
  document.getElementById("body").classList.add("night-mode");
} else {
  // If night mode is not enabled, assume day mode and add the bg-gray-200 class
  document.getElementById("body").classList.add("day-mode");
}

// Add event listener to the toggle button
document
  .getElementById("nightModeToggle")
  .addEventListener("click", toggleNightMode);
// End of  toggle button
