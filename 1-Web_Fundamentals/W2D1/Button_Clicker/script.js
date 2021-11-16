// Change Login to Logout when clicked
function logout(element) {
  if (element.innerText == "Login") {
    element.innerText = "Logout";
  } else {
    element.innerText = "Login";
  }
}

// Remove Add Definition when clicked
function hide(element) {
  element.remove();
}

// Alert pop-up when clicking like button
function likedNinja() {
  alert("Ninja was liked");
}
