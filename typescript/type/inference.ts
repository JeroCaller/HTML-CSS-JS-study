// 타입 추론 심화 자료
// https://www.typescriptlang.org/docs/handbook/type-inference.html

/*
사실 개발자가 따로 타입을 지정하지 않더라도 
타입스크립트가 알아서 타입 추론(Type Inference)을 한다. 
아래 oneNum 변수는 자동으로 number라는 타입으로 추론한다. 
VSCode와 같은 IDE에서 해당 변수 이름 위에 마우스 커서를 올리면 뜨는 
프리뷰 설명을 통해 이를 확인할 수 있다. 
*/
let oneNum = 123;

/*
Best Common Type) 배열과 같이 하나의 변수에 여러 요소들을 포함할 수 있는 
자료구조 형태의 데이터가 들어오고, 개발자가 해당 변수에 별도로 타입을 지정
하지 않았다면, 타입스크립트에서는 전체 요소들 중 가장 공통점이 많은 타입을 
해당 변수의 타입으로 추론한다.
아래 변수의 경우, number 타입이 가장 많으므로 arr 변수는 number 타입으로 
추론된다. 
*/
let arr = [0, 1, null];

/*
아래 변수의 경우 모든 요소의 타입의 종류가 어느 한 쪽이 많지 않고 골고루 있으므로 
(number | string | boolean)[] 형태의 타입으로 추론된다. 
*/
let arr2 = [0, '1', true];