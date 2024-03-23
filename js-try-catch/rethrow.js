class ZeroDivisionError extends Error {
    constructor(message) {
        super(message);
        this.name = "ZeroDivisionError";
    }
}

class MyNumbers {
    constructor(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }

    getTwoNums() {
        return [this.n1, this.n2];
    }
}

function execute(myObj) {
    try {
        let [a, b] = myObj.getTwoNums();
    }
}

execute(new MyNumbers(1, 2));