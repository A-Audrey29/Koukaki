
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
// test 1
// const objectSpeedUp = document.querySelectorAll(".object-speed-up")

// let oldScroll = window.scrollY

// window.addEventListener('scroll', () => {
//     let newScroll = window.scrollY
//     if (oldScroll < newScroll) {
//         objectSpeedUp.forEach((element) => {
//             element.style.animationDuration = `1s`   
//         })   
//      }
//      else {
//         objectSpeedUp.forEach((element) => {
//             element.style.animationDuration = `4s`   
//         })   
//      } 
//     oldScroll = newScroll

        // .style.transform = 'rotateInitial(' + (rotationSpeed + 10) + 's)'  
    // })
    // function myFunction() {
    //     var myElement = document.getElementById("myElement");
    //     var i = 0;
        
    //     function myScrollFunction() {
    //       i++;
    //       console.log("Scrolling " + i);
    //       if (i == 5) {
    //         myElement.removeEventListener("scroll", myScrollFunction);
    //         console.log("Scrolling stopped");
    //       }
    //     }
      
    //     myElement.addEventListener("scroll", myScrollFunction);
    //   }
   
    //test 2
    // const element = document.querySelector('object-speed-up');
// window.addEventListener('scroll', function() {
// 	const scroll = element.style.setProperty('objectSpeedUp', `${scroll}s`);
// });

//test 3
    // const element = document.querySelector('object-speed-up');

// window.addEventListener('scroll', () => {
//     document.documentElement.style.setProperty('--rotationSpeed', 2);
    // let decalage = window.scrollY /10
    // element.style.transform = 'rotate(' + decalage + '1s)'
// })
    

// let timer = null;
// window.addEventListener('scroll', function() {
//     if(timer !== null) {
//         clearTimeout(timer);        
//     }
//     timer = setTimeout(function() {
//           // do something
//         document.documentElement.style.setProperty('--rotationSpeed', 2);
//      }, 150);
// }, false);

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


//test 4
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

// var sidenav = document.getElementById("masthead");
// var openBtn = document.getElementById("openBtn");
// var closeBtn = document.getElementById("closeBtn");

// openBtn.onclick = openNav;
// closeBtn.onclick = closeNav;

// function openNav() {
//     sidenav.classList.add("active");
//   }

//   function closeNav() {
//     sidenav.classList.remove("active");
//   }


  function toggleMenu () {  
    const navbar = document.querySelector('.main-navigation')
    const burger = document.querySelector('.menu-toggle')
    
    burger.addEventListener('click', () => {    
      navbar.classList.toggle('open-nav')
    })

  
    // const navbarLinks = document.querySelectorAll('.navbar a')
    // navbarLinks.forEach(link => {
    //   link.addEventListener('click', () => {    
    //     navbar.classList.toggle('open-nav')
    //   })
    // })  
  }
  toggleMenu()


  // apparition des titres

const ratio = .2
const options = {
    root : null,
    rootMargin: '0px',
    threshold: ratio
}

const crossing = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      console.log('visible')
      entry.target.classList.add('flow-visible')
      observer.unobserve(entry.target)  
    } 
  })
}

const observer = new IntersectionObserver(crossing, options)
document.querySelectorAll('.flow-invisible').forEach(function (r) {
  observer.observe(r)
})


//   // Récupère l'élément HTML correspondant au titre
// const titre = document.querySelectorAll('h2');

// // Ajoute un événement de défilement à la fenêtre du navigateur
// window.addEventListener('scroll', () => {
//   // Si la position verticale du scroll est supérieure à 100px
//   if (window.scrollY > 100) {
//     // Ajoute la classe qui fait apparaître le titre
//     titre.classList.add('flow');
//   } else {
//     // Sinon, retire la classe pour masquer le titre
//     titre.classList.remove('flow');
//   }
// });


// // Remove the transition class
// const square = document.querySelectorAll('.flow');
// square.classList.remove('flow');

// // Create the observer, same as before:
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       square.classList.add('flow');
//       return;
//     }

//     square.classList.remove('flow');
//   });
// });

// observer.observe(document.querySelector('.flow'));