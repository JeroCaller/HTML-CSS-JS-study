let rankNum = {
    "3": "duck",
    "5": "lion",
    "1": "tiger",
    "12": "snake",
    "2": "cat",
};

let rankAlp = {
    b: "elephant",
    e: "giraffe",
    d: "dog",
    a: "crocodile",
};

function printAndIterObj(obj) {
    for (let prop in obj) {
        console.log(`${prop} : ${obj[prop]}`);
    }
}

printAndIterObj(rankNum);
console.log("==========");
printAndIterObj(rankAlp);