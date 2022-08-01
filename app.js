
// header animation
const text1 = document.querySelector(".hello");
const text2 = document.querySelector(".portfolio")

const strText1 = text1.textContent;
const strText2 = text2.textContent;

const splitText1 = strText1.split("")
const splitText2 = strText2.split("")

text1.textContent = ""
text2.textContent = ""

for (let i = 0; i < splitText1.length; i++){
    text1.innerHTML += "<span class='hello'>" + splitText1[i] + "</span>";
}

for (let j = 0; j < splitText2.length; j++){
    text2.innerHTML += "<span class='portfolio'>" + splitText2[j] + "</span>"
}

let char1 = 0
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text1.querySelectorAll("span")[char1];
    span.classList.add("fade");
    char1++
    if(char1 === splitText1.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer = null
}

let char2 = 0
let timer2 = setInterval( onTick2, 40)

function onTick2(){
    const span = text2.querySelectorAll("span")[char2];
    span.classList.add("fade");
    char2++
    if(char2 === splitText2.length){
        complete2();
        return;
    }
}
function complete2(){
    clearInterval(timer2);
    timer2 = null
}

// about section

const whoDisplay = document.getElementById("who")
const toolsDisplay = document.getElementById("tools")
const whoTextDisplay = document.getElementById("who-text")
const toolsTextDisplay = document.getElementById("tools-text")

whoDisplay.onmouseover = function(){
    toolsDisplay.style.display = "none"
    whoTextDisplay.style.display = "block"
}
whoDisplay.onmouseleave = function(){
    toolsDisplay.style.display = "block"
    whoTextDisplay.style.display = "none"
}

toolsDisplay.onmouseover = function(){
    whoDisplay.style.display = "none"
    toolsTextDisplay.style.display = "flex"
}
toolsDisplay.onmouseleave = function(){
    whoDisplay.style.display = "block"
    toolsTextDisplay.style.display = "none"
}


// portfolio

const openProject = document.getElementById("project");

const portfolioCard = document.querySelector(".rockPaper")


portfolioCard.onmouseover = function(){
    openProject.style.display = "block";
    }
portfolioCard.onmouseleave = function(){
    openProject.style.display = "none";

    }

