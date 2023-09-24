function namePage(){
    const main = document.querySelector('.main');

    const infoName = document.createElement('div');
    infoName.classList.add('infoName');
    infoName.classList.add('hidden');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent='SUNU';

    const information = document.createElement('div');
    information.classList.add('information');

    const text = document.createElement('h2');
    text.textContent='Es una fonda mexicana, donde le brindamos una expperiencia única, combinando sabores y colores';

    const address = document.createElement('h3');
    address.textContent='Texcoco de Mora, Aldama 136';


    main.appendChild(infoName);
    infoName.appendChild(title);
    infoName.appendChild(information);
    information.appendChild(text);
    infoName.appendChild(address);
};

export {namePage};