export function increaseNum(num) {
    let increased = num + 1;
    console.log("증가된 수: " + increased);
    return increased;
}

export function getPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 1000);
    });
}
