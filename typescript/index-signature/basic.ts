/* 
인터페이스에 정의된 프로퍼티 말고도 개발자가 프로퍼티들을 임의로 추가하고자 할 경우, 
[propName: string]: any; 와 같이 인덱스 시그니처(Index signature)를 이용한다.

인덱스 시그니처는 `key: value` 형태의 프로퍼티를 가지는 객체 리터럴에 대해, 
해당 객체에서 미리 정해지지 않은 프로퍼티의 key와 value의 타입을 지정할 때 쓰임. 

key 타입에는 string, number, symbol, template string pattern 또는 이 타입들의 union 타입만 
가능함. 


인덱스 시그니처 관련 자료)
https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
https://velog.io/@ahsy92/TypeScript-%EC%9D%B8%EB%8D%B1%EC%8A%A4-%EC%8B%9C%EA%B7%B8%EB%8B%88%EC%B2%98
*/

// interface에서 정의한 프로퍼티 외 다른 프로퍼티까지 추가하고자 하는 경우 사용 가능.
interface BusinessCard {
  name: string;
  phone: string;
  job: string;
  hasThisCard: boolean;
  [propNames: string]: any;  // 예) obj.name = obj["name"]  // 객체 속성 key는 이렇게 string으로도 나타낼 수 있다.
}

const kimquel: BusinessCard = {
  name: 'kimquel',
  phone: '000-1111-2222',
  job: 'Backend Developer',
  hasThisCard: true,
  companyName: 'kimDB'  // 추가
};
console.log(kimquel);


// ======
// 배열 요소 타입 지정 가능.
interface stringArray {
  // 배열 인덱스는 숫자이므로 number로 지정하였고, 배열 요소(key에 대한 value)는 string 타입임.
  [index: number]: string;
}

const myArr: stringArray = ['5', '3', '12'];
myArr[2] = '4';
console.log(myArr);
console.log(myArr[1]);

// ===============
interface MyObj {
  [propName: string]: string;
  age: number;  // 위의 index signature의 value 타입과 맞춰야 함. age: string 이어야 함.
  // 이러한 에러를 피하고자 한다면 [propName: string]: any와 같이 어떤 타입이 오게끔 할 수도 있다. 
}
