let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const actionMessage_p = document.getElementById("action-message")

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber]
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice)
    }
}

function convertToWord(choice) {
    if (choice === "r") return "ROCK";
    if (choice === "p") return "PAPER";
    else return "SCISSORS"
}

function win(userChoice, computerChoice) {
    const glow = document.getElementById(userChoice)
    const smallLetterUser = "USER".fontsize(3).sub();
    const smallLetterComp = "COMP".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord (userChoice)}${smallLetterUser} beats ${convertToWord (computerChoice)}${smallLetterComp}. YOU WIN`;
    glow.classList.add('green-glow');
    setTimeout(() => glow.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const glow = document.getElementById(userChoice);
    const smallLetterUser = "USER".fontsize(3).sub();
    const smallLetterComp = "COMP".fontsize(3).sub();
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord (computerChoice)}${smallLetterComp} beats ${convertToWord (userChoice)}${smallLetterUser}. YOU LOSE`;
    glow.classList.add('red-glow');
    setTimeout(() => glow.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const glow = document.getElementById(userChoice);
    const smallLetterUser = "USER".fontsize(3).sub();
    const smallLetterComp = "COMP".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord (userChoice)}${smallLetterUser} equals ${convertToWord (computerChoice)}${smallLetterComp}.IT'S A DRAW`;
    glow.classList.add('grey-glow');
    setTimeout(() => glow.classList.remove('grey-glow'), 300);

}

function main() {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}
main();