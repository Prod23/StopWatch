let seconds = 00;
let tens = 00;
let mins = 00;
let appendTens = document.getElementById("tens");
let appendMins = document.getElementById("mins");
let appendSeconds = document.getElementById("seconds");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let buttonReset = document.getElementById("reset");
let buttonSave = document.getElementById("save");
let tableBody = document.getElementById("lapHistory");
let interval;
let time;

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
  interval = setInterval(startTimer,10);
  buttonStart.innerHTML = "STOP";
  buttonStart.onclick = function(){
    clearInterval(interval);
    buttonStart.innerHTML = "START";
    buttonStart.onclick = function(){
      start();
    }
  }
}
// buttonStart.onclick = function(){
//   start();
// }
buttonSave.addEventListener("click", function(){
  time = mins + ":" + seconds + ":" + tens;
  itemJsonArray = [];
  if(localStorage.getItem("itemsJson") == null){
    itemJsonArray.push([time]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
  }
  else{
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([time]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
  }
  let str = "";
  itemJsonArray.forEach((element,index) => {
  str+= `
    <tr>
    <th scope="row">${index+1}</th>
    <td>${element}</td>
    </tr>
  `
  })
  lapHistory.innerHTML = str;
})

function reset(){
  clear = [];
  localStorage.setItem('itemsJson', JSON.stringify(clear));
}