//Select all buttons
const buttons = document.querySelectorAll('button');
let result = "";
//iterate over each button adding event listener
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playeroption = (Number(button.value))
        console.log(playeroption)
        //call computer hand function
        computeroption = computerPlay();
        //check result of hands
        if(computeroption === playeroption){
            result = "It's a tie!";
            winner = "tie"
        }else if(computeroption === 0 && playeroption === 1){
            result = "You win, paper beats rock"
            winner = "player"
        }else if(computeroption === 0 && playeroption === 2){
            result = "You lose, rock beats scissors";
            winner = "computer"
        }else if(computeroption === 1 && playeroption === 0){
            result = "You lose, paper beats rock"
            winner = "computer"
        }else if(computeroption === 1 && playeroption === 2){
            result = "You win, scissors beats paper"
            winner = "player"
        }else if(computeroption === 2 && playeroption === 0){
            result = "You win, rock beats scissors"
            winner = "player"
        }else if(computeroption === 2 && playeroption  === 1){
            result = "You lose, scissors beats paper"
            winner = "computer"
        };
        //call images for player hand
        playerHand(playeroption)
        //call text from results
        text();
        //call counting results
        countResults(winner);
        //console.log(result)
        //console.log(winner)
        });
    });
 // get random computer hand    
function computerPlay(){
    let computeroption = Math.floor(Math.random()*3);
    console.log(computeroption);
    computerHand(computeroption); 
    return computeroption;
};

const computerImage = document.querySelector('#computerImage');
//console.log(computerImage);
//apply images for computer hand accordingly
function computerHand(computeroption){

     if(computeroption === 0){
        computerImage.src = "./images/rock.svg";
     }
     else if(computeroption === 1){
       
        computerImage.src = "./images/paper.svg";
     }
     else if(computeroption === 2){
        computerImage.src = "./images/scissors.svg"; 
    }
};
//apply images for player hand accordingly
const playerImage = document.querySelector('#playerImage');
console.log(playerImage);
function playerHand(playeroption){

     if(playeroption=== 0){
        playerImage.src = "./images/rock.svg";
     }
     else if(playeroption === 1){
       
        playerImage.src = "./images/paper.svg";
     }
     else if(playeroption === 2){
        playerImage.src = "./images/scissors.svg";   
     }
};
//insert text of result on HTML;
function text(){
    let newText = document.querySelector('#winnerText');
    newText.innerHTML = result;
}

//count rounds and limit to 5
let playerVictory = 0;
let computerVictory = 0;
let count = 0;
function countResults(winner){
    
    if(winner === "player"){
        playerVictory += 1;
        count += 1
    }      
    else if(winner === "computer"){
        computerVictory += 1;
        count += 1;
    }else if(winner === "tie"){
        count += 1;
    }
    let playerScore = document.querySelector('.playerScore');        
    playerScore.innerHTML = playerVictory;

    let computerScore = document.querySelector('.computerScore');
    computerScore.innerHTML = computerVictory;

    let counter = document.querySelector('.count');
    counter.innerHTML = count;
    //console.log(playerVictory, computerVictory);
    let finalResult = ""
    
    if(count ===  5){
        
        if (playerVictory > computerVictory){
            finalResult = "You win the game ";
        }
        else if(playerVictory < computerVictory){
        finalResult = "You lose the game";
        }
        else{
            finalResult = "No winner"
        }
        alert(finalResult + ", Play Again ?");
    playAgain(finalResult)          
    }
           
 return finalResult;

};
//set count and score to 0;
function playAgain(finalResult){
    
    playerVictory = 0;
    computerVictory = 0;
    count = 0;
    
};