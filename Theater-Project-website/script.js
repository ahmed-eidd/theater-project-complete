const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__links');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');


const navSlide = () => {
  nav.classList.toggle('nav-active');
  // line1.classList.toggle('line-active-1')
  // line2.classList.toggle('line-active-2')
  // line3.classList.toggle('line-active-3')
}
 


burger.addEventListener('click', navSlide) 

