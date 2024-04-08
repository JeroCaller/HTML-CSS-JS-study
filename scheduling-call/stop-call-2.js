class StopWatchElement {
    passedSeconds = 0;
    stopwatchId = undefined;

    constructor() {
        this.timeDisplay = document.querySelector('#time-data > p');
        this.pauseButton = document.querySelector('#timer-pause');
    }

    tick() {
        this.timeDisplay.innerHTML = `${this.passedSeconds}`;
        this.passedSeconds += 1;
    }
    
    executeTimer() {
        this.stopwatchId = setInterval(this.tick.bind(this), 1000);
        this.pauseButton.addEventListener('click', () => {
            clearInterval(this.stopwatchId);
        });
    }
}

let stopwatchEle = new StopWatchElement();
stopwatchEle.executeTimer();