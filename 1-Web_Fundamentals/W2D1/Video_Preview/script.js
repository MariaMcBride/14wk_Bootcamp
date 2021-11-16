console.log("page loaded...");

var element = document.querySelector("video");
element.addEventListener("mouseover", function () {
  this.play();
});

var element = document.querySelector("video");
element.addEventListener("mouseout", function () {
  this.pause();
});
