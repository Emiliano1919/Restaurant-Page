function contactPage(){
    console.log('It is working');
    const main = document.querySelector('.main');
    const infoContact = document.createElement('div');
    infoContact.classList.add('infoContact');
    infoContact.classList.add('hidden');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent='Contacto';
    const information = document.createElement('div');
    information.classList.add('information');
    const name = document.createElement('h2');
    name.textContent='Chef Martin';
    const list = document.createElement('ul');
    const telephone = document.createElement('li');
    telephone.textContent='+52 XXXX XXXX';
    const email = document.createElement('li');
    email.textContent ='randomEmail@gmail.com';


    main.appendChild(infoContact);
    infoContact.appendChild(title);
    infoContact.appendChild(information);
    information.appendChild(name);
    information.appendChild(list);
    list.appendChild(telephone);
    list.appendChild(email);
};

export {contactPage};