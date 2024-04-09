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
        // 아래 줄의 setTimeout을 호출할 때마다 그에 대한 타이머 식별자도 
        // 그 값이 바뀌므로, 이 값을 담는 변수에도 계속 갱신해줘야 제 기능을 한다.
        this.stopwatchId = setTimeout(this.tick.bind(this), 1000); // bind
    }
    
    executeTimer() {
        this.stopwatchId = setTimeout(this.tick.bind(this), 1000); // bind
        this.pauseButton.addEventListener('click', () => {
            clearTimeout(this.stopwatchId);
        });
    }
}

let stopwatchEle = new StopWatchElement();
stopwatchEle.executeTimer();