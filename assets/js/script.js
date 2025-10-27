// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Alert message on form submit
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  alert("Thank you for contacting me!");
  event.preventDefault(); // prevents reload
});
