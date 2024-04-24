//Variables used for the game
const buttonSelection = document.querySelectorAll("button");
const firstScoreDisplay = document.querySelector(".first-score");
const secondScoreDisplay = document.querySelector(".second-score");

const firstPlayerDisplay = document.querySelector(".first-player-selection");
const secondPlayerDisplay = document.querySelector(".second-player-selection");
const resultDisplay = document.querySelector(".result");
let secondPlayerSelection;
let firstPlayerSelection;

let firstPlayerScore = 0;
let secondPlayerScore = 0;

// First player selection
function firstPlayerPlay (){
    const firstPlayerNumber = Math.floor(Math.random() * 3);

    switch(firstPlayerNumber){
        case 0:
            firstPlayerSelection = "🪨";
            break;
        case 1:
            firstPlayerSelection = "📄";
            break;
        case 2:
            firstPlayerSelection = "✂️";
            break;
    }
}

// Second player selection

buttonSelection.forEach(button => button.addEventListener("click" , () => {

    secondPlayerSelection = button.textContent;
    console.log(secondPlayerSelection)
    firstPlayerPlay ();
    firstPlayerDisplay.textContent = firstPlayerSelection;
    secondPlayerDisplay.textContent = secondPlayerSelection;
    resultDisplay.textContent = checkResults();
}));
        
//update results score
function updateResult(result){

    resultDisplay.classList.remove("lost-styling");
    resultDisplay.classList.remove("draw-styling");
    resultDisplay.classList.remove("win-styling");

    if (result === "WIN"){
        secondPlayerScore++;
        resultDisplay.classList.add("win-styling");
        new Audio("./sounds/Coin.mp3").play();
    } else if (result === "LOSE"){
        firstPlayerScore++;
        resultDisplay.classList.add("lost-styling");
        new Audio("./sounds/Death.mp3").play();
    } else if (result === "DRAW"){
        resultDisplay.classList.add("draw-styling");
    }
}

//Result evaluate
function checkResults(){

    let result;
    
    if (firstPlayerSelection == secondPlayerSelection){
        result = "DRAW";
    } else if (firstPlayerSelection == "🪨" && secondPlayerSelection == "✂️"){
        result = "LOSE";
    } else if (firstPlayerSelection == "🪨" && secondPlayerSelection == "📄"){
        result = "WIN";
    } else if (firstPlayerSelection == "📄" && secondPlayerSelection == "🪨"){
        result = "LOSE";
    } else if (firstPlayerSelection == "📄" && secondPlayerSelection == "✂️"){
        result = "WIN";
    } else if (firstPlayerSelection == "✂️" && secondPlayerSelection == "🪨"){
        result = "WIN";
    } else if (firstPlayerSelection == "✂️" && secondPlayerSelection == "📄"){
        result = "LOSE";
    }

    updateResult(result);

    secondScoreDisplay.textContent = ("USER: " + secondPlayerScore);
    firstScoreDisplay.innerHTML = ("BOT: " + firstPlayerScore);

    return result;
}

