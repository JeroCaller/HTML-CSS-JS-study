// 주어진 수 n의 약수 구하기.
var n = 12;
var rootN = Math.floor(Math.sqrt(n));
var i = 1;
var result = [];

while(rootN >= i) {
    if (n % i == 0) {
        result.splice(result.length, 0, n / i, i);
    }
    i++;
}

result.sort((a, b) => a - b);
console.log(result);