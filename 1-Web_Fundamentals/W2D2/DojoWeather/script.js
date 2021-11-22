// When the user clicks on a city, display an alert
function cityLoadAlert() {
  alert("Loading weather report...");
}

// Clicking "I Accept" will dismiss the cookie policy message
var alertBox = document.querySelector("#alert");

function hideAlertBox() {
  alertBox.remove();
}

// Convert the temperatures when the select tag is changed

// step 4 - create the conversion function separately to keep the code from having too much nested within the original function; either floor or round the formula result to get a full integer
function celToFahr(temp) {
  return Math.floor((9 / 5) * temp + 32);
}

function fahrToCel(temp) {
  return Math.floor((5 / 9) * (temp - 32));
}

function convertTemps(element) {
  console.log(element.value);
  // step 1 - create this function to be called when "onchange" is triggered
  for (var i = 1; i < 9; i++) {
    // step 2 - give each temperature a separate id tag in the HTML then create the for loop to go through iterations 1-8
    var tempSpan = document.querySelector("#temp" + i); // step 3 - create a variable to represent the temp id and set it to match the selector it represents and concatinate the value of i for each iteration (temps 1-8)
    var tempVal = tempSpan.innerText;
    if (element.value == "°C") {
      // step 5 - create the conditional set to the default unit
      tempSpan.innerText = fahrToCel(tempVal); // step 6 - set the HTML to reflect the inner value by calling the appropriate conversion function
    } else {
      tempSpan.innerText = celToFahr(tempVal);
    }
  }
}
