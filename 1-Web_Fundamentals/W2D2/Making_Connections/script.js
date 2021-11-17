console.log("page loaded...");

var userName = document.querySelector("#user-name");

function changeName() {
  if (userName.innerText == "Jane Doe") {
    userName.innerText = "Malcolm Reynolds McBride";
    document.querySelector(".avatar-m").src = "images/malcolm-m.jpg";
  } else {
    userName.innerText = "Jane Doe";
    document.querySelector(".avatar-m").src = "images/jane-m.jpg";
  }
}

var reqCount = document.querySelector("#request-count");
var span = document.querySelector("#friends");

function accept(id) {
  var element = document.querySelector(id);
  element.remove();
  reqCount.innerText--;
  span.innerText++;
}

function ignore(id) {
  var element = document.querySelector(id);
  element.remove();
  reqCount.innerText--;
}
