import { ZeroDivisionError, NotNumberError } from "./myerror.js";

function getDivide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new ZeroDivisionError("0으로 나누는 연산은 불가합니다."));
        } else if (typeof a != 'number' || typeof b != 'number') {
            reject(new NotNumberError("숫자가 아닌 값이 입력되었습니다."));
        } else {
            resolve(a / b);
        }
    });
}

getDivide('a', 1)
.catch(error => {
    if (error instanceof ZeroDivisionError) {
        console.log("0으로 나누는 연산 시도 감지.");
        console.log("두 번째 인자는 0이 아닌 다른 수를 입력해주세요.");
    } else {
        console.log("ZeroDivisionError가 아닌 다른 예외 발생");
        throw error;
    }
}).then(result => console.log("나눗셈 결과: " + result))
.catch(error => {
    console.log("처리되지 않은 에러 발생!");
    console.log("다음은 해당 에러에 대한 메세지입니다.");
    console.log(error.name + ": " + error.message);
    console.log("=============================");
});
