const clock = document.querySelector('.time');

function checkTime(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

function startTime(){
    const date = new Date;
    let h = date.getHours();
    let m = date.getMinutes();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = checkTime(m);

    clock.textContent = h + ":" + m + ampm;
    setTimeout(startTime, 1000);
};

window.addEventListener('load', startTime);