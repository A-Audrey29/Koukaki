

const bigCloud = document.getElementById("big_cloud")
const littleCloud = document.getElementById("little_cloud")
const bannerImg = document.querySelector('.banner_img');
let previousScrollPosition = window.pageYOffset;
const backgroundVideo = document.querySelector('.background-video');
const scrollRatio = 0.5; // vous devez définir une valeur pour la variable imageOrigine

  // décalage des nuages aux sroll  
window.addEventListener('scroll', () => {
  const decalage = window.scrollY
  let decalageCloud = decalage /10
  bigCloud.style.transform = 'translateX(' + (decalageCloud + -300) + 'px)';

  let decalageLittleCloud = decalage /10
  littleCloud.style.transform = 'translateX(' + (decalageLittleCloud + -300) + 'px)'
    
  // parallaxe du logo 

  const currentScrollPosition = window.pageYOffset;
  const scrollDirection = currentScrollPosition > previousScrollPosition ? 'up' : 'down';
  
  const scrollTop = window.pageYOffset;
  const bannerImgOffset = scrollTop * scrollRatio;
  const backgroundVideoOffset = scrollTop * (1 - scrollRatio);

  bannerImg.style.transform = `translateY(${bannerImgOffset}px)`;
  backgroundVideo.style.transform = `translateY(${backgroundVideoOffset}px)`;
  
})


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