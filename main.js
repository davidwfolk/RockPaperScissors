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

let computer = {
  name: "computer",
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

//NOTE will take in playersChoice between rock/paper/scissors
function play(playerChoice) {
 console.log("playerChoice", playerChoice);
let computerChoice = Math.floor(Math.random()*3)
console.log("computerChoice", computerChoice);

  if (playerChoice == computerChoice) {
    console.log("tie");
}
  if (computerChoice > playerChoice) {
    console.log("lose");
  }
  if (playerChoice > computerChoice) {
    console.log("win");
  }
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

