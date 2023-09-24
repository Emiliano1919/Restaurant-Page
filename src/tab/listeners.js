//If you import here the css it will fail.
import { contactPage } from './contact.js';
import { namePage } from './name.js';

const contact = document.getElementById('contact');
const menu = document.getElementById('menu');
const name = document.getElementById('TITLE');
contactPage();
namePage();
const infoMenu = document.querySelector('.infoMenu');
const infoContact = document.querySelector('.infoContact');
const infoName = document.querySelector('.infoName');
console.log(infoName.textContent);


function addListeners () {
    name.addEventListener('click', () => {
        infoContact.classList.add('hidden');
        infoMenu.classList.add('hidden');
        infoName.classList.remove('hidden');
      });
    menu.addEventListener('click', () => {
        infoContact.classList.add('hidden');
        infoName.classList.add('hidden');
        infoMenu.classList.remove('hidden');
      });
    contact.addEventListener('click', () => {
        infoMenu.classList.add('hidden');
        infoName.classList.add('hidden');
        infoContact.classList.remove('hidden');
      });
};

export {addListeners};
   