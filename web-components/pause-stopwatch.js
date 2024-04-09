class pauseStopWatch {
    constructor() {
        this.pauseButton = document.querySelector('#pause-stopwatch');
        this.stopwatch = document.querySelector('#my-stopwatch');
        this.pauseStopWatchEvent();
    }

    pauseStopWatchEvent() {
        this.pauseButton.addEventListener("click", () => {
            clearTimeout(this.stopwatch.stopwatchId);
        })
    }
}

new pauseStopWatch();