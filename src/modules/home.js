import { createEl } from "..";

export function homePage(){
    const container = document.querySelector('.main');
    container.replaceChildren();
    
    const homeDiv = createEl('div', 'tabcontent home', '', '');
    const text1 = createEl('p', 'home-text one', '', 'Best Restaurant in the world!');
    const text2 = createEl('p', 'home-text two', '', 'Since 1901');
    const chefImg = createEl('img', 'chef-img', "../dist/img/chef.jpg", '');
    chefImg.alt = "chef";
    const text3 = createEl('p', 'home-text three', '', "Visit Us now");


    container.appendChild(homeDiv);
    homeDiv.appendChild(text1);
    text1.insertAdjacentElement('afterend', text2);
    text2.insertAdjacentElement('afterend', chefImg);
    chefImg.insertAdjacentElement('afterend', text3);
}