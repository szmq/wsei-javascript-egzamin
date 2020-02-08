window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const container = document.querySelector('#container');

    [...buttons].forEach((button) => {
        button.onclick = function() {
            container.innerHTML = this.getAttribute('data-text');
        };
    })
});