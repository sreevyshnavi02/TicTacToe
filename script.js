console.log("Welcome to TicTacToe!")

let music = new Audio("bubble.mp3")
// let turn = new Audio("bubble-sound-43207.mp3")
let gameover = new Audio("success.mp3")

let turn = "X";
let done = false;

//func to change the turn 
const changeTurn = () =>{
     return turn === "X" ? "0" : "X";
}

//check win

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            done = true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '190px';
        }
    })
}

//Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            music.play();
            checkWin();
            if(!done){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//reset - event listener

reset.addEventListener('click', () => {
    let b = document.querySelectorAll('.boxtext');
    Array.from(b).forEach(element =>{
        element.innerText = ''
    });
    turn = "X";
    done = false;
    
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
    if(!done){
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
})