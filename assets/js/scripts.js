document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const toggleBtn = document.getElementById('mode-toggle');
  const body = document.body;

  // Apply saved theme on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
  }

  // Add event listener for the toggle button
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDarkMode = body.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
  }

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