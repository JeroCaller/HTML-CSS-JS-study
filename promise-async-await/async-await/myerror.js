export class ZeroDivisionError extends Error {
    constructor(message) {
        super(message);
        this.name = "ZeroDivisionError";
    }
}

export class NotNumberError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotNumberError";
    }
}
