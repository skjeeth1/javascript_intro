function CompChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) return "rock";
    else if (num === 1) return "paper";
    else return "scissors";
}

function HumanChoice() {
    return prompt("Enter choice (rock, paper or scissors): ");
}

function GamePlay(human, comp) {
    if (human === "rock") {

        if (comp === "scissors") console.log("You won!. Computer chose " + comp);
        else if (comp === "paper") console.log("You lost!. Computer chose " + comp);
        else console.log("You tied!");

    } else if (human === "scissors") {

        if (comp === "paper") console.log("You won!. Computer chose " + comp);
        else if (comp === "rock") console.log("You lost!. Computer chose " + comp);
        else console.log("You tied!");

    } else if (human === "paper") {

        if (comp === "rock") console.log("You won!. Computer chose " + comp);
        else if (comp === "scissors") console.log("You lost!. Computer chose " + comp);
        else console.log("You tied!");

    } else console.log("Invalid choice");
}


GamePlay(HumanChoice(), CompChoice());