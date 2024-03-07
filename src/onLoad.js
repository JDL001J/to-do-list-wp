import { createItem } from "./item";

export const onLoad = ()=> {
   const item = createItem()
 
    
    const container = document.querySelector("#container");
    container.appendChild(item)
}
