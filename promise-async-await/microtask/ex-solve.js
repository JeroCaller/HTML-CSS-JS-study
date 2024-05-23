new Promise((resolve, reject) => {
    resolve("hi");
})
.then(result => console.log(result))
.finally(() => console.log("프로그램 종료"));