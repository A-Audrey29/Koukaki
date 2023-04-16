// décalage des nuages aux sroll
const bigCloud = document.getElementById("big_cloud")

window.addEventListener('scroll', () => {
    let decalage = window.scrollY /10
        bigCloud.style.transform = 'translateX(' + (decalage + -300) + 'px)'
})

const littleCloud = document.getElementById("little_cloud")

window.addEventListener('scroll', () => {
    let decalage = window.scrollY /10
    littleCloud.style.transform = 'translateX(' + (decalage + -300) + 'px)'
})



// apparition des titres au scroll 
const title = document.querySelectorAll(h2)

title.addEventListener('scroll', () => {
    let decalage = window.scrollY /10
    title.style.transform = 'translateY(' + (decalage + 20) + 'px)'
})

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

  console.log('hello');