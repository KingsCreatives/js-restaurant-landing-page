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