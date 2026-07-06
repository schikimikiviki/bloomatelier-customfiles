const checkVisibility = () => {
  const windowHeight = window.innerHeight;
  document.querySelectorAll('.fade-in-scroll:not(.visible)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 150) {
      el.classList.add('visible');
    }
  });
};

checkVisibility();
window.addEventListener('scroll', checkVisibility, { passive: true });
