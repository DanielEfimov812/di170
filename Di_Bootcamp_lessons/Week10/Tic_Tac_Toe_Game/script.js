const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

const main = document.getElementById("main");
const buttons = document.getElementById("buttons")
const xBatton = document.getElementById("buttonX");
const oButton = document.getElementById("buttonO");

const sells = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const buttonX = document.getElementsByClassName("x-button")
const buttonO = document.getElementsByClassName("o-button")

class Blocks {
    constructor(player) {
        sells.forEach((index) => {
            let block = document.createElement("div")
            block.classList.add("field");
            block.classList.add(`field${index + 1}`);
            main.appendChild(block);
            buttons.style.display = "none";
        });
    }
}

xBatton.addEventListener("click", () => {
    new Blocks("x")
});

oButton.addEventListener("click", () => {
    new Blocks("o")
});
