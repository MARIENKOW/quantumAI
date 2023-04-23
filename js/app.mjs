import { smoothScroll } from "./module.js/smoothScroll.mjs";
import { spoilerFlex } from "./module.js/spoiler.mjs";
spoilerFlex();
const contactsScroll = document.querySelectorAll('[data-contacts]');
if(contactsScroll.length != 0){
   for(let i =0; i < contactsScroll.length;i++){
      contactsScroll[i].addEventListener('click',event=>{
         event.preventDefault();
         smoothScroll('#contacts','top')
      })
   }
}

const headerInner = document.querySelector('.header__inner');

document.addEventListener('click',event=>{
   if(event.target.dataset.scroll){
      event.preventDefault();
      if(headerInner.classList.contains('_spoilerOpen')){
         headerInner.classList.remove('_spoilerOpen')
         document.querySelector('.header__navigation').style.height='0';
      }
      smoothScroll(`#${event.target.dataset.scroll}`,'top')
   }
})
