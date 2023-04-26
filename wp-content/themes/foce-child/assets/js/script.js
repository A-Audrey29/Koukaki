
// décalage des nuages aux sroll
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


  // apparition des titres


//effet d'apparition des titres

//chat gpt 
// const title = document.querySelectorAll('.title')
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('title_visible')

//     } else {
//       entry.target.classList.remove('title_visible')
//     }
//   })
// })

// observer.observe(title)


// //grafikart
// const ratio = .2
// const options = {
//     root : null,
//     rootMargin: '0px',
//     threshold: ratio
// }

// const crossing = function (entries, observer) {
//   entries.forEach(function (entry) {
//     if (entry.intersectionRatio > ratio) {
//       console.log('visible')
//       entry.target.classList.add('title_visible')
//       observer.unobserve(entry.target)  
//     } 
//   })
// }

// const observer = new IntersectionObserver(crossing, options)
// document.querySelectorAll('.title').forEach(function (r) {
//   observer.observe(r)
// })



// Remove the transition class
// const square = document.querySelectorAll('.title);
// square.classList.remove('title');

// // Create the observer, same as before:
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       square.classList.add('title_visible');
//       return;
//     }

//     square.classList.remove('title-visible');
//   });
// });

// observer.observe(document.querySelector('.title'));


// const observe = new IntersectionObserver((entries) => {
//   console.log('hey');
//     for(const entry of entries) {
//       if (entry.isIntersecting){
//           entry.target.animate([
//             {transform: 'translateY(40px)', opacity: 0},
//             {transform: 'translateY(0px)', opacity: 1},
//           ], {
//               duration: 1000
//           })
//       }
//     }
// })

// observer.observe(document.querySelector('.title1'))


 // // Récupère l'élément HTML correspondant au titre
// const titre = document.querySelectorAll('.title');

// // Ajoute un événement de défilement à la fenêtre du navigateur
// window.addEventListener('scroll', () => {
//   // Si la position verticale du scroll est supérieure à 100px
//   if (window.scrollY > 100) {
//     // Ajoute la classe qui fait apparaître le titre
//     titre.classList.add('title_visible');
//   } else {
//     // Sinon, retire la classe pour masquer le titre
//     titre.classList.remove('title_visible');
//   }
// });


// const title = document.querySelectorAll(".title")

// window.addEventListener('scroll', () => {
//   console.log('yes');
//     let decalage = window.scrollY /10
//         title.style.transform = 'translateY(' + (decalage + -40) + 'px)';
// })



 // création de l'observer
let observer = new IntersectionObserver(observables => {
  console.log(observables)
})
 
  // récupération des titres
  const titles = document.querySelectorAll('title')
    

  for(let title of titles){
    title.classList.add('title_visible')
    // observation des titres
    observer.observe(title)
  }



