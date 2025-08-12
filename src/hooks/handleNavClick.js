/**
 * Scrolls viewport to Projects Section
 */
export const handleNavClick = (e, closeMenu) => {
  e.preventDefault();

  const href = e.currentTarget.getAttribute('href') || '';
  const id = href.split('#')[1];
  const el = id && document.getElementById(id);

  if (el) {
    window.scrollTo({
      left: 0,
      top: el.offsetTop - 65,
      behavior: 'smooth'
    });
  }

  if (typeof closeMenu === 'function') closeMenu(false);
};