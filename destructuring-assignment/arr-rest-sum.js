function sum(...rest) {
    let total = 0;
    for(let num of rest) {
        total += num;
    }
    return total;
}

// 정해진 개수 없이 무작위의 인자 개수를 지정할 수 있다.
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7));
