//If you import here the css it will fail.

function toggle(e) {
    console.log(e.classList.contains('hidden'))
    if (e.classList.contains('hidden')) {
      e.classList.remove('hidden');
    } else {
      e.classList.add('hidden');
    }
  };
  
    const contact = document.getElementById('contact');
    const menu = document.getElementById('menu');
    const infoContainer = document.querySelector('.infoMenu');
  
  
    
  
function addListeners () {
    menu.addEventListener('click', () => {
        toggle(infoContainer);
      });
    contact.addEventListener('click', () => {
        toggle(infoContainer);
      });
};

export {addListeners};
   