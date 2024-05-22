import {increaseNum, getPromise} from './prom-pkg.js';

// 프로미스 체이닝.
getPromise()
.finally(() => console.log("체이닝 출력 결과"))
.then((num) => increaseNum(num))
.then((num) => increaseNum(num))
.then((num) => increaseNum(num))
.finally(() => console.log("=========="));

// 다음은 프로미스 체이닝이 아니다. 
let promise2 = getPromise();
promise2.then((num) => increaseNum(num));
promise2.then((num) => increaseNum(num));
promise2.then((num) => increaseNum(num));
