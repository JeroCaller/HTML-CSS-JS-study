// as : 타입 단언 (Type Assertion)
let username = 'kimquel' as string;

// =====

// Typescript 도입 전
/*
const myInfo = {};
myInfo.name = 'typeson';
myInfo.age = 20;
*/

// Typescript 도입 후 
interface User {
  name: string;
  age: number;
}

/*
const myInfo: User = {};  // 에러. 타입 선언과 동시에 객체 내에 해당 속성들이 정의되어 있어야 함. 
myInfo.name = 'typeson';
myInfo.age = 20;
*/

// 기존 바닐라 자바스크립트의 코드를 거의 건드리지 않고서도 타입을 지정할 수 있다. 
const myInfo = {} as User;
myInfo.name = 'typeson';
myInfo.age = 20;

console.log(myInfo);

/*
이처럼 as 키워드로 대표되는 Type Assertion은 주로 다음의 상황에서 사용하는 것이 좋다.
1. 타입스크립트 컴파일러보다 개발자가 특정 변수에 어떤 타입이 들어가야할지 더 잘 알고 있는 경우.
2. 기존에 자바스크립트로만 작성된 코드에 타입스크립트로 마이그레이션할 경우. 
*/