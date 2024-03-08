

export const displayItem = (item) => {
    const {title, date, priority} = item;
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-div')

    const h1 = document.createElement('h1');
    h1.textContent = item.title

    

    const info = document.createElement('ul');
    info.classList.add('info');

    const dateInfo = document.createElement('li');
    dateInfo.textContent = `due: ${item.date}`
    info.appendChild(dateInfo)

    const priorityInfo = document.createElement('li');
    priorityInfo.textContent = `priority: ${item.priority}`
    info.appendChild(priorityInfo)

    itemDiv.appendChild(h1);
    itemDiv.appendChild(info);

    const container = document.querySelector("#container");
    container.appendChild(itemDiv)
}

