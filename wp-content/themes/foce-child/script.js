
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

// accélération des fleurs au scroll
const objectSpeedUp = document.querySelectorAll(".object-speed-up")

window.addEventListener('scroll', () => {
    // variable initial
    debugger
        const rotationInital = rotate()
        let rotationSpeed = window.scrollY /10
        objectSpeedUp.style.transform = 'rotateFlowers(' + (rotationSpeed + 10) + 's)'  
    })
    
//     let rotationSpeed = window.scrollY /10
//     objectSpeedUp.style.transform = 'rotate (' + (rotationSpeed + 10) + 's)';
// })
// const elements = document.querySelectorAll('.fleur');
// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;
//   elements.forEach((element) => {
//     const duration = 10 - (scrollPosition / 100);
//     element.style.animationDuration = `${duration}s`;
//   });
// });


// Carrousel swiper JS
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

// menu burger

var sidenav = document.getElementById("masthead");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
    sidenav.classList.add("active");
  }

  function closeNav() {
    sidenav.classList.remove("active");
  }