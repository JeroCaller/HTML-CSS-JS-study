const sum = (a: number, b: number): number => {
  return a + b;
};

const sum2 = (a: number, b?: number): number => {
  return a + b;
};

const sum3 = (a: number, b: number = 10): number => {
  return a + b;
}

console.log(sum(1, 2));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum2(1));
console.log(sum3(5));

console.log('=====================');

const addAll = (...nums: Array<number>): number => {
  let total = nums.reduce((prev, current) => prev + current);
  return total;
}

console.log(addAll(1, 2, 3));
console.log(addAll(1));
console.log(addAll(1, 2, 3, 4, 5));
