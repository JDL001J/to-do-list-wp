import { createItem } from "./item";

export const onLoad = ()=> {
   const item = createItem();
    item.textContent = "sample project";
    const container = document.querySelector("#container");
    container.appendChild(item)
}
