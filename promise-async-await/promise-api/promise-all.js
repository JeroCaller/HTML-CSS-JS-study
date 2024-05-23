let files = [
    ['안내서.txt', 1],
    ['코딩 잘하는 법.pdf', 3],
    ['로드맵.jpg', 2]
];

function download(filePath, delaytime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(filePath), delaytime * 1000);
    });
}

let requests = files.map(elements => download(elements[0], elements[1]));

Promise.all(requests)
    .then(result => result.forEach(element => {
        console.log("다운로드 완료: " + element);
    }));
