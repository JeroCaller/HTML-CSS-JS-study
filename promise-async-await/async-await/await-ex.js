async function someFunc() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('hello world!'), 1000);
    });
    let result = await promise;
    // 이 아래 부분은 then 핸들러 구역과 마찬가지
    console.log("실행 결과: " + result);
    console.log("실행 완료");
    // then 구역 끝
}

someFunc();
console.log("비동기 함수 바깥에서 인사올립니다.");