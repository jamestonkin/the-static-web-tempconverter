// Set variables
var newFahr;
var newCel;

// Sets results variable and prints to DOM
var results = document.getElementById('results');

// Get a reference to the button elements in the DOM
var button = document.getElementById('convertButton');
var reload = document.getElementById('clearButton');

// Adds color to temperature based on value of temp
function addColor() {
  if (newFahr > 90 || newCel > 32) {
    results.style.color = 'red';
  } else if (newFahr < 32 || newCel < 0) {
    results.style.color = 'blue';
  } else {
    results.style.color = 'green';
  }
}

// Converts to celsius prints to html and adds color
function toCelsius() {
  var tempInput = parseFloat(document.getElementsByName('temp-input')[0].value);
  newCel = (tempInput - 32) / 1.8;
  newCel = Math.round(newCel);
  results.innerHTML = results.innerHTML + newCel + ' degrees celsius.';
  addColor();
}
// // Converts to fahrenheit prints to html and adds color
function toFahrenheit() {
  var tempInput = parseFloat(document.getElementsByName('temp-input')[0].value);
  newFahr = (tempInput * 1.8) + 32;
  newFahr = Math.round(newFahr);
  results.innerHTML = results.innerHTML + newFahr + ' degrees fahrenheit.';
  addColor();
}

// Determines which conversion should
// happen based on which radio button is selected.
function determineConverter() {
  if (document.getElementById('fahrInput').checked === true) {
    toFahrenheit();
  }
  if (document.getElementById('celInput').checked === true) {
    toCelsius();
  }
}

function clear() {
  window.location.reload();
}

// Determines when button is clicked then runs function to determine scale and clear
button.addEventListener('click', determineConverter);
reload.addEventListener('click', clear);

// When enter is pressed calls back to button click event handler; runs determineconverter function
document.getElementById('temp').onkeypress = function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    var pressedEnter = document.getElementById('convertButton').click();
  }
};
