// import { createItem } from "./create_item";

import { createItem } from "./create_item";

export const dialogBox = () => {
    
    const box = document.createElement('dialog');
    box.setAttribute('id', 'dialog-box');
    box.setAttribute("aria-modal", 'false')
    // const form = document.createElement('form');
    // const inputTitle = document.createElement("input");

    // const submit = document.createElement("button");
    // submit.setAttribute('type', 'submit');
    // submit.textContent = "Submit"
    // form.appendChild(submit)
box.close()


  // form.appendChild(inputTitle);
  // box.appendChild(form);


   const body = document.querySelector("#body");


   body.appendChild(box)

  //  document.querySelector("form").addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   createItem()
  // });

   



}