//console.log("Hello World")

const one = document.getElementById('1');
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

const divOne = document.getElementById("1d");
const divTwo = document.getElementById("2d");
const divThree = document.getElementById("3d");
const divFour = document.getElementById("4d");
const divFive = document.getElementById("5d");
const divSix = document.getElementById("6d");
const divSeven = document.getElementById("7d");
const divEight = document.getElementById("8d");
const divNine = document.getElementById("9d");

const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");


let cPlayer = 0;
let cComputer = 0;

console.log(one)

function reset() {
   one.textContent = "";
   two.textContent = "";
   three.textContent = "";
   four.textContent = "";
   five.textContent = "";
   six.textContent = "";
   seven.textContent = "";
   eight.textContent = "";
  nine.textContent = "";
   pScore.textContent = 0;
   cScore.textContent = 0;
}

function playerWon() {
  alert("Player Won!")
  one.textContent = "";
  two.textContent = "";
  three.textContent = "";
  four.textContent = "";
  five.textContent = "";
  six.textContent = "";
  seven.textContent = "";
  eight.textContent = "";
   nine.textContent = "";
   
   one.style.backgroundColor = "white";
   two.style.backgroundColor = "white";
   three.style.backgroundColor = "white";
   four.style.backgroundColor = "white";
   five.style.backgroundColor = "white";
   six.style.backgroundColor = "white";
   seven.style.backgroundColor = "white";
   eight.style.backgroundColor = "white";
   nine.style.backgroundColor = "white";
}

function computerWon() {
  alert("Computer Won!");
  one.textContent = "";
  two.textContent = "";
  three.textContent = "";
  four.textContent = "";
  five.textContent = "";
  six.textContent = "";
  seven.textContent = "";
  eight.textContent = "";
   nine.textContent = "";
   
   one.style.backgroundColor = "white";
   two.style.backgroundColor = "white";
   three.style.backgroundColor = "white";
   four.style.backgroundColor = "white";
   five.style.backgroundColor = "white";
   six.style.backgroundColor = "white";
   seven.style.backgroundColor = "white";
   eight.style.backgroundColor = "white";
   nine.style.backgroundColor = "white";
}


function pressX(select) {
    
    if (select.textContent !== "X" && cPlayer === cComputer && select.textContent !== "O" && select.textContent == "") {
    select.textContent = "X";
    select.style.fontSize = "140px"
    cPlayer++;
    console.log(cPlayer)
  }
  
//player conditions
    if (one.textContent === "X" && two.textContent === "X" && three.textContent === "X") {
       setTimeout(playerWon, 500);

       one.style.backgroundColor = "green"
       two.style.backgroundColor = "green";
       three.style.backgroundColor = "green";

       pScore.textContent++;

    } else if (one.textContent === "X" && four.textContent === "X" && seven.textContent === "X") {
       setTimeout(playerWon, 500);

       one.style.backgroundColor = "green";
       four.style.backgroundColor = "green";
       seven.style.backgroundColor = "green";

       pScore.textContent++;
    } else if (one.textContent === "X" && five.textContent === "X" && nine.textContent === "X") {
       setTimeout(playerWon, 500);

        one.style.backgroundColor = "green";
        five.style.backgroundColor = "green";
       nine.style.backgroundColor = "green";
       
       pScore.textContent++;
    } else if (two.textContent === "X" && five.textContent === "X" && eight.textContent === "X") {
       setTimeout(playerWon, 500);

       two.style.backgroundColor = "green";
       five.style.backgroundColor = "green";
       eight.style.backgroundColor = "green";

       pScore.textContent++;
    } else if (three.textContent === "X" && six.textContent === "X" && nine.textContent === "X") {
       setTimeout(playerWon, 500);

      three.style.backgroundColor = "green";
      six.style.backgroundColor = "green";
      nine.style.backgroundColor = "green";

       pScore.textContent++;
    } else if (three.textContent === "X" && five.textContent === "X" && seven.textContent === "X") {
       setTimeout(playerWon, 500);

      three.style.backgroundColor = "green";
      five.style.backgroundColor = "green";
      seven.style.backgroundColor = "green";

       pScore.textContent++;
    } else if (three.textContent === "X" && five.textContent === "X" && seven.textContent === "X") {
       setTimeout(playerWon, 500);

      three.style.backgroundColor = "green";
      five.style.backgroundColor = "green";
      seven.style.backgroundColor = "green";

       pScore.textContent++;
    } else if (four.textContent === "X" && five.textContent === "X" && six.textContent === "X") {
       setTimeout(playerWon, 500);

       four.style.backgroundColor = "green";
       five.style.backgroundColor = "green";
       six.style.backgroundColor = "green";

       pScore.textContent++;
    } else if (seven.textContent === "X" && eight.textContent === "X" && nine.textContent === "X") {
       setTimeout(playerWon, 500);

       nine.style.backgroundColor = "green";
       eight.style.backgroundColor = "green";
       seven.style.backgroundColor = "green";

       pScore.textContent++;
    } /* else if (
      one.textContent, two.textContent,
      three.textContent,
      four.textContent,
      five.textContent,
      six.textContent,
      seven.textContent,
      eight.textContent,
      nine.textContent === "X" || "O"
    ) {
      alert("Draw");
    }  */  
}


