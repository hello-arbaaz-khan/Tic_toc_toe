let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#resetbtn');
let msgcontainer = document.querySelector('.msgcontainer');
let newgame = document.querySelector('#newgame');
let msg = document.querySelector('#msg');

let turno = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let resetgame = () => {
    turno = true;
    enableboxes();
    msgcontainer.classList.add('hide');
};
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turno) {
            box.innerText = 'O';
            turno = false;
        } else {
            box.innerText = 'X';
            turno = true;
        }
        box.disabled = true;
        cheekwiner();
    });
});
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
};
const showwiner = (winer) => {
    msg.innerText = `Congratulation Winer is ${winer}`;
    msgcontainer.classList.remove('hide');
    disableboxes();
};
const cheekwiner = () => {
    for (pattern of winpatterns) {
        let pos1valu = boxes[pattern[0]].innerText;
        let pos2valu = boxes[pattern[1]].innerText;
        let pos3valu = boxes[pattern[2]].innerText;

        if (pos1valu != '' && pos2valu != '' && pos3valu != '') {
            if (pos1valu === pos2valu && pos2valu === pos3valu) {
                console.log('Winer', pos1valu);
                showwiner(pos1valu);
            }
        }
    }
};
newgame.addEventListener('click', resetgame);
resetbtn.addEventListener('click', resetgame);
