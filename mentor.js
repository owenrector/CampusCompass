document.addEventListener("DOMContentLoaded", function () {
  // Simple script to update the footer year automatically
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
