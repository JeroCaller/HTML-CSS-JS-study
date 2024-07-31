let nums = [1, 2, 3];
let deepCopy = [...nums];

function jsonfy(arr) {
    return JSON.stringify(arr);
}

console.log(jsonfy(nums) === jsonfy(deepCopy));
console.log(nums === deepCopy);