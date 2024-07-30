/**
 * 정수가 담긴 배열을 오름차순 정렬한다.
 * @param {number[]} arr 
 */
function arrSort(arr) {
    let nums = [...arr];
    let temp;
    for (let j = 0; j < nums.length; j++) {
        for (let i = 0; i < nums.length - j - 1; i++) {
            if (nums[i] > nums[i+1]) {
                temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
            }
        }
    }
    return nums;
}

/**
 * 
 * @param {number[]} arr 
 */
function arrSortWithDA(arr) {
    let nums = [...arr];

    for (let j = 0; j < nums.length; j++) {
        for (let i = 0; i < nums.length - j - 1; i++) {
            if (nums[i] > nums[i+1]) {
                // 배열 구조 분해 할당으로 둘 이상의 변수들의 값을
                // 쉽게 교환할 수 있다. 
                [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
            }
        }
    }
    return nums;
}

let nums = [4, 12, 3, 8, 10, 9]; 
let result;

console.log('original: ', nums);
result = arrSort(nums);
console.log('sorted: ', result);

result = arrSort(nums);
console.log('sorted with destructuring assignment: ', result);

nums.sort((a, b) => a - b);
console.log(`answer: `, nums);