for (i=0;i<(256);i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    document.querySelector('main').appendChild(div);
    div.addEventListener('mouseleave', () => {
        div.classList.add('full');
    });
};

let button = document.querySelector('button');
button.addEventListener('click', () => {
    const elements = document.getElementsByClassName('square');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    };
    let squarenum = prompt('how many squares per row?');
    for (i=0;i<(squarenum*squarenum);i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        document.querySelector('main').appendChild(div);
        div.addEventListener('mouseleave', () => {
            div.classList.add('full');
        });
    };
})




