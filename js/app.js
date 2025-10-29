// app.js — off-canvas menu + footer year (dropdown removed)
(() => {
  // ----- Footer year -----
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ===== Off-canvas menu =====
  const menu = document.getElementById('sidemenu');
  const hamburger = document.querySelector('.hamburger');
  const backdrop = document.querySelector('.backdrop');

  const openMenu = () => {
    if (!menu) return;
    menu.classList.add('open');
    backdrop?.classList.add('show');
    hamburger?.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    const firstLink = menu.querySelector('.menu-item');
    firstLink && firstLink.focus();
    document.documentElement.style.overflow = 'hidden'; // prevent page scroll
  };

  const closeMenu = () => {
    if (!menu) return;
    menu.classList.remove('open');
    backdrop?.classList.remove('show');
    hamburger?.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    hamburger && hamburger.focus();
    document.documentElement.style.overflow = ''; // restore scroll
  };

  hamburger?.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  backdrop?.addEventListener('click', () => {
    closeMenu();
  });

  // Close menu on Escape anywhere
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu?.classList.contains('open')) {
      closeMenu();
    }
  });

  // Prevent navigation on placeholders / disabled actions
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a.menu-item.placeholder');
    if (a) e.preventDefault();
  });
})();
