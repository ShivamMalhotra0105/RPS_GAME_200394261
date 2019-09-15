//Javascript Document

let computerWins = 0;
let userWins = 0;
const WINNING_SCORE = 11; // length of the game

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let results = document.getElementById('display');
let score = document.getElementById('score');




// Randomly returns either ROCK, PAPER, or SCISSORS as the computer's move

function compPlay() {
    const MOVES = ["ROCK", "PAPER", "SCISSORS"];
    return (MOVES[Math.floor(Math.random() * 3)]);
}

//ADDIND EVENTLISTENERS FOR PAPER,ROCK AND SCISSORS
paper.addEventListener('click', function () {
    let compMove = compPlay();
    let userChoice = "PAPER";
    gameOver(userChoice, compMove);
})

rock.addEventListener('click', function () {
    let compMove = compPlay();
    let userChoice = "ROCK";
    gameOver(userChoice, compMove);
})

scissors.addEventListener('click', function () {
    let compMove = compPlay();
    let userChoice = "PAPER";
    gameOver(userChoice, compMove);
})



// Helper function to determine the outcome of a round. Returns 0 for a loss, 1 for a tie, 2 for a win.

function getOutcome(userChoice, compMove) {
    switch (userChoice) {

        case "SCISSORS":
            if (compMove == "PAPER") {
                return 2;
            }
            else if (compMove == "SCISSORS") {
                return 1;
            }
            else {
                return 0;
            }

        case "ROCK":
            if (compMove == "SCISSORS") {
                return 2;
            }
            else if (compMove == "ROCK") {
                return 1;
            }
            else {
                return 0;
            }

        case "PAPER":
            if (compMove == "SCISSORS") {
                return 0;
            }
            else if (compMove == "PAPER") {
                return 1;
            }
            else {
                return 2;
            }

    }

}

// Translates outcome into victory (or otherwise) message

function whoWin(outcome, userChoice, compMove) {
    if (outcome == 0) {
        computerWins++;
        document.getElementById('display').style.color = '#bc3425';
        results.textContent = `Hey You lose! ${compMove.charAt(0).toUpperCase() + compMove.slice(1).toLowerCase()}
        beats ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase()}`;
    }

    else if (outcome == 1) {
        document.getElementById('display').style.color = '#e0af45';
        results.textContent = `It's a draw!`;
    }

    else if (outcome == 2) {
        userWins++;
        document.getElementById('display').style.color = '#4cc468';
        results.textContent = `Won! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase()}
        beats ${compMove.charAt(0).toUpperCase() + compMove.slice(1).toLowerCase()}`;
    }
}

// Outputs the score

function gameScore(userWins, computerWins) {
    document.getElementById('score').style.color = 'black';
    score.textContent = `You:  ${userWins} , Computer: ${computerWins}`;
}

// Declares winner if one player has enough points, and resets the score.

function victory(WINNING_SCORE, userWins, computerWins) {
    if (userWins == WINNING_SCORE) {
        results.textContent = `CONGRATULATIONS, YOU WON THE GAME!`;
        score.textContent = `Final score -  You:  ${userWins} , Computer: ${computerWins}`;
        userWins = 0;
        computerWins = 0;
    }
    else if (computerWins == WINNING_SCORE) {
        results.textContent = `SORRY, YOU LOSE !`;
        score.textContent = `Final score -  You:  ${userWins} , Computer: ${computerWins}`;
        userWins = 0;
        computerWins = 0;
    }

}

// Used to control flow of a game - get the outcome, display the winner, then display the score.
// If one player has enough points at the end of a round, the game ends and they are declared overall winner

function gameOver(userChoice, compMove) {
    outcome = getOutcome(userChoice, compMove);
    whoWin(outcome, userChoice, compMove);
    gameScore(userWins, computerWins);
    if (userWins == WINNING_SCORE || computerWins == WINNING_SCORE) {
        victory(WINNING_SCORE, userWins, computerWins);
        results.textContent += " Click The Button To Play Again "
    }
}














