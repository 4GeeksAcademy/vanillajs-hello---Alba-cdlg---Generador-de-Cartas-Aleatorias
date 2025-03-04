import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let generateRandomNumber = () => {
    let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let indexNumber = Math.floor(Math.random() * number.length);
    return number[indexNumber];
  };
  
  let generateRandomSuit = () => {
    let card = ["spade", "clubs", "hearts", "diams"];
    let indexCard = Math.floor(Math.random() * card.length);
    return card[indexCard];
  };

  document.querySelector('.card').classList.add(generateRandomSuit());
  document.querySelector('.number').innerHTML = generateRandomNumber();

};
