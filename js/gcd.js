// 두 수의 최대공약수 (The Greatest common divisor) 구하기.

function getDivisors(n) {
    // 하나의 수를 받으면 그 수의 약수들을 반환하는 함수.
    let result = [];
    let rootN = Math.floor(Math.sqrt(n));
    for(let i = 1; i <= rootN; i++) {
        if (n % i == 0) {
            result.splice(result.length, 0, i, n / i);
        }
    }
    result.sort((a, b) => a - b);
    return result;
}

function gcd(a = 10, b = 15) {
    let aSet = new Set(getDivisors(a));
    let bSet = new Set(getDivisors(b));
    let commonDivisors = new Set([...aSet].filter((value) => bSet.has(value)));
    return Math.max(...commonDivisors);
}

console.log(gcd(12, 18));
console.log(gcd());