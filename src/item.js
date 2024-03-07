


export const createItem = () => {


    const item = document.createElement('div');
    item.classList.add('item');
    const itemLabel = document.createElement('div');
   itemLabel.classList.add('item-label');
    const btn = document.createElement("button");
    btn.textContent = "X";
    // will need to create uuid for each btn and iterate over 
    // all to give sepcific delete funtionality
    btn.setAttribute('id', 'item-btn');
    btn.addEventListener('click', ()=> {
        console.log("itme btn")
    });
    item.appendChild(btn)
    item.appendChild(itemLabel);

 return item

}