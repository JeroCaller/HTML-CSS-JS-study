import { ZeroDivisionError } from "./myerror.js";

async function printDivideResult(a, b) {
    let promise = new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new ZeroDivisionError("0으로 나눌 수 없습니다."));
        }
        resolve(a / b);
    });
    let result = await promise;
    console.log("나눗셈 결과");
    console.log(`${a} / ${b} = ${result}`);
}

printDivideResult(2, 0).catch(() => console.log("에러가 발생했습니다."));