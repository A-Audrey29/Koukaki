
// décalage des nuages aux sroll - à factoriser
const bigCloud = document.getElementById("big_cloud")
const littleCloud = document.getElementById("little_cloud")

window.addEventListener('scroll', () => {
    let decalage = window.scrollY /10
        bigCloud.style.transform = 'translateX(' + (decalage + -300) + 'px)';
})

window.addEventListener('scroll', () => {
    let decalage = window.scrollY /10
    littleCloud.style.transform = 'translateX(' + (decalage + -300) + 'px)'
})

// apparition des titres au scroll

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

// const title = document.querySelectorAll(h2)

// title.addEventListener('scroll', () => {


//     // controller de la visibilité 
//     const positionElement = element.offsetTop;
//     const hauteurElement = element.offsetHeight;
//     const positionScroll = window.scrollTop || window.pageYOffset;

// if (positionScroll > positionElement - window.innerHeight && positionScroll < positionElement + hauteurElement) {
//   // Votre code ici
// }       
// })

//   const position = element.getBoundingClientRect().top
//    window.innerHeight
//    translateX(3OOpx)