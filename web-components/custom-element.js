class StopWatchElement extends HTMLElement {
    passedSeconds = 0;
    stopwatchId;

    tick() {
        this.innerHTML = this.passedSeconds;
        this.passedSeconds += 1;
        this.stopwatchId = setTimeout(this.tick.bind(this), 1000);
    }

    connectedCallback() {
        this.stopwatchId = setTimeout(this.tick.bind(this), 1000);
    }
}

customElements.define("stop-watch", StopWatchElement);
