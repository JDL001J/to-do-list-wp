import { createItem } from "./create_item";

export const dialogBox = () => {
    
    const box = document.createElement('dialog');
    box.setAttribute('id', 'dialog-box');
    const body = document.querySelector('#body')

    body.appendChild(box);
    box.showModal()


}