/**
 * 주어진 정수 범위 내에서 무작위로 정수 하나를 추출하여 반환하는 함수. 
   minInt, maxInt도 범위에 포함된다.
 * @param {number} minInt
 * @param {number} maxInt
 * @returns {number}
*/
export function getRandomInt(minInt, maxInt) {
    let range = maxInt - minInt + 1;
    return Math.floor(Math.random() * range) + minInt;
}

export let hello = 'hello, world!';
