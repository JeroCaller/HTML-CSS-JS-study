function someFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('hello world!'), 1000);
    })
}

someFunc().then(result => {
    console.log("실행 결과: " + result);
    console.log("실행 완료");
});
console.log("비동기 함수 바깥에서 인사올립니다.");