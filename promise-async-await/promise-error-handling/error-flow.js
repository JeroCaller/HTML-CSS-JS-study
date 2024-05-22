new Promise((resolve, reject) => {
    resolve('good');
}).catch(err => {
    console.log("에러 영역1: 에러 발생");
}).then(result => {
    throw new Error("그냥 에러 내봄");
}).catch(err => {
    console.log("에러 영역2: 에러 발생");
    console.log(err.message);
});