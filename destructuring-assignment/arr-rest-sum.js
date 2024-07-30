function sum(...rest) {
    let total = 0;
    for(let num of rest) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7));
