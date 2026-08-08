
// Number Guessing Game

function gameStart(user, ComputerGuess) {
  do {
    if (user > ComputerGuess) {
      user = prompt("Too High | Try again");
    } else if (user < ComputerGuess) {
      user = prompt("Too Low | Try again");
    } else {
      alert(`Congratulation Correct🎉. User-${user} | Computer-${ComputerGuess}`);
      if(confirm("Restart the game ?")){
        main();
      }else{
        break;
      }
    }
  } while (true);
}


function main(){ 
    let randomGuess = Math.floor(Math.random() * 100) + 1;
    if(!confirm("Let's start Number Guessing Game ?")) return
    let user = prompt("Guess The between 1 to 100:");
    gameStart(user,randomGuess)
}

main()