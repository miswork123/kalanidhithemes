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
