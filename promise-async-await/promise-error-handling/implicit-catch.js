// 명시적 try ~ catch가 없는 경우.
new Promise((resolve, reject) => {
    class EmtpyClass {}
    let empty = new EmtpyClass();
    empty.good();  // 존재하지 않는 메서드 호출 => TypeError
}).catch(err => console.log("에러가 발생했습니다."));

// 명시적으로 try ~ catch 구문을 넣은 경우.
new Promise((resolve, reject) => {
    class EmtpyClass {}
    let empty = new EmtpyClass();
    try {
        empty.good();
    } catch(e) {
        reject(e);
    }
}).catch(err => console.log("에러가 발생했습니다."));
