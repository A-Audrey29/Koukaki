//   // import Swiper JS
//   import Swiper from 'swiper';
//   // import Swiper styles
//   import 'swiper/css';

//   const swiper = new Swiper();

// Carrousel

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
