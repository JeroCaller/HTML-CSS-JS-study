let source = "i wanna wash the dish in the Washington DC";
let pattern = /wash/ig;

// $& : 패턴과 일치하는 부분 문자열도 $& 위치에 포함시켜 치환한다. 
console.log(source.replace(pattern, "($& and clean)"));

// $` : 패턴과 일치하는 부분 문자열 이전의 모든 문자열을 $` 위치에 삽입하여 치환한다.
console.log(source.replace(pattern, "($` and clean)"));

// $$ : $ 문자 자체를 삽입한다. 
console.log(source.replace(pattern, "($$ and clean)"));

// 원문이 담긴 변수 source 내 값은 변하지 않는다.
console.log(source);