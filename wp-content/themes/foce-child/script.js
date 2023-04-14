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

const title = document.querySelectorAll(h2)

title.addEventListener('Scroll', () => {


    // controller de la visibilité 
    const positionElement = element.offsetTop;
    const hauteurElement = element.offsetHeight;
    const positionScroll = window.scrollTop || window.pageYOffset;

if (positionScroll > positionElement - window.innerHeight && positionScroll < positionElement + hauteurElement) {
  // Votre code ici
}       
})

console.log("hello");

//   const position = element.getBoundingClientRect().top
//    window.innerHeight
//    translateX(3OOpx)