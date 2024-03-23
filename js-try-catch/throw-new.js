function getDivide(a, b) {
    try {
        if(b === 0) {
            throw new Error("0으로 나누는 연산은 불가능합니다.");
        } 
        return a / b;
    } catch(e) {
        console.log("에러 발생!");
        console.log(e);
        console.log(e.name);
        console.log(e.message);
    }
}

let a = 1;
let b = 0;

console.log(getDivide(a, b));