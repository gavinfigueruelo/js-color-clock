const clock = document.querySelector('.clock');
let isVariable = false;
clock.addEventListener('mouseover', () => isHovering = true);
clock.addEventListener('mouseout', () => isHovering = false);

setInterval(function() {
  const currentTime = new Date();
  const clockDisplay = document.getElementsByClassName("clock-display")
console.log(clockDisplay)

if(isHovering) {
  hours = ('0' + currentTime.getHours().toString(16)).slice(-2);
  minutes = ('0' + currentTime.getMinutes().toString(16)).slice(-2);
  seconds = ('0' + currentTime.getSeconds().toString(16)).slice(-2);
} else {
  const hours = ('0' + currentTime.getHours()).slice(-2);
  const minutes = ('0' + currentTime.getMinutes()).slice(-2);
  const seconds = ('0' + currentTime.getSeconds()).slice(-2);

}


clockDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
progressBar.style.width = `${seconds / 60 * 14}rem`;




clockDisplay[0].innerHTML = `${hours}:${minutes}:${seconds}`
}, 1000)
