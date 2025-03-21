
function randGen() {

    return Math.floor(Math.random() * 6) + 1;

}

function diceImage(rand) {

    // if (rand === 1) {
    //     return "./images/dice1.png";
    // } else if (rand === 2) {
    //     return "./images/dice2.png";
    // } else if (rand === 3) {
    //     return "./images/dice3.png";
    // } else if (rand === 4) {
    //     return "./images/dice4.png";
    // } else if (rand === 5) {
    //     return "./images/dice5.png";
    // } else {
    //     return "./images/dice6.png";
    // }

    return "./images/dice" + rand + ".png";

}

function checkWinner(num1, num2) {

    if (num1 === num2) {
        return "Draw!";
    } else if (num1 > num2) {
        return "Player 1 Wins!";
    } else {
        return "Player 2 Wins!";
    }

}

function main() {

    var randomNumber1 = randGen();
    var randomNumber2 = randGen();

    document.querySelector(".img1").setAttribute("src", diceImage(randomNumber1));
    document.querySelector(".img2").setAttribute("src", diceImage(randomNumber2));

    document.querySelector("h1").textContent = checkWinner(randomNumber1, randomNumber2);

}

main();