const array = ['rock', 'paper', 'scissor'];

const computerPlay = function(){
  const number = Math.trunc(Math.random() *3);
  return array[number];
};

const playRound = function(playerSelection, computerSelection){
  if(playerSelection === computerSelection){
    return `No winner, let's try again`;
  }
  if(playerSelection === "paper" && computerSelection === "rock"){
    return `You win! Paper beats rock`;
  }
  if(playerSelection === "scissor" && computerSelection === "paper"){
    return `You win! Sciossor beats paper`;
  }
  if(playerSelection === "rock" && computerSelection === "scissor"){
    return `You win! Rock beats scissor`;
  }
  else return `You lost! ${computerSelection} beats ${playerSelection}`;
  
};

const round = function(){
  for(let i = 0; i < 5; i++){
    const computerSelection = computerPlay();
    const playerSelection = (prompt(`Round ${i + 1}\nChoose:\n\t Rock;\n\t Paper;\n\t Scissor`)).toLocaleLowerCase();
  
    if(selections.array(playerSelection)){
      i--;
      continue;
    }

    console.log(playRound(playerSelection, computerSelection));
  }
};

round();

