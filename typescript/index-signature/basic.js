/*
인터페이스에 정의된 프로퍼티 말고도 개발자가 프로퍼티들을 임의로 추가하고자 할 경우,
[propName: string]: any; 와 같이 인덱스 시그니처(Index signature)를 이용한다.

인덱스 시그니처는 `key: value` 형태의 프로퍼티를 가지는 객체 리터럴에 대해,
해당 객체의 key와 value의 타입을 지정할 때 쓰임.

key 타입에는 string, number, symbol, template string pattern 또는 이 타입들의 union 타입만
가능함.


인덱스 시그니처 관련 자료)
https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
https://velog.io/@ahsy92/TypeScript-%EC%9D%B8%EB%8D%B1%EC%8A%A4-%EC%8B%9C%EA%B7%B8%EB%8B%88%EC%B2%98
*/
const kimquel = {
    name: 'kimquel',
    phone: '000-1111-2222',
    job: 'Backend Developer',
    hasThisCard: true,
    companyName: 'kimDB' // 추가
};
console.log(kimquel);
const myArr = ['5', '3', '12'];
myArr[2] = '4';
console.log(myArr);
console.log(myArr[1]);
