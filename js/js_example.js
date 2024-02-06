let var1 = () => 'Useless function';
let var2 = n => {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
let var3 = (x, y) => x + y;

console.log(var1());
console.log(var2(10));
console.log(var3(2, 3));