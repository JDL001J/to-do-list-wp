(()=>{"use strict";(t=>{const{title:e,date:d,priority:n}=t,i=document.createElement("div");i.classList.add("item-div");const o=document.createElement("h1");o.textContent=t.title;const l=document.createElement("ul");l.classList.add("info");const a=document.createElement("li");a.textContent=`due: ${t.date}`,l.appendChild(a);const c=document.createElement("li");c.textContent=`priority: ${t.priority}`,l.appendChild(c),i.appendChild(o),i.appendChild(l),document.querySelector("#container").appendChild(i)})({title:"default title",date:"anytime",priority:"low"}),(()=>{const t=document.createElement("dialog");t.setAttribute("id","dialog-box"),t.setAttribute("aria-modal","false"),t.close(),document.querySelector("#body").appendChild(t)})()})();