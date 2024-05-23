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

Promise.race(requests)
    .then(result => console.log(result));