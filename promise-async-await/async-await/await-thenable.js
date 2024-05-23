class MyThenable {
    constructor(name) {
        this.name = name;
    }

    then(resolve, reject) {
        setTimeout(() => resolve(this.name), 1000);
    }
}

async function introduceMyself(yourName) {
    let result = await new MyThenable(yourName);
    console.log(`안녕하신가, ${result}!`);
}

introduceMyself('자바스');