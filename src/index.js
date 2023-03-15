import { homePage } from './modules/home';
import { menu } from './modules/menu';
import { contact } from './modules/contact';
import './styles.css';

homePage();

export function createEl(el, className, src, text){
    const element = document.createElement(`${el}`);
    element.className = className;
    element.src = src;
    element.textContent = text;
    return element;
}

let tabSwitch = (function(){
    const homeTab = document.querySelector('.home-tab');
    homeTab.addEventListener('click', homePage);

    const menuTab = document.querySelector('.menu-tab');
    menuTab.addEventListener('click', menu);

    const contactTab = document.querySelector('.contact-tab');
    contactTab.addEventListener('click',contact);
})();
