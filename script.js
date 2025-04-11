"use strict";

// Select input and button
const searchField = document.querySelector(".searchArea input");
const searchBtn = document.querySelector(".searchArea button");
const weatherIcon = document.querySelector(".Weather-Icon");

// Event triggers
searchBtn.addEventListener("click", () => {
  const inputName = document.querySelector("#impTXT").value.trim();
  if (!inputName) return;

  console.log("User searched for city:", inputName);

  // 👉 Insert your own API logic here later
  // checkWeather(inputName);
});

searchField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchBtn.click();
  }
});

// Function placeholder for later API setup
// async function checkWeather(city) {
//   const response = await fetch(`YOUR_API_URL`);
//   const data = await response.json();
//   console.log(data);
// }
