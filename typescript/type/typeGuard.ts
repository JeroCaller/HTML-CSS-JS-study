/*
타입 가드(Type Guard): 여러 타입들 중 원하는 타입으로 걸러내는 것.
기존의 typeof(원시 타입 대상), instanceof(객체, 클래스 대상) 라는 자바스크립트에 존재하던 키워드를 이용하여 
타입스크립트에서 여러 타입들 중 원하는 타입으로 걸러낸다. 
*/

type SomeData = string | number;

const mockFunc = (data: SomeData): void => {
  if (typeof data === 'string') {
    console.log(`string 타입입니다.`);
    console.log(`텍스트 길이: ${data.length}`);
  } else {
    console.log(`number 타입입니다.`);
    console.log(`소수점 2자리까지의 수: ${data.toFixed(2)}`);
  }
};

mockFunc('hello');
mockFunc(3.141592);
