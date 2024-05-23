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

// Promise.allSettled(requests).then(results => console.log(results)); // 테스트용
// 활용 코드
Promise.allSettled(requests)
    .then(results => {
        results.forEach(result => {
            if (result.status == 'fulfilled') {
                console.log("다운로드 성공: " + result.value);
            } else if(result.status == 'rejected') {
                console.log("다운로드 실패: " + result.reason);
            }
        });
    });