function getRandIntFromNums(n, r) {
    /*
        n : 정수
        1부터 n까지의 정수들 중 r개의 중복없는 정수들을 무작위로 
        뽑아 배열로 반환하는 함수. 
    */
    let result = [];
    let numbers = Array(n).fill(0).map((_, idx) => idx + 1);

    function getRandomInt(minInt, maxInt) {
        /*
            minInt, maxInt: 정수
            주어진 정수 범위 내에서 무작위로 정수 하나를 추출하여 반환하는 함수. 
            minInt, maxInt도 범위에 포함된다. 
        */
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

let lotto = getRandIntFromNums(45, 6);
console.log(lotto);
