const watch = document.querySelector('#watch');
let milliseconds = 0;
let timer;

function startWatch() {
    watch.classList.remove('paused');
    clearInterval(timer);
    timer = setInterval(() => {
        milliseconds += 10;
        let dateTimer = new Date(milliseconds);
        watch.innerHTML =
            ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }, 10);
};
// let milliseconds = 0;
// let previousTime = null;

// function updateTimer(timestamp) {
//     if (!previousTime) previousTimeStamp = timestamp;
//     const elapsed = timestamp - previousTime;
//     milliseconds += elapsed;

//     let dateTimer = new Date(milliseconds);
//     watch.innerHTML =
//         ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
//         ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
//         ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
//         ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);

//     previousTime = timestamp;
//     requestAnimationFrame(updateTimer);
// }


// Start the timer
// requestAnimationFrame(updateTimer);


function pauseWatch() {
    watch.classList.add('paused');
    clearInterval(timer);
};

function resetWatch() {
    watch.classList.remove('paused');
    clearInterval(timer);
    milliseconds = 0;
    watch.innerHTML = '00:00:00:00';
};

document.addEventListener('click', (e) => {
    const element = e.target;
    if (element.id === 'start') startWatch();
    if (element.id === 'pause') pauseWatch();
    if (element.id === 'reset') resetWatch();
});