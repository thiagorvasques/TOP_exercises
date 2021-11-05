//factory function to create players
const players = (name, mark) => {
    const isX = (mark) => {
        if (mark === 'x') {
            return true;
        } else {
            return false;
        }
    }
    const makeMark = () => mark;
    const sayName = () => `${name}'s turn`;
    const winner = () => `${name} wins`;
    return {
        makeMark,
        sayName,
        winner,
        isX
    }
}


// modal control and create players
const displayController = (() => {
    const first = document.querySelector('.player1');
    const second = document.querySelector('.player2');
    const bot = document.querySelector('.bot');
    const xoBtn = document.querySelector('.xo');
    const btnForm = document.querySelector('.btnForm');
    const modal = document.querySelector('.modal');
    const displayTurn = document.querySelector('.displayTurn');
    const choose = document.querySelector('.choose');
    const divAlert = document.createElement('div');
    divAlert.classList.add('alert');
    let h1 = document.createElement('h1');
    let mark = '';
    let turn = true;
    let player1;
    let player2;
    //create player one
    function setPlayer1(e) {
        e.preventDefault();
        if (e.target.type === 'button') {
            mark = e.target.className
        }
        first.value === '' ? player1 = players(`${mark}`, mark,) : player1 = players(first.value, mark);
        h1.innerHTML = player1.sayName();
        displayTurn.appendChild(h1);
        return player1

    }
    xoBtn.addEventListener('click', setPlayer1)

    //create player 2 or bot
    function setPlayer2(e) {
        //console.log(mark)
        e.preventDefault();
        if (mark === '') {
            divAlert.innerHTML = '<h2>Insert name or choose a mark</h2>'
            choose.insertAdjacentElement('afterend', divAlert)
            console.log(mark)
        } else {
            modal.style.display = "none";//close modal
        }
        if (e.target.className === 'bot') {
            if (player1.isX(mark)) {
                player2 = players('bot', 'o')
                console.log(player2.sayName())
            } else {
                player2 = players('bot', 'x')
                console.log(player2.sayName())
            }

        }
        if (e.target.className === 'btnForm') {
            if (player1.isX(mark) && second.value === '') {
                player2 = players('o', 'o')
                //modal.style.display = "none";
            } else if (player1.isX(mark) && second.value != '') {
                console.log(mark, second.value)
                player2 = players(second.value, 'o');
            } else if (!player1.isX(mark) && second.value === '') {
                player2 = players('x', 'x');
            } else if (!player1.isX(mark) && second.value != '') {
                player2 = players(second.value, 'x')
            }

        }
        return player2
    }
    btnForm.addEventListener('click', setPlayer2);
    bot.addEventListener('click', setPlayer2);

    return {
        h1,
        setPlayer1,
        setPlayer2,

    }

})();


//control game board, insert marks and call winner
const gameBoard = (() => {
    const divAlert = document.createElement('div');
    divAlert.classList.add('alert');
    const boxes = document.querySelectorAll('.box');
    const stopGameboard = document.querySelector('#gameboard');
    const reset = document.querySelector('.reset');
    const restart = document.querySelector('.restart');
    let h1 = displayController.h1
    block = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    let turn = true;
    let arr = ['', '', '', '', '', '', '', '', ''];
    let playerPosition = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let winner = null;
    let count = 1;
    //populate gameboard with marks
    boxes.forEach(box => {
        box.addEventListener('click', (e) => {
            let one = displayController.setPlayer1(e);
            let two = displayController.setPlayer2(e);
            console.log(count)
            if (e.target.innerHTML === '') {
                h1.innerHTML = two.sayName()
                if (turn) {
                    e.target.innerHTML = one.makeMark();
                    console.log(e.target.dataset.index)
                    arr[e.target.dataset.index] = one.makeMark();
                    playerPosition = arrayRemove(playerPosition, e.target.dataset.index)
                    count += 1
                    turn = false
                    //call bot function to make a move
                    if (!turn && two.sayName().includes('bot')) {
                        setTimeout(function () { botTurn(e, one, two, arr); }, 500);

                    }
                    // populate with second player move
                } else {
                    e.target.innerHTML = two.makeMark();
                    h1.innerHTML = one.sayName();
                    arr[e.target.dataset.index] = two.makeMark();
                    console.log(arr)
                    count += 1;
                    turn = true

                }
            }

            declareWinner(winner, one, two)

        })
    });
    //declare winner
    function declareWinner(winner, one, two) {
        winner = handleResult(arr)
        if (one.makeMark() === winner) {
            h1.innerHTML = one.winner();
            stopGameboard.classList.add('stop');
        } else if (two.makeMark() === winner) {
            h1.innerHTML = two.winner()
            stopGameboard.classList.add('stop');
        } else if (count === 10 && winner === null) {
            h1.innerHTML = "It's a tie";
            stopGameboard.classList.add('stop');
        }
        return winner;
    }


    // react tic tac toe tutorial to find winner
    function handleResult(arr) {
        console.log(arr)
        for (let i = 0; i < block.length; i++) {
            const [a, b, c] = block[i];
            //console.log(a)
            //console.log(b)
            //console.log(c)
            if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
                console.log(arr[a])
                return arr[a];

            }
        }

        return null;
    }


    //reset button function
    reset.addEventListener('click', () => {
        boxes.forEach((item) => {
            item.innerHTML = '';
            arr = ['', '', '', '', '', '', '', '', ''];
            playerPosition = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            stopGameboard.classList.remove('stop')
            h1.innerHTML = '';
            turn = true;
            count = 1;
        });
    });


    //restart button function
    restart.addEventListener('click', () => {
        location.reload();
    });


    // random choice bot turn
    const square = document.querySelectorAll('[data-index]')
    function botTurn(e, one, two, arr) {
        if (h1.innerHTML.includes('wins') || h1.innerHTML.includes('tie')) {
            return
        } else {
            h1.innerHTML = one.sayName() // is working the comments
            for (let i = playerPosition.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = playerPosition[i];
                playerPosition[i] = playerPosition[j];
                playerPosition[j] = temp;
            }
            square[playerPosition[0]].innerHTML = two.makeMark()
            arr[playerPosition[0]] = two.makeMark();
            playerPosition = arrayRemove(playerPosition, playerPosition[0]);
            count += 1;
            turn = true;
            declareWinner(winner, one, two)
        }
    }


    //remove item from array
    function arrayRemove(arr, value) {
        return arr.filter(function (ele) {
            return ele != value;
        });
    }


})();

