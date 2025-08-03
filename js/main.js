  document.addEventListener('DOMContentLoaded', function () {
    // Menú lateral toggle
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (toggle && sidebar) {
      toggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
      });

      const links = sidebar.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          sidebar.classList.remove('active');
        });
      });
    }

    // Swiper para el slider principal (index)
    if (document.querySelector('.mySwiper')) {
      new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }

    // Swiper para la sección de talleres
    if (document.querySelector('.talleres-swiper')) {
      new Swiper('.talleres-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        allowTouchMove: false,
        simulateTouch: false,
        grabCursor: false,
        navigation: {
          nextEl: '.talleres-next',
          prevEl: '.talleres-prev',
        },
      });
    }

    // 🔽 NUEVO: Menú hamburguesa + scroll dinámico
    const toggleBtn = document.getElementById('menuToggle');
    const menu = document.getElementById('menuCentral');
    const header = document.getElementById('mainHeader');

    if (toggleBtn && menu) {
      toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('show');
      });
    }

    if (header) {
      window.addEventListener('scroll', function () {
        header.classList.toggle('scroll', window.scrollY > 10);
      });
    }
  });

  // VIDEO preview + modal
  const previews = document.querySelectorAll('.video-preview');
  const modal = document.getElementById('modal');
  const modalVideo = document.getElementById('modal-video');

  let isDragging = false;
  let startX, startY;

  if (previews.length && modal && modalVideo) {
    previews.forEach(video => {
      video.addEventListener('mouseenter', () => video.play());
      video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });

      video.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalVideo.src = video.src;
        modalVideo.play();
        modalVideo.muted = false;
      });
    });

    modal.addEventListener('click', () => {
      modal.style.display = 'none';
      modalVideo.pause();
      modalVideo.currentTime = 0;
      modalVideo.src = '';
    });

    modal.addEventListener('mousedown', (e) => {
      isDragging = true;
      modal.style.cursor = 'grabbing';
      startX = e.pageX - modal.scrollLeft;
      startY = e.pageY - modal.scrollTop;
    });
  }
