console.log("Before starting to call setTimeout");

let mySchedule = setTimeout((n) => {
    console.log("Hello, world!");
    let total = 0;
    for(let i = 0; i <= n; i++ ) {
        total += i;
    }
    console.log(`total(${n}) = ${total}`);
}, 1000, 10);

console.log(mySchedule);
console.log(typeof mySchedule);
console.log(`${mySchedule}`);