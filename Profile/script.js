let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
progressEndValue = 90,    
speed = 10;

let progress = setInterval(() => {
progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#000000 ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);

let circularProgress2 = document.querySelector(".circular-progress2"),
progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,    
progressEndValue2 = 60,    
speed2 = 10;

let progress2 = setInterval(() => {
progressStartValue2++;

progressValue2.textContent = `${progressStartValue}%`
circularProgress2.style.background = `conic-gradient(#000000 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

if(progressStartValue2 == progressEndValue2){
    clearInterval(progress2);
}    
}, speed);

let circularProgress3 = document.querySelector(".circular-progress3"),
progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,    
progressEndValue3 = 70,    
speed3 = 10;

let progress3 = setInterval(() => {
progressStartValue3++;

progressValue3.textContent = `${progressStartValue}%`
circularProgress3.style.background = `conic-gradient(#000000 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`

if(progressStartValue3 == progressEndValue3){
    clearInterval(progress3);
}    
}, speed);


let link = document.querySelectorAll('#media');
for(let i=0;i<link.length;i++){
    link[i].addEventListener('click',() =>{
        alert("Ridirecting to an external website.")

    });
}

