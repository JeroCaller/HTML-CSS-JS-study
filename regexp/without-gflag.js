let source = "i wanna wash the dish in the Washington DC";
let result = source.match(/wash/i);
console.log(result);
console.log(typeof result);
console.log(result[0]); // 패턴과 일치하는 문자열 내 첫 번째 부분 문자열
console.log(result.length);
console.log(result.index); // 검색된 부분 문자열의 위치
console.log(result.input);  // 원문