document.addEventListener('click', function(e) {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;

  const targetId = link.getAttribute('href');
  const target = document.querySelector(targetId);
  if (!target) return;

  e.preventDefault();

  const header = document.querySelector('#tahefobu-header');
  const headerHeight = header ? header.offsetHeight : 0;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY;

  window.scrollTo(
      {top: targetPosition - headerHeight - 200, behavior: 'smooth'});
});