let source = "i wanna wash the dish in the Washington DC";
console.log(source.match(/\swash\s/ig));

// \w 는 영어를 포함한 라틴 문자 및 숫자, 밑줄(_)만 검색한다. 
// 한글과 같은 비 라틴 문자는 \w에 포함되지 않는다.
let koreanSource = "그럴 수 밖에";
console.log(koreanSource.match(/\s\w\s/ig));

// \W 반대 클래스를 이용하여 한글을 찾는다.
console.log(koreanSource.match(/\s\W\s/ig));