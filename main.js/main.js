// Bacground header
const header = document.querySelector('header');
window.onscroll = () =>{
  header.classList.toggle('scroll-header', window.scrollY > 0)
}

// navbar
let menu = document.querySelector('.bar');
let clos = document.querySelector('.closer');
let nav = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  // menu.classList.toggle('fa-times');
  nav.classList.add('active');
})
clos.addEventListener('click', () => {
//   // menu.classList.toggle('fa-times');
  nav.classList.remove('active');
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link');
const linkAction = () =>{
    const nav = document.querySelector('.navbar')
    // When we click on each nav_link, we remove the active class
    nav.classList.remove('active')
}
navLink.forEach(l => l.addEventListener('click', linkAction))


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-Link')
		}else{
			sectionsClass.classList.remove('active-Link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);


const info = document.querySelector('.info');
const box = document.querySelector('.box-info');
const closeX = document.querySelector('.closeX');

info.addEventListener('mouseover', () => {
  box.classList.add('active');
});
closeX.addEventListener('click', () => {
  box.classList.remove('active');
});

const info1 = document.querySelector('.info1');
const box1 = document.querySelector('.box-info1');
const closeX1 = document.querySelector('.closeX1');

info1.addEventListener('mouseover', () => {
  box1.classList.add('active');
});
closeX1.addEventListener('click', () => {
  box1.classList.remove('active');
});

const info2 = document.querySelector('.info2');
const box2 = document.querySelector('.box-info2');
const closeX2 = document.querySelector('.closeX2');

info2.addEventListener('mouseover', () => {
  box2.classList.add('active');
});
closeX2.addEventListener('click', () => {
  box2.classList.remove('active');
});

const info3 = document.querySelector('.info3');
const box3 = document.querySelector('.box-info3');
const closeX3 = document.querySelector('.closeX3');

info3.addEventListener('mouseover', () => {
  box3.classList.add('active');
});
closeX3.addEventListener('click', () => {
  box3.classList.remove('active');
});

const info4 = document.querySelector('.info4');
const box4 = document.querySelector('.box-info4');
const closeX4 = document.querySelector('.closeX4');

info4.addEventListener('mouseover', () => {
  box4.classList.add('active');
});
closeX4.addEventListener('click', () => {
  box4.classList.remove('active');
});

// slides
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}


  /*=============== AOS SCROLL REVEAL ANIMATION ===============*/
AOS.init({
  offset: 400,
  duration: 1000,
  easing: 'ease-in-out'
});





























/*const flip1 = document.querySelector('.flip1');
const box1 = document.querySelector('.box-info1');

flip1.addEventListener('click', e => {
  box1.classList.add('active');
})

const flip2 = document.querySelector('.flip2');
const box2 = document.querySelector('.box-info2');

flip2.addEventListener('click', e => {
  box2.classList.add('active');
})

const flip3 = document.querySelector('.flip3');
const box3 = document.querySelector('.box-info3');

flip3.addEventListener('click', e => {
  box3.classList.add('active');
})
const flip4 = document.querySelector('.flip4');
const box4 = document.querySelector('.box-info4');

flip4.addEventListener('click', e => {
  box4.classList.add('active');
})*/