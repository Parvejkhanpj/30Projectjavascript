console.log("helo drum Kit");

// playting sound funtion
function playStation(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
//  remove transition effect
function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it's is not transform
  this.classList.remove("playing");
}

// onclick effecţ

let numberofKeys = document.querySelectorAll(".key").length;
for (let i = 0; i < numberofKeys; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function (e) {
    let keyValue = keys[i].getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${keyValue}"]`);
    const key = document.querySelector(`.key[data-key="${keyValue}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  });
}

// remove transioton event handler
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playStation);
