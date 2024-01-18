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
const parag = document.querySelectorAll("p")

let player;
let cPlayer = 0;
let computer;
let cComputer = 0;

console.log(one)

function pressX(select) {

    if(select.textContent !== "X" && cPlayer === cComputer){
    select.textContent = "X";
    select.style.fontSize = "140px"
    cPlayer++;
    console.log(cPlayer)
    }
    
}

function pressO(select) {
  if (cPlayer > cComputer && select.textContent !== "X") {
    select.textContent = "O";
    select.style.fontSize = "140px";
    cComputer++;
    console.log(cPlayer);
  }
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
divNine.addEventListener("click", () => {pressO(nine)})

