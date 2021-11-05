// get number for computer player (0=rock,1=paper,2=scissors)
function computerPlay(){
     let turn = Math.floor(Math.random()*3);
     console.log(turn);
     return turn;        
};

//get user input and change it to number
function playerPlay(){
    let playeroption = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    if(playeroption === "rock"){
        playeroption = 0;
    }
    else if(playeroption === "paper"){
        playeroption= 1;
    }
    else if(playeroption === "scissors"){
        playeroption = 2;
    }
    else {
        console.log("error");
    }
    console.log(playeroption);
    return playeroption;
};

// one round of the game, comparing all results.
function playRound(computerSelection, playerSelection){
    let result = "";
    if(computerSelection === playerSelection){
        result = "It's a tie!"
    }else if(computerSelection === 0 && playerSelection === 1){
        result = "You win, paper beats rock"
    }else if(computerSelection === 0 && playerSelection === 2){
        result = "You lose, rock beats scissors";
    }else if(computerSelection === 1 && playerSelection === 0){
        result = "You lose, paper beats rock"
    }else if(computerSelection === 1 && playerSelection === 2){
        result = "You win, scissors beats paper"
    }else if(computerSelection === 2 && playerSelection === 0){
        result = "You win, rock beats scissors"
    }else if(computerSelection === 2 && playerSelection === 1){
        result = "You lose, scissors beats paper"
    };
    console.log(result);
    return result;
};

// play 5 times the game and declare a if player won.
/*function game(){
    let playerVictory = 0;
    let computerVictory = 0;
    for(let i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();
        result = playRound(computerSelection, playerSelection);
        if(result.includes("win")){
            playerVictory += 1;
        }
        else if(result.includes("lose")){
            computerVictory += 1;
        }
    }
        //console.log(playerVictory, computerVictory);
    if (playerVictory > computerVictory){
        console.log("You win");
    }
    else if(playerVictory < computerVictory){
        console.log("You lose");
    }
    else {
        console.log("It's a tie");
    }

};*/

//call the game function
//game()
