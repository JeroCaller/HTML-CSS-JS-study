import { increaseNum, getPromise } from "./prom-pkg.js";

let promise = getPromise();
let then1 = promise.then((num) => increaseNum(num));
let then2 = then1.then((num) => increaseNum(num));
then2.then(() => {
    console.log("변수 출력 결과들");
    console.log(promise);
    console.log(then1);  // Promise { 11 }
    console.log(then2);  // Promise { 12 }

    console.log(promise === then1);
    console.log(promise === then2);
    console.log(then1 === then2);
});
