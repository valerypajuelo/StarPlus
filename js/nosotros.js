// Animación al hacer scroll a la sección "quienes somos"
document.addEventListener('DOMContentLoaded', function () {
  const qsContenido = document.querySelector('.qs-contenido');

  if (qsContenido) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          qsContenido.classList.add('visible');
          observer.unobserve(entry.target); // Solo una vez
        }
      });
    }, { threshold: 0.3 });

    observer.observe(qsContenido);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const nmContenido = document.querySelector('.nm-contenido');

  if (nmContenido) {
    const observerNM = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          nmContenido.classList.add('visible');
          observerNM.unobserve(entry.target); // Solo una vez
        }
      });
    }, { threshold: 0.3 });

    observerNM.observe(nmContenido);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const visionContenido = document.querySelector('.vision .contenido');

  const observerVision = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visionContenido.classList.add('visible');
      }
    });
  }, { threshold: 0.5 });

  if (visionContenido) {
    observerVision.observe(visionContenido);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById('carouselValores');

  if (carousel) {
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      carousel.classList.add('active');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
      isDown = false;
    });

    carousel.addEventListener('mouseup', () => {
      isDown = false;
    });

    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.5;
      carousel.scrollLeft = scrollLeft - walk;
    });
  }
});
