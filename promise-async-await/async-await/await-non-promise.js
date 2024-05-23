async function someFunc() {
    let someVar = await 'hi, there!';
    console.log(someVar);
}

async function otherFunc() {
    let someVar = await new Promise((resolve, reject) => {
        resolve('hi, there!');
    });
    console.log(someVar);
}

someFunc();
otherFunc();