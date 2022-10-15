
const array = ['rock', 'paper', 'scissor'];

const computerPlay = function(){
  const number = Math.trunc(Math.random() *3);
  return array[number];
};

const playRound = function(playerSelection, computerSelection){
  if(computerSelection === computerSelection){
    return `No winner, let's try again`;
  }
  if(computerSelection === "paper" && computerSelection === "rock"){
    return `You win! Paper beats rock`;
  }
  if(computerSelection === "scissor" && computerSelection === "paper"){
    return `You win! Sciossor beats paper`;
  }
  if(computerSelection === "rock" && computerSelection === "scissor"){
    return `You win! Rock beats scissor`;
  }
  else return `You lost! ${computerSelection} beats ${playerSelection}`;
  
};

const round = function(){
  const rounds = prompt("How many times do you wanana play?", "");
  
  for(let i = 0; i < rounds; i++){
    const computerSelection = computerPlay();

    do{
      
      const playerSelection = (prompt(`Round ${i + 1}\nChoose:\n\t Rock;\n\t Paper;\n\t Scissor`)).toLocaleLowerCase();
    }while(playerSelection === array);
  
    if (!selections.some((ele) => ele === playerSelection)) {
      i--;
      continue;
    }

    console.log(playRound(playerSelection, computerSelection));
  }
};

round();

