/**
 * 난수 생성 관련 함수 모음.
*/

/**
 * 주어진 정수 범위 내에서 무작위로 정수 하나를 추출하여 반환하는 함수. 
   minInt, maxInt도 범위에 포함된다.
 * @param {number} minInt
 * @param {number} maxInt
 * @returns {number}
*/
function getRandomInt(minInt, maxInt) {
    let range = maxInt - minInt + 1;
    return Math.floor(Math.random() * range) + minInt;
}

/**
 * 주어진 두 실수의 범위 내에서 무작위로 실수 하나를 추출하여 반환하는 함수.
 * minNum, maxInt도 범위에 포함된다. 
 * @param {number | floor} minNum
 * @param {number | floor} maxNum
 * @returns {number | floor}
*/
function getRandomFloat(minNum, maxNum) {
    let range = maxNum - minNum + 1;
    return Math.random() * range + minNum;
}

/** 
 * 1부터 n까지의 정수들 중 r개의 중복없는 정수들을 무작위로 
 * 뽑아 오름차순으로 정렬된 배열로 반환하는 함수. 
 * @param {number} n
 * @param {number} r
 * @returns {number[]}
*/
function getRandIntFromNums(n, r) {
    let result = [];
    let numbers = Array(n).fill(0).map((_, idx) => idx + 1);

    /**
     * 주어진 정수 범위 내에서 무작위로 정수 하나를 추출하여 반환하는 함수. 
       minInt, maxInt도 범위에 포함된다.
     * @param {number} minInt
     * @param {number} maxInt
    */
    function getRandomInt(minInt, maxInt) {
        let range = maxInt - minInt + 1;
        return Math.floor(Math.random() * range) + minInt;
    }

    for(let i = 0; i < r; i++) {
        let target_idx = getRandomInt(0, numbers.length-1);
        result = result.concat(numbers.splice(target_idx, 1));
    }
    result.sort((a, b) => a - b);
    return result;
}

/**
 * 랜덤으로 rgb 값을 정하여 이를 반환하는 함수. 
 * 차례대로 [r, g, b] 순서대로 반환된다. 
 * @returns {number[]}
 */
function getRandomRGB() {
    /**
     * 주어진 정수 범위 내에서 무작위로 정수 하나를 추출하여 반환하는 함수. 
       minInt, maxInt도 범위에 포함된다.
     * @param {number} minInt
     * @param {number} maxInt
     * @returns {number}
     */
    function getRandomInt(minInt, maxInt) {
        let range = maxInt - minInt + 1;
        return Math.floor(Math.random() * range) + minInt;
    }

    let rgb = [0, 0, 0];
    rgb = rgb.map(() => getRandomInt(0, 255));
    return rgb;
}