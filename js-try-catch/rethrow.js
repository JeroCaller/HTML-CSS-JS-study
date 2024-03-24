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

function getDivide(a, b) {
    if(b === 0) {
        throw new ZeroDivisionError("0으로 나눌 수 없습니다.");
    }
    return a / b;
}

function execute(myObj) {
    try {
        let [a, b] = myObj.getTwoNums();
        return getDivide(a, b);
    } catch(e) {
        if(e instanceof ZeroDivisionError) {  // instanceof로 예외 종류 파악.
            console.log("에러 발생! 0으로 나눌 수 없습니다.");
        } else {
            throw e;  // rethrowing
        }
    }
}

// ZeroDivisionError 외에 예상치 못한 예외 처리.
try {
    let result = execute(new MyNumbers(1, 0));
    console.log(result);
} catch(e) {
    console.log("에러 발생! 다음은 에러 상세 메시지입니다.");
    console.log(e);
}