import { createItem } from "./create_item";

export const onLoad = ()=> {
   const item = createItem('default title', 'anytime', 'low')
 
    return item
  
}
