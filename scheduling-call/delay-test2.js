function getTotal(n) {
    let total = 0;
    for(let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

function calculateFuncTime(callable, n) {
    let timeStart = Date.now();
    let result = callable(n);
    let timeEnd = Date.now();
    console.log(`함수 실행 결과 : ${result}`);
    console.log(`함수 실행 시간 : ${(timeEnd - timeStart) / 1000}초`);
}

let userN = 1000000000;
let delay = 3000;

setTimeout(function scheFunc() {
    calculateFuncTime(getTotal, userN);
    setTimeout(scheFunc, delay);
}, delay);