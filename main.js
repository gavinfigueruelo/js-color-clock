// const clock = document.querySelector('.clock');
// let isVariable = false;
// clock.addEventListener('mouseover', () => isHovering = true);
// clock.addEventListener('mouseout', () => isHovering = false);
//
// setInterval(function() {
//   const currentTime = new Date();
//   const clockDisplay = document.getElementsByClassName("clock-display")
// console.log(clockDisplay)
//
// clockDisplay[0].innerHTML = `${hours}:${minutes}:${seconds}`
// }, 1000)



const timeDisplay = document.querySelector('.clock-display');
const clockFace = document.querySelector('.clock-face');
const progressBar = document.querySelector('.clock-progress-bar');
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let count = setInterval(timer, 1000);
let hexCount = setInterval(mouseTimer, 1000);
clockFace.style.fontFamily = "trebuchet ms, sans serif";
console.dir(clockFace);
console.log(today);

clearInterval(hexCount);

function timer() {
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  //if hours, mins and secs are single digits, the statements below add a 0
  if (h <= 9) { h = "0"+h; }
  if (m <= 9) { m = "0"+m; }
  if (s <=9) { s = "0"+s; }
  time = h + ":" + m + ":" + s;
  hexSec = s.toString(16);
  timeDisplay.textContent = time;

  percent = (s / 60);
  barLength = (14 * percent);
  hexColor = `#3${hexSec}0${hexSec}`;
  clockFace.style.backgroundImage = `(${hexColor}, red)`;
  //clockFace.style.backgroundColor = `${hexColor}`;
  progressBar.style.width = `${barLength}rem`
  console.log(`Time: ${time} Percent: ${percent} Color: ${hexColor}`);
  return time;
}



function mouseTimer(){
  clearInterval(count);
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  if (h <= 9) { h = "0"+h; }
  if (m <= 9) { m = "0"+m; }
  if (s <=9) { s = "0"+s; }
  time = h.toString(16) + ":" + m.toString(16) + ":" + s.toString(16);
  percent = (s / 60);
  barLength = (14 * percent);
  progressBar.style.width = `${barLength}rem`
  timeDisplay.textContent = time;
  hexSec = s.toString(16);
  clockFace.style.backgroundImage = `(${hexColor}, pink)`;
  //clockFace.style.backgroundColor = `${hexColor}`;
  hexColor = `#4${hexSec}0${hexSec}`;
  console.log(`Time: ${time} Percent: ${percent} Color: ${hexColor}`);
  //timeDisplay.textContent = `${hexColor}`;
}
function mouseFace(){
  hexCount = setInterval(mouseTimer, 1000);
}
function mouseFaceLeave(){
  clearInterval(hexCount);
  count = setInterval(timer, 1000);
}

timeDisplay.addEventListener('mouseenter', mouseFace);
timeDisplay.addEventListener('mouseleave', mouseFaceLeave);
