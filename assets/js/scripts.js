// Rewritten single-entry scripts file: theme toggle, hamburger, tag pills, logo carousel
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  /* ========== Theme toggle ========== */
  (function initTheme() {
    const toggles = [
      document.getElementById('mode-toggle'),
      document.getElementById('mobile-mode-toggle')
    ].filter(Boolean);

    const saved = localStorage.getItem('theme');
    if (saved) body.classList.toggle('dark-mode', saved === 'dark');

    toggles.forEach(btn => {
      btn.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }, { passive: true });
    });
  })();

  /* ========== Hamburger / mobile nav ========== */
  (function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav-container');
    if (!hamburger || !mobileNav) return;
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('mobile-visible');
      hamburger.classList.toggle('active');
    });
  })();

  /* ========== Tag pills (cards filtering) ========== */
  (function initTagPills() {
    const pills = Array.from(document.querySelectorAll('.tag-pill'));
    const cards = Array.from(document.querySelectorAll('.case-item.card'));
    if (!pills.length || !cards.length) return;

    function filterBy(tag) {
      cards.forEach(card => {
        const tags = (card.getAttribute('data-tags') || '').split(',').map(s => s.trim());
        card.hidden = !(tag === 'all' || tags.includes(tag));
      });
    }

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        filterBy(pill.getAttribute('data-tag') || 'all');
      }, { passive: true });
    });

    // initialize: activate the first pill marked .active or the "all" pill
    const active = pills.find(p => p.classList.contains('active')) || pills.find(p => p.getAttribute('data-tag') === 'all');
    if (active) active.click();
  })();
});

  