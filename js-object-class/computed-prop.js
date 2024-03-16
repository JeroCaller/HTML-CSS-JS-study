let someVarName = "good";
let someObj = {
    [someVarName]: "bad",
    ["wow"]: 12,
};

console.log(someObj.good);
console.log(someObj.wow);