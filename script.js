for (i=0;i<256;i++) {
let div = document.createElement('div');
div.classList.add('square');
document.querySelector('main').appendChild(div);
div.addEventListener('mouseleave', () => {
    div.classList.add('full');
});
};

