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
    const cards = Array.from(document.querySelectorAll('.card'));
    if (!pills.length || !cards.length) return;

    function filterBy(tag) {
      cards.forEach(card => {
        const tags = (card.getAttribute('data-tags') || '').split(',').map(s => s.trim());
        card.style.display = (tag === 'all' || tags.includes(tag)) ? '' : 'none';
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

  /* ========== Logo carousel (smooth, loop, pause on hover/focus) ========== */
  (function initLogoCarousel() {
    const track = document.querySelector('.logo-track');
    if (!track) return;

    // Ensure there's enough content to scroll by cloning nodes if needed
    function ensureScrollable(t) {
      const maxAttempts = 8;
      let attempts = 0;
      while (t.scrollWidth <= t.clientWidth * 1.1 && attempts < maxAttempts) {
        const clones = Array.from(t.children).map(c => c.cloneNode(true));
        clones.forEach(c => t.appendChild(c));
        attempts++;
      }
    }

    ensureScrollable(track);

    // RAF-based continuous scroll
    let rafId = null;
    let paused = false;
    const speed = 0.45; // px per frame (tweak as desired)

    function step() {
      if (!paused) {
        track.scrollLeft += speed;
        // Wrap smoothly when near the end
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
          track.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(step);
    }

    function start() {
      if (!rafId) rafId = requestAnimationFrame(step);
    }
    function stop() {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    // Pause on pointer enter / focus, resume on leave / blur
    track.addEventListener('mouseenter', () => { paused = true; }, { passive: true });
    track.addEventListener('mouseleave', () => { paused = false; }, { passive: true });
    track.addEventListener('focusin', () => { paused = true; });
    track.addEventListener('focusout', () => { paused = false; });

    // Pause while user is actively interacting (touch / pointer)
    track.addEventListener('pointerdown', () => { paused = true; }, { passive: true });
    track.addEventListener('pointerup', () => { paused = false; }, { passive: true });

    // Visibility: pause when tab not visible
    document.addEventListener('visibilitychange', () => {
      paused = document.hidden ? true : paused;
      if (!document.hidden) { /* do nothing, let mouse/focus control resume */ }
    });

    // Start loop
    start();
  })();
});