import { createEl } from "..";

export function menu(){
    const mainDiv = document.querySelector('.main');
    mainDiv.replaceChildren();
    
    /*Menu Item 1 */
    const menuItem1 = createEl('div', 'menu-item');
    const itemImg1 = createEl('img', '', "../dist/img/salsiccia.png");
    itemImg1.alt = "Salsiccia";
    const itemText1 = createEl('h2', '' , '', 'Salsiccia');
    const itemText2 = createEl('p', '', '', 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');
    menuItem1.appendChild(itemImg1);
    itemImg1.insertAdjacentElement('afterend', itemText1);
    itemText1.insertAdjacentElement('afterend', itemText2);


    /*Menu Item 2 */
    const menuItem2 = createEl('div', 'menu-item');
    const itemImg2 = createEl('img', '', "../dist/img/gamberi.png");
    itemImg2.alt = "Disgustoso";
    const itemText3 = createEl('h2', '' , '', 'Disgustoso');
    const itemText4 = createEl('p', '', '', 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');
    menuItem2.appendChild(itemImg2);
    itemImg2.insertAdjacentElement('afterend', itemText3);
    itemText3.insertAdjacentElement('afterend', itemText4);

    /*Menu Item 3 */
    const menuItem3 = createEl('div', 'menu-item');
    const itemImg3 = createEl('img', '', "../dist/img/disgustoso.png", "");
    itemImg3.alt = "Colorato";
    const itemText5 = createEl('h2', '' , '', 'Colorato');
    const itemText6 = createEl('p', '', '', 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');
    menuItem3.appendChild(itemImg3);
    itemImg3.insertAdjacentElement('afterend', itemText5);
    itemText5.insertAdjacentElement('afterend', itemText6);

    
    /*Menu Item 4 */
    const menu4 = createEl('div', 'menu-item', '', '');
    const img = createEl('img', '', "../dist/img/pepe.png", ' ');
    img.alt = "pepe";
    const h2 = createEl('h2', '', '', 'Pepe');
    const p = createEl('p', '', '', 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil');
    menu4.appendChild(img);
    img.insertAdjacentElement('afterend', h2);
    h2.insertAdjacentElement('afterend', p);

    const menuDiv = createEl('div', 'tabcontent menu');
    mainDiv.appendChild(menuDiv);
    menuDiv.appendChild(menuItem1);
    menuDiv.appendChild(menuItem2);
    menuDiv.appendChild(menuItem3);
    menuDiv.appendChild(menu4);
}