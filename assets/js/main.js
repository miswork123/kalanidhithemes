// Hide Header on on scroll down
const header = document.querySelector(".main-header");
const headerBottum = document.querySelector(".main-header-botom")
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll > 50) {
		header.classList.add(toggleClass);
		headerBottum.classList.add(toggleClass);
	} else {
		header.classList.remove(toggleClass);
		headerBottum.classList.remove(toggleClass);
	}
});

// Hide Header on on scroll down

// close loading

let closeLoader = document.querySelector('.div-close');
let loaderWrap = document.querySelector('.loader-wrap');

closeLoader.addEventListener('click', function(){
	loaderWrap.classList.add('hidden');
});

// end close loading


// menu-out

let menuIteam = document.querySelector(".hamburger");
let menuMobile = document.querySelector(".hidden-bar");
let opacity = document.querySelector(".menu-backdrop");
menuIteam.addEventListener("click", function (e) { 
	e.stopPropagation(); // ngăn chặn sự lang truyền sự kiện ra các thành phần cha hoặc con
	e.preventDefault(); //ngăn chặn hành vi mặc định của thẻ a: load lại trang
 	
	menuMobile.classList.toggle("visible-sidebar");
    opacity .classList.toggle("opacity");

	if (menuMobile.classList.contains("visible-sidebar")) {
		const specifiedElement = document.querySelector('.hidden-bar');

		// I'm using "click" but it works with any event
		document.addEventListener('click', event => {
			const isClickInside = specifiedElement.contains(event.target)

			if (!isClickInside) {
				menuMobil.classList.remove("visible-sidebar");
				opacity .classList.remove("opacity");
			}
		});
	}
    
	
});

let cloSeds = document.querySelector('.logo-and__close')
let menuMobil = document.querySelector(".hidden-bar");
let opacityOne = document.querySelector(".menu-backdrop")
cloSeds.addEventListener("click", function () { 
	menuMobil.classList.remove("visible-sidebar");
    opacityOne.classList.remove("opacity")
});

let titleQuestion = document.querySelectorAll('.current');


for (let i = 0; i < titleQuestion.length; i++) {

	titleQuestion[i].addEventListener('click', function () {

		this.classList.toggle('dropdown');
       
	});
}

document.addEventListener("scroll", handleScroll);
// get a reference to our predefined button
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");

function handleScroll() {
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.05;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    //show button
    scrollToTopBtn.style.display = "block";
  } else {
    //hide button
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
  

