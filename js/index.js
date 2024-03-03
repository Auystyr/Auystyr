// <!-- Initialize Swiper -->
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 85,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-next-button",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 85,
        slidesPerGroup: 3,
        slideToClickedSlide: true,
    },
      900: {
          slidesPerView: 3,
          spaceBetween: 80,
          slidesPerGroup: 3,
          slideToClickedSlide: true,
      },
      700: {
        slidesPerView: 1,
        spaceBetween: 60,
        slidesPerGroup: 1,
        slideToClickedSlide: true,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerGroup: 1,
        slideToClickedSlide: true,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        slideToClickedSlide: true,
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        slideToClickedSlide: true,
      }
  }
  });
  
