function sum(...args) {
    return args.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3));

let nums = [12, 5, 2];

console.log(sum(nums[0], nums[1], nums[2])); // 번거로움...
console.log(sum(...nums));  // spread