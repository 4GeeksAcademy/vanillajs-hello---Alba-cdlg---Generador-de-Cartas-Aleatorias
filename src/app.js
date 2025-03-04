import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const cardElement = document.querySelector(".card");
  const numberElement = document.querySelector(".number");
  const button = document.querySelector("#newCardButton");

  let generateRandomNumber = () => {
    let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let indexNumber = Math.floor(Math.random() * number.length);
    return number[indexNumber];
  };

  let generateRandomSuit = () => {
    let suits = ["spade", "clubs", "hearts", "diams"];
    let indexSuit = Math.floor(Math.random() * suits.length);
    return suits[indexSuit];
  };

  let generateCard = () => {
    cardElement.classList.remove("spade", "clubs", "hearts", "diams");
    let newSuit = generateRandomSuit();
    cardElement.classList.add(newSuit);
    numberElement.innerHTML = generateRandomNumber();
  };

  generateCard();

  button.addEventListener("click", generateCard);

  setInterval(generateCard, 10000);
};
