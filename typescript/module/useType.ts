import { MySiteUser } from './setType.js';

// es6로 컴파일된 자바스크립트가 의도대로 동작하려면
// package.json에 "type": "module"로 지정하여 ESM 방식의 모듈러라는 걸 설정해야 한다.

const me: MySiteUser = {
  username: 'typeson',
  age: 33
};

console.log(me);