// promise 선언. 제작 코드(producing code)
let promise = new Promise((resolve, reject) => {
    let isSuccess = false;  // 원하는 결과값에 따라 true/false 중 하나 지정.
    if (isSuccess) {
        setTimeout(() => resolve("작업이 성공적으로 완료되었습니다."), 1000);
    } else {
        setTimeout(() => reject("작업 도중 에러가 발생했습니다."), 1000);
    }
});

// promise 사용. 소비 코드(consuming code)
// then(promise 실행 결과가 성공했을 때 호출할 콜백, 실패(에러 발생)했을 때 호출할 콜백)
promise.then(
    result => {
        console.log("====== Phase 1 ======");
        console.log(result);
    },
    error => {
        console.log("====== Phase 1 ======");
        console.log(error);
    }
);

// catch(errorHandlingFunc) == then(null, errorHandlingFunc)
promise.catch(error => {
    console.log("====== Phase 2 ======");
    console.log(error);
});

// finally(function) : 프로미스 실행 결과가 성공이든 실패건 무조건 실행됨.
promise
    .finally(() => console.log("====== Phase 3 ======"))
    .finally(() => console.log("프로미스가 실행되어 결과를 반환했습니다."))
    .then(
        result => console.log(result),
        error => console.log(error)
    )
    .finally(() => console.log("프로미스 사용이 완료되었습니다."));

console.log(promise === promise.then(() => {}, () => {}));
