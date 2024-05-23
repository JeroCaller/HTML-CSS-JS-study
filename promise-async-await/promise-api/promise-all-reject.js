let files = [
    ['안내서.txt', 1],
    ['코딩 잘하는 법.pdf', 3],
    ['로드맵.jpg', 2]
];

function download(filePath, delaytime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delaytime >= 3) {
                reject(new Error("3초 이상은 못 기다린다!"));
            }
            resolve(filePath);
        }, delaytime * 1000);
    });
}

let requests = files.map(elements => download(elements[0], elements[1]));

Promise.all(requests)
    .then(result => result.forEach(element => {
        console.log("다운로드 완료: " + element);
    }))
    .catch(error => {
        console.log("에러가 발생했습니다. 다음은 에러 메시지입니다.");
        console.log(error);
        console.log("에러 메시지 끝.");
    });
