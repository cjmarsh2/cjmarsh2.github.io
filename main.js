// /*----- constants -----*/ 

const players = {
    '1': {
        color: '#ff33cd',
    },
    '-1': {
        color: '#00ffff',
    }
};

const winningCombos = [
    [0, 6, 12, 18], [6, 12, 18, 24], [12, 18, 24, 30],
    [18, 24, 30, 36], [1, 7, 13, 19], [7, 13, 19, 25],
    [13, 19, 25, 31], [19, 25, 31, 37], [2, 8, 14, 20],
    [8, 14, 20, 26], [14, 20, 26, 32], [20, 26, 32, 38],
    [3, 9, 15, 21], [9, 15, 21, 27], [15, 21, 27, 33],
    [21, 27, 33, 39], [4, 10, 16, 22], [10, 16, 22, 28],
    [16, 22, 28, 34], [22, 28, 34, 40], [5, 11, 17, 23],
    [11, 17, 23, 29], [17, 23, 29, 35], [23, 29, 35, 41],
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5],
    [6, 7, 8, 9], [7, 8, 9, 10], [8, 9, 10, 11],
    [12, 13, 14, 15], [13, 14, 15, 16], [14, 15, 16, 17],
    [18, 19, 20, 21], [19, 20, 21, 22], [20, 21, 22, 23],
    [24, 25, 26, 27], [25, 26, 27, 28], [26, 27, 28, 29],
    [30, 31, 32, 33], [31, 32, 33, 34], [32, 33, 34, 35],
    [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
    [0, 7, 14, 21], [6, 13, 20, 27], [12, 19, 26, 33],
    [18, 25, 32, 39], [1, 8, 15, 22], [7, 14, 21, 28],
    [13, 20, 27, 34], [19, 26, 33, 40], [2, 9, 16, 23],
    [8, 15, 22, 29], [14, 21, 28, 35], [20, 27, 34, 41],
    [3, 8, 13, 18], [4, 9, 14, 19], [5, 10, 15, 20],
    [11, 16, 21, 26], [17, 22, 27, 32], [23, 28, 33, 38],
    [9, 14, 19, 24], [10, 15, 20, 25], [15, 20, 25, 30],
    [16, 21, 26, 31], [21, 26, 31, 36], [22, 27, 32, 37]

]



// /*----- app's state (variables) -----*/ 





let turn, winner

// /*----- cached element references -----*/ 




var p1Moves = [];
var p2Moves = [];

const replayBtn = document.getElementById('replay');
var msgEl = document.querySelector('h4');

var cells = document.querySelectorAll('td');

// /*----- event listeners -----*/ 






document.querySelector('table').addEventListener('click', handleMove);
replayBtn.addEventListener('click', init);
// /*----- functions -----*/

init();


function handleMove(evt) {
    let move = evt.target.closest('tr').lastElementChild;
    while (move) {
        let i = turn;
        if (move.style.backgroundColor === '') {
            move.style.backgroundColor = players[i].color;
            if (i === 1) {
                var numMove = parseInt((move.id));
                p1Moves.push(numMove);
            } else if (i === -1) {
                var numMove = parseInt((move.id));
                p2Moves.push(numMove);
            }
            turn *= -1;
            winner = getWinner();
            return;
        } else if (move.style.backgroundColor !== '') {
            move = move.previousElementSibling;
        }
    }
}


function getWinner() {
    for (var i = 0; i < winningCombos.length; i++) {
        if (p1Moves.includes(winningCombos[i][0]) && p1Moves.includes(winningCombos[i][1]) && p1Moves.includes(winningCombos[i][2]) && p1Moves.includes(winningCombos[i][3])) {
            msgEl.textContent = `Player One Wins!`;
        }
        if (p2Moves.includes(winningCombos[i][0]) && p2Moves.includes(winningCombos[i][1]) && p2Moves.includes(winningCombos[i][2]) && p2Moves.includes(winningCombos[i][3])) {
            msgEl.textContent = `Player Two Wins!`;
        }

    }

}


function init() {
    cells = document.querySelectorAll('td');
    for (var i = 0; i < 42; i++) {
        cells[i].style.backgroundColor = ''
    }
    msgEl.textContent = '';
    p1Moves = [];
    p2Moves = [];
    turn = 1;
    winner = null;
}

