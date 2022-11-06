console.log("helo drum Kit");
window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it's is not transform
  this.classList.remove("playing");
  console.log(e.propertyName);
}
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
