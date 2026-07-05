function waitForElement(selector, callback, timeout = 10000) {
  const el = document.querySelector(selector);
  if (el) return callback(el);

  const observer = new MutationObserver(() => {
    const el = document.querySelector(selector);
    if (el) {
      observer.disconnect();
      callback(el);
    }
  });
  observer.observe(document.body, {childList: true, subtree: true});

  if (timeout) {
    setTimeout(() => observer.disconnect(), timeout);
  }
}

function initLogoScroll(container) {
  const header = document.getElementById('tahefobu-header');
  const menu = document.querySelector('.tahefobu-nav-menu');
  if (!header || !menu) return;

  const img = document.createElement('img');

  img.src =
      'https://bloomatelier.eu/wp-content/uploads/2026/06/Pasted-image.png';
  img.alt = 'Logo';
  img.style.transition = 'opacity 0.2s ease';

  container.appendChild(img);

  let isSmall = false;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY >= 300;
    if (scrolled === isSmall) return;

    isSmall = scrolled;

    img.style.opacity = 0;
    img.style.marginTop = scrolled ? '-3vh' : '0px';
    menu.style.paddingTop = scrolled ? '10px' : '0';

    setTimeout(() => {
      img.src = scrolled ?
          'https://bloomatelier.eu/wp-content/uploads/2026/07/cropped_smaller.png' :
          'https://bloomatelier.eu/wp-content/uploads/2026/06/Pasted-image.png';

      img.style.opacity = 1;
    }, 150);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener(
      'DOMContentLoaded', () => waitForElement('.logo-big', initLogoScroll));
} else {
  waitForElement('.logo-big', initLogoScroll);
}