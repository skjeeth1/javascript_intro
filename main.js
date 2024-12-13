function CompChoice() {

    let choice = '';
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
    container.textContent = choice;
    
    return choice;
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


const buttons = document.querySelectorAll(".user button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        GamePlay(button.id, CompChoice());
    })
})

