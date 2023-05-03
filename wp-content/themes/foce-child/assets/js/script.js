
// décalage des nuages aux sroll
const bigCloud = document.getElementById("big_cloud")
const littleCloud = document.getElementById("little_cloud")

window.addEventListener('scroll', () => {
  const decalage = window.scrollY
    let decalageCloud = decalage /10
      bigCloud.style.transform = 'translateX(' + (decalageCloud + -300) + 'px)';

    let decalageLittleCloud = decalage /10
      littleCloud.style.transform = 'translateX(' + (decalageLittleCloud + -300) + 'px)'

    // parallaxe : logo descend avec le scoll
  const logo = document.querySelector('.banner_img')

    let decalageLogo = decalage * 5
        logo.style.transform = 'translateY(' + (decalageLogo + -50) + 'px)';

})



// accélération des fleurs au scroll
/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The callback function to run after scrolling
 * @param  {Integer}  refresh  How long to wait between scroll events [optional]
 */
function scrollStop (callback, refresh = 66) {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;

	// Setup scrolling variable
	let isScrolling;

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {
        document.documentElement.style.setProperty('--rotationSpeed', 2);

		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(callback, refresh);

	}, false);

}

scrollStop(function () {
    document.documentElement.style.setProperty('--rotationSpeed', 12);
});



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
  const keyframes = `@keyframes parallaxe {
    from { opacity: 1 }
    to { opacity: 0 }
  }`

const sheet = new CSSStyleSheet()
sheet.insertRule(keyframes)

const parallaxe = document.querySelector('.banner_img')
parallaxe.style.animationName = 'parallaxe'
parallaxe.style.animationDuration = '1s';
parallaxe.style.animationTimingFunction = 'ease'

//effet d'apparition des titres

const titles = document.querySelectorAll('.title')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('title_visible')

    } else {
      entry.target.classList.remove('title_visible')
    }
    
  })
  
},
{rootMargin: "0px 0px -300px 0px"});

for (let i = 0; i < titles.length; i++) {
  const title = titles[i];
  observer.observe(title)
}
