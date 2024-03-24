let myInfoJson = `{
    "nickname": "good",
    "age": 27,
    "isYourself": true,
    "langs": ["java", "python", "html", "css", "js"]
}`;

let toJS = JSON.parse(myInfoJson);

console.log(typeof toJS);
console.log(toJS);