function someFunc() {
    try {
        return "hi";
    } catch(e) {
        console.log("에러 발생");
    } finally {
        console.log("드디어, 마침내!");
    }
}

console.log(someFunc());