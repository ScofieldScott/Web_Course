'set script';

let scorePlayer = 0;
let scoreComputer = 0;
let message = '';
const array = ['rock', 'paper', 'scissor'];

function computerPlay(){
const number = Math.floor(Math.random() *3);
return array[number];
};

function playRound (playerSelection, computerSelection){
  if(playerSelection === computerSelection){
    return `No winner, let's try again`;
  } else if(
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissor" && computerSelection === "paper" ||
    playerSelection === "rock" && computerSelection === "scissor"
  ){
    scorePlayer++;
    console.log(`Player Score: ${scorePlayer} Computer Score: ${scoreComputer}`);
    return message = `Player win! ${playerSelection} beats ${computerSelection}`;
  } else if(
    computerSelection === "paper" && playerSelection === "rock" ||
    computerSelection === "scissor" && playerSelection === "paper" ||
    computerSelection === "rock" && playerSelection === "scissor"
  ){
    scoreComputer++;
    console.log(`Player Score: ${scorePlayer} Computer Score: ${scoreComputer}`);
    return message = `Computer win! ${computerSelection} beats ${playerSelection}`;
  }else {
    message = `Invalid input! Try to put a valid one`;
    alert(message);
  }
};

function round (){
  for(let i = 0; i < 5; i++){
    
    const computerSelection = computerPlay();
    const playerSelection = prompt(`Round ${i + 1} Choose:\n\t Rock;\n\t Paper;\n\t Scissor`).toLocaleLowerCase();
    playRound(playerSelection, computerSelection);
    console.log(playRound());
    
    if(message.includes(`Player win`)){
      console.log("Congratulations you win this round!!");
    }else if(message.includes(`Computer win`)){
      console.log("Your bad!! Computer win this round!!");
    }else {
      --i;
    }

    console.log(`Your play: ${playerSelection} \n\ Computer play: ${computerSelection}`);
    // // console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log(`Final score\n Player Score: ${scorePlayer} Computer Score: ${scorePlayer}`);
  if(scorePlayer > scorePlayer){
    console.log(`You are the winner of this game!!`);
  }else if(scorePlayer < scorePlayer){ 
    console.log(`You are not the winner of this game!!`);
  }else console.log(`No one won`);
};

round();

