import { ZeroDivisionError } from "./myerror.js";

function getDivide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new ZeroDivisionError("0으로 나누는 연산은 불가합니다."));
        } else {
            resolve(a / b);
        }
    });
}

getDivide(1, 0)
.then(num => console.log("나눗셈 결과: " + num))
.catch(err => {
    console.log("프로미스 처리 중 에러가 발생했습니다. 다음은 에러 메시지입니다.");
    console.log(err);
    console.log("==========================================");
});
