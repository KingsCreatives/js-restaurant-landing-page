import { createEl } from '..';

export function contact (){
const main = document.querySelector('.main');
main.replaceChildren();

const contactDiv = createEl('div', 'tabcontent contact', '', '');
main.append(contactDiv);

const p1 = createEl('p', '', '', '📞 +233 123 456 891');
const p2 = createEl('p', '', '', '🏠 7 Containers Bluekiosk, East Legon Hills, Ghana');
const mapImg = createEl('img', '', '../dist/img/map.png', '');
mapImg.alt = "location";

contactDiv.appendChild(p1);
p1.insertAdjacentElement('afterend', p2);
p2.insertAdjacentElement("afterend", mapImg);
}