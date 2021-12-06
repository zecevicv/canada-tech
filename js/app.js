/* #Hamburger Menu
  ======================================================= */
const hamburgerBtn = document.querySelector('.header-hamburger button');
const body = document.querySelector('body');
const header = document.querySelector('.header');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.toggle('show');
    body.classList.toggle('no-scroll');
    hamburgerBtn.classList.toggle('is-active');
  });
}

/* #Menu Scroll On Click
  ======================================================= */
// Handling link clicks
const scrollToFn = document.querySelectorAll('.scroll-to');

scrollToFn.forEach((fn) => {
  const scrollToLinks = fn.querySelectorAll('a');

  scrollToLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const id = link.hash;
      let yOffset = 0;

      if (window.innerWidth > 1024) {
        yOffset = -100;
      } else {
        yOffset = -80;

        if (id == "#aboutSlider") {
          yOffset = -220;
        }
      }

      const element = document.querySelector(id);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });

      header.classList.remove('show');
      body.classList.remove('no-scroll');
      hamburgerBtn.classList.remove('is-active');
    });
  });
});

/* #Projects Slider
================================================== */
new Swiper(".projects-slider .swiper", {
  navigation: {
    nextEl: ".projects-slider .next",
    prevEl: ".projects-slider .prev",
  },
  pagination: {
    el: ".projects-slider .swiper-pagination",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.56
    },
    1024: {
      slidesPerView: 3.05
    }
  }
});

/* #Portfolio Slider
================================================== */
new Swiper(".portfolio-slider .swiper", {
  navigation: {
    nextEl: ".portfolio-slider .next",
    prevEl: ".portfolio-slider .prev",
  },
  pagination: {
    el: ".portfolio-slider .swiper-pagination",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.15
    },
    1024: {
      slidesPerView: 3
    }
  }
});

/* #About Sliders
================================================== */
var videoSlider = new Swiper(".about .video-slider .swiper", {
  effect: 'fade',
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 1
    }
  },
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var textSlider = new Swiper(".about .text-slider .swiper", {
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 1
    }
  },
  navigation: {
    nextEl: ".about .next",
    prevEl: ".about .prev",
  },
  thumbs: {
    swiper: videoSlider,
  },
});

/* #Numbers Animation
  ======================================================= */
gsap.registerPlugin(ScrollTrigger);

const numbers = document.querySelectorAll('.numbers .num');

ScrollTrigger.create({
  trigger: ".numbers",
  onEnter: () => {
    numbers.forEach((number) => {
      var zero = {
        val: 0
      };
      var num = number.innerHTML;

      gsap.to(zero, {
        val: num,
        duration: 3,
        scrollTrigger: numbers,
        onUpdate: function () {
          number.innerHTML = zero.val.toFixed(0);
        }
      });
    });
  }
});

/* #AOS Animations
    ======================================================= */
AOS.init({
  startEvent: 'load',
  once: true,
  duration: 800,
  offset: 300,
});

/* #Lazy Loading
    ======================================================= */
document.addEventListener("DOMContentLoaded", yall);