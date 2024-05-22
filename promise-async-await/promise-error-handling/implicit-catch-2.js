new Promise((resolve, reject) => {
    setTimeout(() => {
        throw new Error("그냥 에러 발생시켜봄");
    }, 1000);
}).catch(err => console.log("catch() 메서드에서 에러를 감지하였습니다."));

