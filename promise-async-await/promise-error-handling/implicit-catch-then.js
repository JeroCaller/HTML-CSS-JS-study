new Promise((resolve, reject) => {
    resolve('hi');
}).then((result) => {
    thereIsNoSuchThisFunc();  // 존재하지 않는 함수 호출 => ReferenceError
}).catch(err => console.log("에러가 발생했습니다."));
