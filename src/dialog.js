export const createDialog = () => {
   const dialog = document.createElement('dialog');
   dialog.setAttribute('id', 'dialog-box')
    const body = document.querySelector('#body');
    body.appendChild(dialog);

}