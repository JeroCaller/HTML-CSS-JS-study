class pauseStopWatch {
    constructor() {
        this.pauseButton = document.querySelector('#pause-stopwatch');
        this.stopwatch = document.querySelector('#my-stopwatch');
        this.pauseStopWatchEvent();
    }

    pauseStopWatchEvent() {
        this.pauseButton.addEventListener("click", () => {
            if(this.stopwatch.getAttribute("ispaused") === "false") {
                // 시계 정지
                this.pauseButton.setAttribute("value", "restart");
                this.stopwatch.setAttribute("ispaused", "true");
            } else {
                // 시계 재작동
                this.pauseButton.setAttribute("value", "pause");
                this.stopwatch.setAttribute("ispaused", "false");
            }
        })
    }
}

new pauseStopWatch();