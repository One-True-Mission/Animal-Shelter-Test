// app.js — menu + footer year + accessibility
(() => {
  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Off-canvas menu
  const menu = document.getElementById('sidemenu');
  const hamburger = document.querySelector('.hamburger');
  const backdrop = document.querySelector('.backdrop');

  const openMenu = () => {
    if (!menu) return;
    menu.classList.add('open');
    backdrop?.classList.add('show');
    hamburger?.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    // trap focus to menu first link
    const firstLink = menu.querySelector('.menu-item');
    firstLink && firstLink.focus();
  };

  const closeMenu = () => {
    if (!menu) return;
    menu.classList.remove('open');
    backdrop?.classList.remove('show');
    hamburger?.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    hamburger && hamburger.focus();
  };

  hamburger?.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  backdrop?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();