function pressO(select) {
  if (cPlayer > cComputer && select.textContent !== "X" && select.textContent !== "O" && select.textContent == "") {
    select.textContent = "O";
    select.style.fontSize = "140px";
    cComputer++;
    console.log(cPlayer);
    }
  
// computer conditions:
if (
  one.textContent === "O" &&
  two.textContent === "O" &&
  three.textContent === "O"
) {
  setTimeout(computerWon, 500);
   cScore.textContent++;
   one.style.backgroundColor = "blue";
   two.style.backgroundColor = "blue";
   three.style.backgroundColor = "blue";
} else if (
  one.textContent === "O" &&
  four.textContent === "O" &&
  seven.textContent === "O"
) {
  setTimeout(computerWon, 500);
   cScore.textContent++;
   one.style.backgroundColor = "blue";
   four.style.backgroundColor = "blue";
   seven.style.backgroundColor = "blue";
   cScore.textContent++;
} else if (
  one.textContent === "O" &&
  five.textContent === "O" &&
  nine.textContent === "O"
) {
  setTimeout(computerWon, 500);
   cScore.textContent++;
   one.style.backgroundColor = "blue";
   five.style.backgroundColor = "blue";
   nine.style.backgroundColor = "blue";
} else if (
  two.textContent === "O" &&
  five.textContent === "O" &&
  eight.textContent === "O"
) {
  setTimeout(computerWon, 500);
   cScore.textContent++;

   two.style.backgroundColor = "blue";
   five.style.backgroundColor = "blue";
   eight.style.backgroundColor = "blue";

} else if (
  three.textContent === "O" &&
  six.textContent === "O" &&
  nine.textContent === "O"
) {
  setTimeout(computerWon, 500);
   cScore.textContent++;
   three.style.backgroundColor = "blue";
   six.style.backgroundColor = "blue";
   nine.style.backgroundColor = "blue";
} else if (
  three.textContent === "O" &&
  five.textContent === "O" &&
  seven.textContent === "O"
) {
   setTimeout(computerWon, 500);
   three.style.backgroundColor = "blue";
   five.style.backgroundColor = "blue";
   seven.style.backgroundColor = "blue";
   cScore.textContent++;
} else if (
  three.textContent === "O" &&
  five.textContent === "O" &&
  seven.textContent === "O"
) {
  setTimeout(computerWon, 500);
   cScore.textContent++;
   three.style.backgroundColor = "blue";
   five.style.backgroundColor = "blue";
   seven.style.backgroundColor = "blue";

} else if (
  four.textContent === "O" &&
  five.textContent === "O" &&
  six.textContent === "O"
) {
  setTimeout(computerWon, 500);
   four.style.backgroundColor = "blue";
   five.style.backgroundColor = "blue";
   six.style.backgroundColor = "blue";
  cScore.textContent++;
} else if (
  seven.textContent === "O" &&
  eight.textContent === "O" &&
  nine.textContent === "O"
) {
  setTimeout(computerWon, 500);
   nine.style.backgroundColor = "blue";
   eight.style.backgroundColor = "blue";
   seven.style.backgroundColor = "blue";
  cScore.textContent++;
} /* else if (
  one.textContent, two.textContent,
  three.textContent,
  four.textContent,
  five.textContent,
  six.textContent,
  seven.textContent,
  eight.textContent,
  nine.textContent === "X" || "O"
) {
  alert("Draw");
} */ 
}

