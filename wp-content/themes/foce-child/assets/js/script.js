
// décalage des nuages aux sroll
const bigCloud = document.getElementById("big_cloud")
const littleCloud = document.getElementById("little_cloud")


window.addEventListener('scroll', () => {
  const decalage = window.scrollY
    let decalageCloud = decalage /10
      bigCloud.style.transform = 'translateX(' + (decalageCloud + -300) + 'px)';

    let decalageLittleCloud = decalage /10
      littleCloud.style.transform = 'translateX(' + (decalageLittleCloud + -300) + 'px)'

const logo = document.querySelector('.banner_img');
      let decalageLogo = decalage /10
       logo.style.top.transform = 'translateY(' + (decalageLogo + -300) + 'px)'
       console.log(logo);
    })
  //   // parallaxe logo 

  
// // Sélectionner l'élément à animer
// const element = document.querySelector('.banner_im');

// // Définir le moment où l'animation doit être déclenchée
// const triggerOffset = window.innerHeight * 0.8;

// // Fonction qui sera exécutée lorsque l'utilisateur fait défiler la page
// function checkScroll() {
//   const currentScroll = window.pageYOffset;
//   const elementTop = element.offsetTop;

//   // Ajouter la classe 'animate' lorsque l'utilisateur atteint le point de déclenchement
//   if (currentScroll + triggerOffset > elementTop) {
//     element.classList.add('animate');
//   }
// }

// // Écouter l'événement 'scroll'
// window.addEventListener('scroll', checkScroll);

    // const logo = document.querySelector('.banner_img')
    //   logo.classList.add('logo_parallax')
    //  let decalageLogo = decalage /10
    //    logo.style.top.transform = 'translateY(' + (decalageLogo + -300) + 'px)'

  //       window.scrollY.logo.style.transform = 'scale(2)'

  // // const parallaxeLogo = document.querySelector('.banner_img') // sélectionnez l'élément HTML
  // // parallaxeLogo.classList.add('.goDown')


  // document.querySelector('banner_img').classList.add('goDown')

  // Récupération de l'élément à animer
// const parallaxeLogo = document.querySelector('.banner_img');

// // Fonction pour animer l'élément en fonction du scroll
// function parallaxScroll() {
//   // Calcul de la distance parcourue par le scroll
//   const distance = window.scrollY

//   // Modification de la propriété transform de l'élément en fonction de la distance
//   // parallaxeLogo.style.transform = `perspective(150px), rotateX(${distance * 75}deg)`
//   parallaxeLogo.style.transform = `perspective(150px) . rotateX(\${distance 75}deg)`
// }

// // Écoute de l'événement scroll pour déclencher l'animation
// window.addEventListener('scroll', parallaxScroll);
// console.log(parallaxScroll);
// })


//effet d'apparition des titres
const titles = document.getElementsByTagName('span')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('title_visible')

    } else {
      entry.target.classList.remove('title_visible')
    }
    
  })
  
},
{rootMargin: "0px 0px -150px 0px"});

for (let i = 0; i < titles.length; i++) {
  const title = titles[i];
  observer.observe(title)
}



// accélération des fleurs au scroll
/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The callback function to run after scrolling
 * @param  {Integer}  refresh  How long to wait between scroll events [optional]
 */
function scrollStop (callback, refresh = 66) {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return

	// Setup scrolling variable
	let isScrolling

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {
        document.documentElement.style.setProperty('--rotationSpeed', 2)

		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling)

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(callback, refresh)

	}, false);

}

scrollStop(function () {
    document.documentElement.style.setProperty('--rotationSpeed', 12)
})



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
  })



// menu burger
  function toggleMenu () {  
    const navbar = document.querySelector('.main-navigation')
    const burger = document.querySelector('.menu-toggle')
    
    burger.addEventListener('click', () => {    
      navbar.classList.toggle('open-nav')
    })
  }
  toggleMenu()

  // parallaxe dans la banner
  //   const keyframes = `@keyframes parallaxe {
  //     from { transform: scale}
  //     to { transition: transform }
  //   }`

  // const sheet = new CSSStyleSheet()
  //    sheet.insertRule(keyframes)

  // const parallaxeLogo = document.querySelector('.banner_img')
  //     parallaxeLogo.style.animationName = 'parallaxe'
  //     parallaxeLogo.style.animationDelay = '1s';
  //     parallaxeLogo.style.animationTimingFunction = 'ease-in-out'



// // Récupération de l'élément à animer
// const parallaxeLogo = document.querySelector('.banner_img');

// // Fonction pour animer l'élément en fonction du scroll
// function parallaxScroll() {
//   // Calcul de la distance parcourue par le scroll
//   const distance = window.scrollY

//   // Modification de la propriété transform de l'élément en fonction de la distance
//   parallaxeLogo.style.transform = `perspective(${distance * 150}px), rotateX(${distance * 75}deg)`
// }

// // Écoute de l'événement scroll pour déclencher l'animation
// window.addEventListener('scroll', parallaxScroll);

// const parallaxScroll = () => {
//   const distance = window.pageYOffset;
//   const parallaxeLogo = document.querySelector('.logo_parallax');
//   parallaxeLogo.style.transform = `perspective(150px) rotateX(${distance * 75}deg)`;
// };

// window.addEventListener('scroll', parallaxScroll);

