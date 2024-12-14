playerScore = 0;
compScore = 0;

function CompChoice() {

    let choice = '';
    let emojis = {"rock": "🪨", "paper": "📰", "scissors": "✂️"};
    let num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0: {
            choice = "rock";
            
            break;
        }
        case 1: {
            choice = "paper";
            break;
        }
        default: choice = "scissors";
    }

    const container = document.querySelector("#compchoice");
    container.textContent = emojis[choice];
    return choice;
}

function GamePlay(human, comp) {
    const container = document.querySelector("#score");
    let text = "";
    
    if (human === "rock") {

        if (comp === "scissors") text = "You won!. Computer chose " + comp;
        else if (comp === "paper") text = ("You lost!. Computer chose " + comp);
        else text = ("You tied!");

    } else if (human === "scissors") {

        if (comp === "paper") text = ("You won!. Computer chose " + comp);
        else if (comp === "rock") text = ("You lost!. Computer chose " + comp);
        else text = ("You tied!");

    } else if (human === "paper") {

        if (comp === "rock") text = ("You won!. Computer chose " + comp);
        else if (comp === "scissors") text = ("You lost!. Computer chose " + comp);
        else text("You tied!");

    } else console.log("Invalid choice");

    container.textContent = text;
}


function checkWin() {
    if (playerScore == 5) {

    }
}

const buttons = document.querySelectorAll(".user button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        GamePlay(button.id, CompChoice());
    })
})


