// Set variable for temperature input by user
var tempInput = document.getElementsByName('temp-input')[0].value;

// Get a reference to the button element in the DOM
var button = document.getElementById('convertButton');


// Determines which conversion should
// happen based on which radio button is selected.
function determineConverter() {
  var scale = document.querySelector('input[name = "tempscale"]:checked').value;
  console.log('event', scale);
  convert(scale);
}

// Determines when button is clicked then runs function to determine scale
button.addEventListener('click', determineConverter);


// Converts to celsius
function toCelsius() {
  var newCel = (tempInput - 32) / 1.8;
}
// // Converts to fahrenheit
function toFahrenheit() {
  var newFahr = (tempInput * 1.8) + 32;
}

// Function to be executed when the button is clicked and scale is determined
function convert(scale) {
  if (scale === 'Celsius') {
    toCelsius();
  } else {
    toFahrenheit();
  }
}
