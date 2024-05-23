async function someFunc() {
    return 'hi';
}

console.log(someFunc());
someFunc().then(result => console.log(result + " there!"));