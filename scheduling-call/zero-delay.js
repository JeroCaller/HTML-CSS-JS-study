setTimeout(() => {console.log('hi')});

function getTotal(n) {
    let total = 0;
    for(let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

let userN = 1000000000;
//userN = 1;
console.log(getTotal(userN));