window.addEventListener('DOMContentLoaded', () => {
    const buttons = [...document.querySelectorAll('button')];
    const list = document.querySelector('#shopping-list');

    buttons[0].addEventListener('click', () => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode('chleb'));
        list.appendChild(li);
    })

    buttons[1].addEventListener('click', () => {
        if (list.children.length > 0) {
            const last = list.children[list.children.length - 1];
            list.removeChild(last);
        }
    })

    buttons[2].addEventListener('click', () => {
        if (list.children && list.children[1]) {
            const second = list.children[1].cloneNode(true);
            list.appendChild(second);
        }
    })
});