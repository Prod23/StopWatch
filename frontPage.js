let seconds = 00;
let tens = 00;
let mins = 00;
let appendTens = document.getElementById("tens");
let appendMins = document.getElementById("mins");
let appendSeconds = document.getElementById("seconds");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let buttonReset = document.getElementById("reset");
let interval;


function startTimer(){
  tens++;
  if (tens < 9){
    appendTens.innerHTML = "0"+tens;
  }
  if(tens > 9){
    appendTens.innerHTML = tens;
  }
  if (tens > 99){
    seconds++;
    appendSeconds.innerHTML ="0"+seconds;
    tens = 0;
    appendTens.innerHTML = "0"+0;
  }
  if(seconds > 59){
    mins++;
    appendMins.innerHTML = "0"+mins;
    seconds = 0;
    appendSeconds.innerHTML = "0"+seconds;
  }
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }
  if (mins > 9){
    appendMins.innerHTML = mins;
  }
}
function start(){
  buttonStart.onclick = function(){
    interval = setInterval(startTimer,10);
    buttonStart.innerHTML = "STOP";
    buttonStart.onclick = function(){
      clearInterval(interval);
      buttonStart.innerHTML = "START";
      start();
    }
  }
}
buttonStart.onclick = function(){
  start();
}