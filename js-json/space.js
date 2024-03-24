let myInfo = {
    nickname: "good",
    age: 27,
    isYourself: true,
    langs: ['java', 'python', 'html', 'css', 'js'],
};

let json1 = JSON.stringify(myInfo);
let json2 = JSON.stringify(myInfo, null, 2);
console.log(json1);
console.log(json2);