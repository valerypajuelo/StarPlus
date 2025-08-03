document.addEventListener('DOMContentLoaded', function () {
  const heroContenido = document.querySelector('.hero-contenido');

  if (heroContenido) {
    const observerHero = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heroContenido.classList.add('visible');
          observerHero.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observerHero.observe(heroContenido);
  }
});