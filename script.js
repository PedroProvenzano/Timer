const timer = document.getElementById('timer');
const botonPlay = document.getElementById('botonPlayTimer');
const botonStop = document.getElementById('botonStopTimer');
const botonReset = document.getElementById('botonResetTimer');

botonPlay.addEventListener('click', () => {
    let firstDate = new Date();
    let intervalTimes = setInterval(() => {
        let secondDate = new Date();
        let realHour = {
            hour: ("0" + Math.abs(firstDate.getHours() - secondDate.getHours())).slice(-2),
            minutes: ("0" + Math.abs(firstDate.getMinutes() - secondDate.getMinutes())).slice(-2) ,
            seconds: ("0" + Math.abs(firstDate.getSeconds() - secondDate.getSeconds())).slice(-2),
            miliseconds: ("0" + Math.abs(firstDate.getMilliseconds() - secondDate.getMilliseconds())).slice(-2)
        }
        timer.innerText = `${realHour.hour}:${realHour.minutes}:${realHour.seconds}:${realHour.miliseconds}`
    }, 10);
    botonStop.addEventListener('click', () => {
        clearInterval(intervalTimes);
        botonStop.removeEventListener('click',this);
    });
});
botonReset.addEventListener('click', () => {
    timer.innerText = '00:00:00:00';
});
