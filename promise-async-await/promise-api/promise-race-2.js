let files = [
    ['안내서.txt', 1],
    ['코딩 잘하는 법.pdf', 3],
    ['로드맵.jpg', 2]
];

function download(filePath, delaytime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delaytime == 1) {  // 가장 빠른 처리된 프로미스가 에러일 경우를 보기 위해 일부러 이렇게 함.
                reject(new Error("3초 이상은 못 기다린다!"));
            }
            resolve(filePath);
        }, delaytime * 1000);
    });
}

let requests = files.map(elements => download(elements[0], elements[1]));

// 가장 빨리 처리된 프로미스가 거절된 프로미스일 경우에도 그 에러가 
// 고스란히 출력된다.
Promise.race(requests)
    .then(result => console.log(result));