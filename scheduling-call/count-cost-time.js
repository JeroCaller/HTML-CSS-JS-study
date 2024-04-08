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
    console.log(`함수 실행 시간 : ${(timeEnd - timeStart) / 1000}초`);
    return result;
}

let userN = 1000000000;
//console.log(getTotal(1000000000));
console.log(calculateFuncTime(getTotal, userN));