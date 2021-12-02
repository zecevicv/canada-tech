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
      slidesPerView: 1.15
    },
    1024: {
      slidesPerView: 1
    }
  },
  loop: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var textSlider = new Swiper(".about .text-slider .swiper", {
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1.15
    },
    1024: {
      slidesPerView: 3
    }
  },
  navigation: {
    nextEl: ".about .next",
    prevEl: ".about .prev",
  },
  thumbs: {
    swiper: videoSlider,
  },
  loop: true,
});