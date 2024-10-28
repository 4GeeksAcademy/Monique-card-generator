/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Possible card values and suits
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = [
    { symbol: "♥", name: "hearts" },
    { symbol: "♦", name: "diamonds" },
    { symbol: "♣", name: "clubs" },
    { symbol: "♠", name: "spades" }
  ];

  // Function to generate a random card
  function generateRandomCard() {
    // Select a random value and suit
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];

    // Insert value and suit into HTML elements
    document.getElementById("cardValue").innerText = randomValue;
    document.getElementById("topSuit").innerText = randomSuit.symbol;
    document.getElementById("bottomSuit").innerText = randomSuit.symbol;

    // Set the suit color based on the suit type
    document.getElementById(
      "topSuit"
    ).className = `suit suit-top ${randomSuit.name}`;
    document.getElementById(
      "bottomSuit"
    ).className = `suit suit-bottom ${randomSuit.name}`;
    document.getElementById("cardValue").className = `value ${randomSuit.name}`;
  }

  // Generate a random card when the page loads
  generateRandomCard();
};
