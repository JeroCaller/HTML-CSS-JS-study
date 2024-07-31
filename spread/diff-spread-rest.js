let arr = ['a', 'b', 'c', 'd', 'e'];
let [a, b, ...rest] = arr;  // rest

console.log(rest);

// ============
let otherArr = [...arr];  // spread
console.log(otherArr);