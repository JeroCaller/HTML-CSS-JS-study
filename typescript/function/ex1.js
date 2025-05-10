const sum = (a, b) => {
    return a + b;
};
const sum2 = (a, b) => {
    return a + b;
};
const sum3 = (a, b = 10) => {
    return a + b;
};
console.log(sum(1, 2));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum2(1));
console.log(sum3(5));
console.log('=====================');
const addAll = (...nums) => {
    let total = nums.reduce((prev, current) => prev + current);
    return total;
};
console.log(addAll(1, 2, 3));
console.log(addAll(1));
console.log(addAll(1, 2, 3, 4, 5));
