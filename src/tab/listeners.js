//If you import here the css it will fail.
import { contactPage } from './contact.js';


const contact = document.getElementById('contact');
const menu = document.getElementById('menu');
const infoMenu = document.querySelector('.infoMenu');
contactPage();
const infoContact = document.querySelector('.infoContact');
  
    
  
function addListeners () {
    menu.addEventListener('click', () => {
        infoContact.classList.add('hidden');
        infoMenu.classList.remove('hidden');
      });
    contact.addEventListener('click', () => {
        infoMenu.classList.add('hidden');
        infoContact.classList.remove('hidden');
      });
};

export {addListeners};
   