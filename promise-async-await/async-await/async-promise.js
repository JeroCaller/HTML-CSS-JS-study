async function someFunc() {
    return new Promise((resolve, reject) => {
        resolve('hi');
    });
}

someFunc().then(result => console.log(result + " there!"));