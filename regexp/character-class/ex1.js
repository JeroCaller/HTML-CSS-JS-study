let source = "(info)123456-?xxxyyy";
let regexp = /\d/g;
let result = source.match(regexp);
console.log(result);

// 결과로 나온 숫자들의 배열을 합쳐 일련번호로 만든다.
console.log(result.join(''));