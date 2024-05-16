export {sumOneToN, fibonacci};

function sumOneToN(n) {
    let total = 0;
    for(let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

function fibonacci(n) {
    /*
        n : 0 1 2 3 4 5
        f : 0 1 1 2 3 5
    */
    let memo = [0, 1];

    function calc(num) {
        if (num == 0) {
            return 0;
        }
        if (num == 1) {
            return 1;
        }

        if(memo[num] != undefined) {
            return memo[num];
        }

        memo[num] = calc(num-1) + calc(num-2);
        return memo[num];
    }

    return calc(n);
}
