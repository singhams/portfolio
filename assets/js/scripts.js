document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const toggleBtns = [document.getElementById('mode-toggle'), document.getElementById('mobile-mode-toggle')];
  const body = document.body;

  // Apply saved theme on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
  }

  // Add event listeners for both theme toggle buttons
  toggleBtns.forEach((btn) => {
    if (btn) {
      btn.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      });
    }
  });

  // Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const mobileNavContainer = document.getElementById('mobile-nav-container');

  if (hamburger && mobileNavContainer) {
    hamburger.addEventListener('click', () => {
      mobileNavContainer.classList.toggle('mobile-visible');
      hamburger.classList.toggle('active');
    });
  }
});