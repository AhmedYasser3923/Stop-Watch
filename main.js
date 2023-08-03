const time_display = document.querySelector("#time");
const start_btn = document.querySelector("#start-btn");
const pause_btn = document.querySelector("#Pause-btn");
const mark_btn = document.querySelector("#mark-btn");
const reset_btn = document.querySelector("#reset-btn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let ms = 0;

start_btn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1);
  }
});

pause_btn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});

reset_btn.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  ms = 0;
  time_display.textContent = "00:00:00:000";
  lab.textContent = null;
  count = 0;
});

let count = 1;
document.getElementById("mark-btn").onclick = function (){
  let lab = document.getElementById("Mark-time");
  document.getElementById("r").innerHTML = "Results: ";
  lab.innerHTML = `${lab.innerHTML} <br>
   ${count}-  ${time_display.textContent}`;
     count ++;
}
function updateTime() {
  elapsedTime = Date.now() - startTime;

  ms = Math.floor(elapsedTime % 1000);
  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  ms = zeros(ms);
  secs = zeros(secs);
  mins = zeros(mins);
  hrs = zeros(hrs);

  time_display.textContent = `${hrs}:${mins}:${secs}:${ms}`;

  function zeros(x) {
    return ("0" + x).length > 2 ? x : "0" + x;
  }
}
