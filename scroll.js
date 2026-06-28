window.addEventListener('load', () => {
  const header = document.getElementById('tahefobu-header');
  const container = document.querySelector('.logo-big');
  const menu = document.querySelector('.tahefobu-nav-menu');

  if (!header || !container || !menu) return;

  // Bild 1 (groß)
  const imgBig = document.createElement('img');
  imgBig.src =
      'https://bloomatelier.eu/wp-content/uploads/2026/06/Pasted-image.png';
  imgBig.alt = 'Logo big';

  // Bild 2 (klein / alternativ)
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
});