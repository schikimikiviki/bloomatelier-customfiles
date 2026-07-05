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
  observer.observe(document.body, { childList: true, subtree: true });

  if (timeout) {
    setTimeout(() => observer.disconnect(), timeout);
  }
}

function initLogoScroll(container) {
  const header = document.getElementById('tahefobu-header');
  const menu = document.querySelector('.tahefobu-nav-menu');
  if (!header || !menu) return;

  const imgBig = document.createElement('img');
  imgBig.src =
      'https://bloomatelier.eu/wp-content/uploads/2026/06/Pasted-image.png';
  imgBig.alt = 'Logo big';

  const imgSmall = document.createElement('img');
  imgSmall.src =
      'https://bloomatelier.eu/wp-content/uploads/2026/06/cropped.png';
  imgSmall.alt = 'Logo small';
  imgSmall.style.display = 'none';

  container.appendChild(imgBig);
  container.appendChild(imgSmall);

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY >= 300;

    header.classList.toggle('small', scrolled);

    imgBig.style.display = scrolled ? 'none' : 'block';
    imgSmall.style.display = scrolled ? 'block' : 'none';

    imgSmall.style.paddingTop = scrolled ? '2vh' : '0px';
    menu.style.paddingTop = scrolled ? '30px' : '0';
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => waitForElement('.logo-big', initLogoScroll));
} else {
  waitForElement('.logo-big', initLogoScroll);
}