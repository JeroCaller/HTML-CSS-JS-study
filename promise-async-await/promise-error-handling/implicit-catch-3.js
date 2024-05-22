new Promise((resolve, reject) => {
    setTimeout(() => {
        try{
            throw new Error("여기서 예기치 못한 에러가 발생했다고 가정.");
        } catch (e) {
            console.log("try ~ catch 문에서 에러를 감지함.");
        }
    }, 1000);
}).catch(err => console.log("catch() 메서드에서 에러를 감지하였습니다."));
