const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
       
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
       
        // Clear the input box
        inputBox.value = "";
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);


 const display = document.getElementById("display");
 let timer = null;
 let startTime = 0;
 let elapsedTime = 0;
 let isRunning = false;
 
function start(){
   if(!isRunning){
        startTime = Date.now() - elapsedTime;
      timer = setInterval(update, 10);
         isRunning = true;
    }
 }
 
 function stop(){
     if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
       isRunning = false;
    }
}
 
function reset(){
   clearInterval(timer);
    startTime = 0;
     elapsedTime = 0;
     isRunning = false;
     display.textContent = "00:00:00:00";
 }
 
function update(){
     const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
   
    
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
   let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
   
   
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
 
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
 }