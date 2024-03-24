let myInfo = {
    nickname: "good",
    age: 27,
    isYourself: true,
    langs: ['java', 'python', 'html', 'css', 'js'],
};

let json = JSON.stringify(myInfo);

console.log(typeof json);
console.log(json);