let links = document.querySelectorAll('.link'),
	ind = document.querySelector('.indicator');
let target;

links.forEach((item) => {
	item.addEventListener('mouseenter', (e) => {
		target = e.target;
		ind.style.width = `${target.offsetWidth}px`;
		ind.style.left = `${target.offsetLeft}px`;
	});
});


let maskL = document.querySelector('.maskL');
window.addEventListener('load', () => {
	maskL.classList.add('hide');
	setTimeout(() => {
		maskL.remove();
	}, 3000)
});
// BURGER
const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burger-menu');
burger.addEventListener('click', toggleNav);
function toggleNav() {
	console.log('clicked');
	burger.classList.contains('is-active') ? burger.classList.remove('is-active') : burger.classList.add('is-active');
	burgerMenu.classList.contains('active') ? burgerMenu.classList.remove('active') : burgerMenu.classList.add('active');
}
// ANIMATION
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
	const elementTop = el.getBoundingClientRect().top;
	return (
		elementTop <=
		(window.innerHeight || document.documentElement.clientHeight) / dividend
	);
};
const elementOutofView = (el) => {
	const elementTop = el.getBoundingClientRect().top;
	return (
		elementTop > (window.innerHeight || document.documentElement.clientHeight)
	);
};
const displayScrollElement = (element) => {
	element.classList.add("scrolled");
};
const hideScrollElement = (element) => {
	element.classList.remove("scrolled");
};
const handleScrollAnimation = () => {
	scrollElements.forEach((el) => {
		if (elementInView(el, 1.25)) {
			displayScrollElement(el);
		} else if (elementOutofView(el)) {
			hideScrollElement(el)
		}
	})
}
window.addEventListener("scroll", () => {
	handleScrollAnimation();
});
// SWIPER
const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 20,
	effect: 'fade',
	loop: true,
	speed: 1600,
	mousewheel: {
		invert: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true
	},
});
//   COUNTER




const paragraph = `
        Copyright &copy; ${new Date().getFullYear()} SakaAgency All Right Reserver
    `;
document.getElementById('copyright').innerHTML = paragraph;