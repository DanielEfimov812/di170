// What you will learn

// Array and Object methods
// Array and Object destructuring
// Functions and arrow functions
// DOM tree


// What you will create

// Unbeatable AI Tic Tac Toe Game with Advanced Javascript

// In this project you will have to create an AI Tic Tac Toe Game like this (you can use your own css to style the project):


// tic tac toe



// Instructions

// This is a demo for you to see and play: Tic Tac Toe Game

// The Tic-tac toe game will be played against the computer.

// This should have two levels : easy and hard
// At first it should be easy for the user to win. The computer on its turn, will choose randomly where to do its turn.
// Then, for the hard level, the computer should will choose wisely where to do its turn, to block the player.
// Some Tips:

// I. In your HTML file:

// You can use tables or divs to create the boxes, make sure to add an id to each div.
// Create 2 buttons to choose between X and 0.
// Create another button at the bottom of the page, that will be displayed when the game ends. This button should call a function to restart the game.
// II. In your JS file:

// Make sure to use the advanced javascript methods that you were taught this week

// Create 2 variables to hold the selected symbols : X or 0, after the user chooses, the computer will get the opposite symbol.

// Create an array to keep track of whats in each box of the board.

// After each turn you must check the outcomes.
// Hint: You can use the reduce method to find all the boxes that contain either X or 0.
// If no one wins, the game should display “tie game”
// If someone won, the game should display the name of the winner.

// Stop the game if the game has been won.

// You can use the array provided below to check for winning combinations on the board.
// const winCombos = [
//            [0, 1, 2],
//            [3, 4, 5],
//            [6, 7, 8],
//            [0, 3, 6],
//            [1, 4, 7],
//            [2, 5, 8],
//            [0, 4, 8],
//            [6, 4, 2]
// ]






document.addEventListener("DOMContentLoaded", () => {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const main = document.getElementById("main");
    const setup = document.getElementById("setup");
    const statusText = document.getElementById("status");
    const restartBtn = document.getElementById("restart");

    const buttonX = document.getElementById("buttonX");
    const buttonO = document.getElementById("buttonO");
    const easyBtn = document.getElementById("easyBtn");
    const hardBtn = document.getElementById("hardBtn");

    let board;
    let human;
    let computer;
    let difficulty;
    let gameStarted;
    let gameOver;

    function initState() {
        board = Array(9).fill("");
        human = "";
        computer = "";
        difficulty = "easy";
        gameStarted = false;
        gameOver = false;
    }

    initState();

    easyBtn.addEventListener("click", () => {
        if (!gameStarted) {
            difficulty = "easy";
            statusText.textContent = "Difficulty: Easy";
        }
    });

    hardBtn.addEventListener("click", () => {
        if (!gameStarted) {
            difficulty = "hard";
            statusText.textContent = "Difficulty: Hard";
        }
    });

    buttonX.addEventListener("click", () => startGame("X"));
    buttonO.addEventListener("click", () => startGame("O"));
    restartBtn.addEventListener("click", resetGame);

    function startGame(symbol) {
        if (gameStarted) return;

        human = symbol;
        computer = human === "X" ? "O" : "X";
        gameStarted = true;

        setup.classList.add("hidden");
        statusText.textContent = `You: ${human} | Difficulty: ${difficulty}`;

        createBoard();

        if (computer === "X") {
            setTimeout(computerMove, 400);
        }
    }

    function createBoard() {
        main.innerHTML = "";

        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("div");
            cell.className = "field";
            cell.dataset.index = i;
            cell.addEventListener("click", handleHumanMove);
            main.appendChild(cell);
        }
    }

    function handleHumanMove(event) {
        if (gameOver) return;

        const index = Number(event.currentTarget.dataset.index);
        if (board[index] !== "") return;

        makeMove(index, human);

        if (!checkGameEnd(human)) {
            setTimeout(computerMove, 300);
        }
    }

    function computerMove() {
        if (gameOver) return;

        const index = difficulty === "hard" ? getBestMove() : getRandomMove();
        if (index === undefined) return;

        makeMove(index, computer);
        checkGameEnd(computer);
    }

    function makeMove(index, player) {
        board[index] = player;
        const cell = main.querySelector(`[data-index="${index}"]`);
        cell.textContent = player;
    }

    function getRandomMove() {
        const empty = [];

        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {
                empty.push(i);
            }
        }

        if (empty.length === 0) return undefined;

        const random = Math.floor(Math.random() * empty.length);
        return empty[random];
    }

    function getBestMove() {
        let move = findWinningMove(computer);
        if (move !== null) return move;

        move = findWinningMove(human);
        if (move !== null) return move;

        if (board[4] === "") return 4;

        return getRandomMove();
    }

    function findWinningMove(player) {
        for (const combo of winCombos) {
            const [a, b, c] = combo;
            const values = [board[a], board[b], board[c]];

            const countPlayer = values.filter(v => v === player).length;
            const countEmpty = values.filter(v => v === "").length;

            if (countPlayer === 2 && countEmpty === 1) {
                if (board[a] === "") return a;
                if (board[b] === "") return b;
                if (board[c] === "") return c;
            }
        }

        return null;
    }

    function checkWinner(player) {
        return winCombos.some(combo =>
            combo.every(index => board[index] === player)
        );
    }

    function checkGameEnd(player) {
        if (checkWinner(player)) {
            statusText.textContent = player === human ? "You Win!" : "Computer Wins!";
            finishGame();
            return true;
        }

        if (board.every(cell => cell !== "")) {
            statusText.textContent = "Tie Game!";
            finishGame();
            return true;
        }

        return false;
    }

    function finishGame() {
        gameOver = true;
        restartBtn.classList.remove("hidden");
    }

    function resetGame() {
        initState();
        main.innerHTML = "";
        setup.classList.remove("hidden");
        restartBtn.classList.add("hidden");
        statusText.textContent = "Choose your symbol and difficulty";
    }
});