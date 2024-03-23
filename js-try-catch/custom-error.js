class MyError extends Error {
    constructor(message) {
        super(message);
        console.log(this.constructor.name);
        console.log(this.constructor.wow);
    }
}

new MyError("");