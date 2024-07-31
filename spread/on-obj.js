let engDict = {
    '사과': 'apple',
    '바나나': 'banana'
};

let myEngDict = {
    '구조 분해 할당': 'destructuring assignment',
    '사람': 'person',
    ...engDict  // 전개 연산자를 이용하여 내용 복사해 넣음.
};

console.log(myEngDict);
console.log("=================");

myEngDict['사과'] = 'delicious';
// 깊은 복사가 되었는지 확인.
console.log(myEngDict);
console.log(engDict);