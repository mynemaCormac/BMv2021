let qty = 0;

const header  =document.querySelector('header');
const headerTitle = document.querySelector('.header-title')
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const sideNav = document.querySelector('nav');
const sideNavPlacehoder = document.querySelector('.side-nav-placeholder');
const pageMask = document.querySelector('.page-mask');
const productModal = document.querySelector('.product-modal');

const toggleNav = () => {
	const navTitle = document.getElementsByClassName('side-nav-title')[0];

	if (getComputedStyle(navTitle).display == "none"){
		let nav = document.querySelector('nav');
		nav.classList.toggle('show');
	}
}

const toggleProduct = (id) => {
	//fetch data for Product Modal
	pageMask.classList.toggle('show')
	productModal.classList.toggle('show');
}

const changeQty = n => {
	let tempQty = document.getElementById('itemQty').value;
	if (tempQty > 0 && tempQty < 999) {
		qty = tempQty;
	}
	if (parseInt(qty) + n >= 1){
		qty = parseInt(qty) + n;
		document.getElementById('itemQty').value = qty;
	}
}

document.addEventListener("click", e => {
	if (e.target == pageMask){
		pageMask.classList.toggle('show');
		productModal.classList.toggle('show');

		qty = 0;
		document.getElementById('itemQty').value = qty;
	}
})

document.addEventListener("scroll", e => {
	header.classList.toggle('reposition', window.scrollY > 0);
	navLeft.classList.toggle('sticky', window.scrollY > 0);
	navRight.classList.toggle('sticky', window.scrollY > 0);	
	sideNav.classList.toggle('sticky', window.scrollY > 91);
	sideNavPlacehoder.classList.toggle('show', window.scrollY > 91);
})