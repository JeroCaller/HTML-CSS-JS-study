/*
    css 스타일 코드 내에서 16진수로 나타낸 rgb hex code 값 찾기.
*/
let source = `<style>
    div {
        background-color: #123456;
    }
</style>`;
let pattern = `#`;
for (let i = 0; i < 6; i++) {
    pattern += `\\p{Hex_Digit}`;
}
pattern += `;`;
console.log(pattern);
let regexp = new RegExp(pattern, "u");
console.log(source.match(regexp));