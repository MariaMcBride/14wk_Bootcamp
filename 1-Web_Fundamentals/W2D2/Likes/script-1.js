function like(element) {
  var element = document.querySelector("#count");
  var count = parseInt(element.innerText);
  element.innerText = count + 1;
}
