document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('tahefobu-header');

  if (!header) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY >= 300;

    header.classList.toggle('small', scrolled);
  });
});


window.addEventListener('load', () => {
  const container = document.querySelector('.logo-big');

  if (!container) return;

  const img = document.createElement('img');
  img.src =
      'https://bloomatelier.eu/wp-content/uploads/2026/06/Pasted-image.png';
  img.alt = 'Logo';

  container.appendChild(img);
});