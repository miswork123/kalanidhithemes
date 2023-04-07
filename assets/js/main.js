// Hide Header on on scroll down
const header = document.querySelector(".main-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll > 50) {
		header.classList.add(toggleClass);
	} else {
		header.classList.remove(toggleClass);
	}
});


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



