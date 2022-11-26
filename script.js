let button = document.querySelector('.btn');
let board = document.querySelector('.board');

button.addEventListener('click', () => {
    cleanBoard();
    createBoard(prompt('how many squares per row?'));
});

function createBoard(squarenum) {
    for (i=0;i<(squarenum*squarenum);i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        document.querySelector('.board').appendChild(div);
        div.addEventListener('mouseleave', () => {
            div.classList.add('full');
        });
    };
    board.style.gridTemplateColumns = `repeat(${squarenum}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${squarenum}, 1fr)`;
}


function cleanBoard() {
    const elements = document.getElementsByClassName('square');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    };
};

createBoard(16);