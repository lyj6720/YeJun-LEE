(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    const closeMenu = () => {nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation');};
    toggle.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {if (event.key === 'Escape') closeMenu();});
  }
  const year = document.querySelector('#copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();