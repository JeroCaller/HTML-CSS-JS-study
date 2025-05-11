
// keyof : 객체 내 모든 프로퍼티들의 key만을 뽑아 union 타입으로 만들어주는 연산자.
// 예) let data = {a: 1, b: 2} => type keys = keyof data => keys = a | b;
const getValueOfProperty = <O, K extends keyof O>(obj: O, key: K): O[K] => {
  return obj[key];
}

let myObj = {
  a: 1, 
  b: 2,
  c: 3
};

console.log(getValueOfProperty(myObj, 'a'));
console.log(getValueOfProperty(myObj, 'x'));  // Error