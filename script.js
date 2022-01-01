const minute = document.querySelector('#min');
const sec = document.querySelector('#sec');
const millisec = document.querySelector('#millisec');
const start = document.querySelector('#btn-start');
const lap = document.querySelector('#btn-lap');
const stop = document.querySelector('#btn-stop');
const reset = document.querySelector('#btn-reset');
const list = document.querySelector('#lap-list');

let ms = 0;
let s = 0;
let min = 0;
let id = 1;
let interval;
let stopTime = true

function startTime(){
    ms ++;
    millisec.innerHTML =  ms.toString().padStart(2,0) || ms;
    if(ms >= 99 ) {
        ms = 0;
        s++;
    }
    sec.innerHTML = s.toString().padStart(2,0) || s
    if(s > 59) {
        s = 0;
        min++;
    }
    minute.innerHTML = min.toString().padStart(2,0) || min
    // console.log(typeof millisec.innerHTML)
}

function getTime(){
   let ms = millisec.innerHTML;
   let s = sec.innerHTML;
   let min = minute.innerHTML;
    return `${min}:${s}:${ms}`
}

start.addEventListener('click', () => {
    if(stopTime) {
        interval =  setInterval(startTime,10);
        stopTime = false;
    }
});

lap.addEventListener('click',function(){
    if(getTime() !== '00:00:00'){
    list.classList.remove('hidden');   
    const lap = document.createElement('div');
    const timeNow = document.createElement('p');
    const lapId = document.createElement('p');
    list.appendChild(lap);
    lap.append(lapId, timeNow);
    lapId.innerHTML= `#${id}`;
    timeNow.innerHTML= ` ${getTime()}`;
    lap.setAttribute('id',`lap`);
    id++
    }
})

stop.addEventListener('click',function(){
    clearInterval(interval);
    stopTime = true; 
})

reset.addEventListener('click', function(){
    clearInterval(interval);
    stopTime = true; 
    ms = 0;
    s = 0;
    min = 0;
    id = 1 ;
    millisec.innerHTML = '00';
    sec.innerHTML = '00';
    minute.innerHTML = '00';
    list.innerHTML = `<h2>Laps</h2>`;
    list.classList.add('hidden'); 
})