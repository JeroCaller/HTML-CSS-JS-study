function getPromiseWithNum(num) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(num), 1000);
    });
}

getPromiseWithNum(10)
.then((data) => {
    console.log(data);
    return getPromiseWithNum(11);
})
.then((data) => {
    console.log(data);
    return getPromiseWithNum(12);
})
.then((data) => {
    console.log(data);
    return getPromiseWithNum(13);
});
