const first_nav = document.querySelector(".first_nav");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 5) {
		first_nav.classList.add("second_navbar");
	} else {
		first_nav.classList.remove("second_navbar");
	}
});
