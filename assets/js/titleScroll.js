document.addEventListener('DOMContentLoaded', () => {
  const layout = document.querySelector('.layout__complete');
  const fernando = document.querySelector('.title__name1');
  const susana = document.querySelector('.title__name2');
  const letterF = document.querySelector('.phrase__letter1');
  const letterS = document.querySelector('.phrase__letter2');
  const images = document.querySelectorAll('.story__image');
  const storyCards = document.querySelector('.story__cards');
  const subtitles = document.querySelectorAll('.title__subtitle');
  const titleDisplays = document.querySelectorAll('.title__display');

  const wwDisplay = document.querySelector('.ww__display');
  const wwInfo = document.querySelector('.ww__info');

  // IntersectionObserver para schedule
  const scheduleItems = document.querySelectorAll('.schedule__item');
  const scheduleHours = document.querySelectorAll('.schedule__hour');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = [...scheduleItems].indexOf(entry.target);

        scheduleHours.forEach(hour => hour.classList.remove('schedule__hour_active'));
        scheduleHours[index].classList.add('schedule__hour_active');
      }
    });
  }, { threshold: 0.6 });

  scheduleItems.forEach(item => observer.observe(item));

  // Scroll event para otras animaciones
  layout.addEventListener('scroll', () => {
    const scrollY = layout.scrollTop;
    const layoutHeight = layout.clientHeight;

    // Fernando y Susana scroll
    if (scrollY > 100) {
      fernando.classList.add('scrolled');
      susana.classList.add('scrolled');
    } else {
      fernando.classList.remove('scrolled');
      susana.classList.remove('scrolled');
    }

    if (scrollY > 600) {
      fernando.classList.add('faded');
      susana.classList.add('faded');
    } else {
      fernando.classList.remove('faded');
      susana.classList.remove('faded');
    }

    // Letras F y S escaladas
    const scale = 1 + scrollY * 0.002;
    letterF.style.transform = `scale(${scale})`;
    letterS.style.transform = `scale(${scale})`;

    // Animación imágenes tipo cartas
    if (storyCards) {
      const storyTop = storyCards.offsetTop;
      images.forEach((img, i) => {
        if (scrollY + layoutHeight > storyTop + (i * 150)) {
          img.classList.add('show-card');
        } else {
          img.classList.remove('show-card');
        }
      });
    }

    // Mostrar subtítulos
    const layoutRect = layout.getBoundingClientRect();

    subtitles.forEach(subtitle => {
      const subtitleRect = subtitle.getBoundingClientRect();
      if (subtitleRect.top < layoutRect.bottom - 100) {
        subtitle.classList.add('show');
      } else {
        subtitle.classList.remove('show');
      }
    });

    titleDisplays.forEach(display => {
      const displayRect = display.getBoundingClientRect();
      if (displayRect.top < layoutRect.bottom - 100) {
        display.classList.add('show-title');
      } else {
        display.classList.remove('show-title');
      }
    });

    // ⬇️ WW Display efecto shrink con scroll
    if (wwDisplay && wwInfo) {
      const wwRect = wwDisplay.getBoundingClientRect();
      const visibleRatio = 1 - (wwRect.top / layoutRect.height);

      if (visibleRatio > 0.4) {
        wwDisplay.classList.add('ww__display_grow');
        wwInfo.classList.add('ww__info_grow');
      } else {
        wwDisplay.classList.remove('ww__display_grow');
        wwInfo.classList.remove('ww__info_grow');
      }
    }
  });

  // Transición suave para cambio de color en las horas
  const style = document.createElement('style');
  style.textContent = `
    .schedule__hour {
      transition: color 0.4s ease, background-color 0.4s ease;
    }
  `;
  document.head.appendChild(style);
});