divOne.addEventListener("click", () =>{pressX(one)})
divTwo.addEventListener("click", () => {pressX(two)})
divThree.addEventListener("click", () =>{pressX(three)})
divFour.addEventListener("click", () => {pressX(four)})
divFive.addEventListener("click", () =>{pressX(five)})
divSix.addEventListener("click", () => {pressX(six)})
divSeven.addEventListener("click", () =>{pressX(seven)})
divEight.addEventListener("click", () => {pressX(eight)})
divNine.addEventListener("click", () => {pressX(nine)})

divOne.addEventListener("click", () =>{pressO(one)})
divTwo.addEventListener("click", () => {pressO(two)})
divThree.addEventListener("click", () =>{pressO(three)})
divFour.addEventListener("click", () => {pressO(four)})
divFive.addEventListener("click", () =>{pressO(five)})
divSix.addEventListener("click", () => {pressO(six)})
divSeven.addEventListener("click", () =>{pressO(seven)})
divEight.addEventListener("click", () => {pressO(eight)})
divNine.addEventListener("click", () => { pressO(nine) })

/* //player conditions

 if (one.textContent === "X" && two.textContent === "X" && three.textContent === "X") {
       setTimeout(playerWon, 500);
    } else if (one.textContent === "X" && four.textContent === "X" && seven.textContent === "X") {
       setTimeout(playerWon, 500);
    } else if (one.textContent === "X" && five.textContent === "X" && nine.textContent === "X") {
       setTimeout(playerWon, 500);
    } else if (two.textContent === "X" && five.textContent === "X" && eight.textContent === "X") {
       setTimeout(playerWon, 500);
    } else if (three.textContent === "X" && six.textContent === "X" && nine.textContent === "X") {
       setTimeout(playerWon, 500);
    } else if (three.textContent === "X" && five.textContent === "X" && seven.textContent === "X") {
       setTimeout(playerWon, 500);
  } else if (three.textContent === "X" && five.textContent === "X" && seven.textContent === "X") {
       setTimeout(playerWon, 500);
    } else if (four.textContent === "X" && five.textContent === "X" && six.textContent === "X") {
       setTimeout(playerWon, 500);
    } else if (seven.textContent === "X" && eight.textContent === "X" && nine.textContent === "X") {
       setTimeout(playerWon, 500);
}
    
// computer conditions:
if (one.textContent === "O" && two.textContent === "O" && three.textContent === "O") {
       setTimeout(computerWon, 500);
    } else if (one.textContent === "O" && four.textContent === "O" && seven.textContent === "O") {
       setTimeout(computerWon, 500);
    } else if (one.textContent === "O" && five.textContent === "O" && nine.textContent === "O") {
       setTimeout(computerWon, 500);
    } else if (two.textContent === "O" && five.textContent === "O" && eight.textContent === "O") {
       setTimeout(computerWon, 500);
    } else if (three.textContent === "O" && six.textContent === "O" && nine.textContent === "O") {
        setTimeout(computerWon, 500);
    } else if (three.textContent === "O" && five.textContent === "O" && seven.textContent === "O") {
       setTimeout(playerWon, 500);
    } else if (three.textContent === "O" && five.textContent === "O" && seven.textContent === "O") {
       setTimeout(playerWon, 500);
    } else if (four.textContent === "O" && five.textContent === "O" && six.textContent === "O") {
       setTimeout(computerWon, 500);
    } else if (seven.textContent === "O" && eight.textContent === "O" && nine.textContent === "O") {
       setTimeout(computerWon, 500);
    } */