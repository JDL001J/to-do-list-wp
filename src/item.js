


export const createItem = () => {


    const item = document.createElement('div');
    item.setAttribute('id', 'item');
    const itemLabel = document.createElement('div');
    itm
    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.setAttribute('id', 'item-btn');
    // btn.addEventListener('click', ()=> {
    //     console.log("itme btn")
    // });
    item.appendChild(btn)
    item.appendChild(itemLabel);

 return item

}