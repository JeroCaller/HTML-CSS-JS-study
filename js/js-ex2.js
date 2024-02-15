// 객체로 복사
let arr = [1, 2, 3, 4, 5];
let someVar = {...arr};
console.log(someVar);
console.log(typeof someVar);

// 배열로 복사.
let arr2 = [...arr];
arr2[2] = 12;
console.log(arr2);
console.log(arr);

// 함수 인자로 전달
function getTotal(a, b, c) {
    return a + b + c;
}
console.log(getTotal(...[1, 2, 3]));