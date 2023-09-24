function contactPage(){
    console.log('It is working');
    const main = document.querySelector('.main');
    const infoContact = document.createElement('div');
    infoContact.classList.add('infoContact');
    infoContact.classList.add('hidden');
    const title = document.createElement('title');
    title.classList.add('title');
    title.textContent='Contacto';
    const information = document.createElement('div');
    information.classList.add('information');

    main.appendChild(infoContact);
    infoContact.appendChild(title);
    infoContact.appendChild(information);
};

export {contactPage};