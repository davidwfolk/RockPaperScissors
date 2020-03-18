let player1 = {
  name: "JimBob",
  roshambo: [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rock-paper-scissors_%28rock%29.png",
        status: "rock",
      },
      {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/1200px-Rock-paper-scissors_%28paper%29.png",
        status: "paper",
      },
      {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/600px-Rock-paper-scissors_%28scissors%29.png",
        status: "scissors",
    },
  ],
}

// let computer = {
//   name: "computer",
//   roshambo: [
//     {
//       img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rock-paper-scissors_%28rock%29.png",
//         status: "rock",
//       },
//       {
//       img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/1200px-Rock-paper-scissors_%28paper%29.png",
//         status: "paper",
//       },
//       {
//       img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/600px-Rock-paper-scissors_%28scissors%29.png",
//         status: "scissors",
//     },
//   ],
// }

let choices = ["rock", "paper", "scissors"]

  function playerPhotos(playerChoice) {
    let rpsPlayerElem = document.getElementById("rps-player-image")
  
    //playerChoicePhotos
    
    if (playerChoice == "rock") {
      return rpsPlayerElem.src = player1.roshambo[0].img 
    }
    if (playerChoice == "paper") {
      return rpsPlayerElem.src = player1.roshambo[1].img 
    }
    if (playerChoice == "scissors") {
      return rpsPlayerElem.src = player1.roshambo[2].img 
    }
    
  }

  function computerPhotos(computerChoice) {
    let rpsComputerElem = document.getElementById("rps-computer-image")

    //computerChoicePhotos
    
if (computerChoice == "rock") {
  return rpsComputerElem.src = player1.roshambo[0].img
}
if (computerChoice == "paper") {
  return rpsComputerElem.src = player1.roshambo[1].img
}
if (computerChoice == "scissors") {
  return rpsComputerElem.src = player1.roshambo[2].img
}

  }
//NOTE will take in playersChoice & compare it to computerChoice between rock/paper/scissors
function play(choices) {
  let playerChoice = choices
  console.log(playerChoice);
  let computerChoice = computerChoices()
  computerPhotos(computerChoice)
  playerPhotos(playerChoice)
  console.log(computerChoice);
  let result = "Hmm..."

  //algorithm

  if (playerChoice == "rock" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "paper" || playerChoice == "scissors" && computerChoice == "scissors") {
    result = "You've Tied!"
  }
  if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
    result = "You Won!"
  }
  if (computerChoice == "rock" && playerChoice == "scissors" || computerChoice == "paper" && playerChoice == "rock" || computerChoice == "scissors" && playerChoice == "paper") {
      result =  "You Lost"
  }
  draw(result)
  return result
}

function computerChoices () {
  return choices[Math.floor(Math.random()* choices.length)]
}

function draw(winnertext) {
  let resultElem = document.getElementById("rps-winner")
  resultElem.innerText = winnertext
}




// function dontworry() {
//   let playerRockElem = document.getElementById("btn-rock")
//   let playerPaperElem = document.getElementById("btn-paper")
//   let playerScissorsElem = document.getElementById("btn-scissors")
//   let rpsElem = document.getElementById("rps-image")


//   if (playerRockElem) {
//     return player1.roshambo[0].img
//   }
//   else if (playerPaperElem) {
//     return player1.roshambo[1].img
//   }
//   else if (playerScissorsElem) {
//     return player1.roshambo[2].img
//   }
//   console.log(play)
// }

