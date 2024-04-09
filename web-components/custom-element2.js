class StopWatchElement extends HTMLElement {
    passedSeconds = 0;
    stopwatchId;

    render() {
        this.stopwatchId = setTimeout(this.tick.bind(this), 1000);
    }

    tick() {
        this.innerHTML = this.passedSeconds;
        this.passedSeconds += 1;
        this.stopwatchId = setTimeout(this.tick.bind(this), 1000);
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ["ispaused"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "ispaused") {
            if (newValue === "true") {
                clearTimeout(this.stopwatchId);
            } else if(oldValue === "true" && newValue === "false") {
                this.render();
            }
        }

        console.log("=================");
        console.log(`name: ${name}`);
        console.log(`oldValue: ${oldValue}`);
        console.log(`newValue: ${newValue}`);
        console.log("=================");
        /*
        // 버그 코드. 버튼을 누르면 오히려 2씩 증가하는 괴이한 현상 발생.
        if(this.getAttribute("ispaused") === "true") {
            clearTimeout(this.stopwatchId);
        } else {
            this.render();
        }*/
    }
}

customElements.define("stop-watch", StopWatchElement);
