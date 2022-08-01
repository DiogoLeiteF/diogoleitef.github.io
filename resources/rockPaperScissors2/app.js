const rockInputDisplay = document.getElementById("rock")
const paperInputDisplay = document.getElementById("paper")
const scissorInputDisplay = document.getElementById("scissor")
const possibleChoice = document.querySelectorAll(".choice")
const computerChoiceDisplay = document.getElementById("computer-choice")
const resultDisplay = document.getElementById("result")
const userScoreDisplay = document.getElementById("userScore")
const computerScoreDisplay = document.getElementById("computerScore")
const resetButton = document.getElementById("reset")

let userChoice
let computerChoice
let result
let userScore = 0
let computerScore = 0

possibleChoice.forEach(choice => choice.addEventListener('click', (e)=> {
    userChoice = e.target.id;
    get_computer_choise ();
    game();
    choice.onmousedown = function(){ 
        choice.style.width = "90%"
    }
    choice.onmouseup = function(){ 
        choice.style.width = ""
    }  

    // console.log(userChoice);
    // console.log(computerChoice);
    // console.log(result);

}))



function get_computer_choise (){
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber){
        case 0:
            computerChoice = 'rock';
            break
        case 1:
            computerChoice = 'paper';
            break
        case 2:
            computerChoice = 'scissor';
            break
    }
    // computerChoiceDisplay.innerHTML = "<span>"+ computerChoice +"</span>"
    computerChoiceDisplay.innerHTML = "<img src='./img/"+computerChoice+".png'>"
}

function game (){
    if (userChoice == computerChoice){
        result = "It's a tie"
    } else if (userChoice == 'rock' && computerChoice == 'scissor'){
        result = "You Win";
        userScore += 1;
    } else if (userChoice == 'paper' && computerChoice == 'rock'){
        result = "You Win"; 
        userScore += 1;
    } else if (userChoice == 'scissor' && computerChoice == 'paper'){
        result = "You Win"
        userScore += 1;
    } else {
        result = "Computer Win"
        computerScore += 1;
    } 
    resultDisplay.innerHTML = "<span>" + result + "</span>"
    userScoreDisplay.innerHTML = "<span>" + userScore + "</span>"
    computerScoreDisplay.innerHTML = "<span>" + computerScore + "</span>"
}

resetButton.onclick = function(){
    userScore = 0
    computerScore = 0
    computerChoiceDisplay.innerHTML = "<img src='./img/pc.png'>"
    userScoreDisplay.innerHTML = "<span>" + userScore + "</span>"
    computerScoreDisplay.innerHTML = "<span>" + computerScore + "</span>"
    resultDisplay.innerHTML = ""
}