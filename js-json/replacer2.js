let myInfo = {
    nickname: "good",
    age: 27,
    isYourself: true,
    langs: ['java', 'python', 'html', 'css', 'js'],
};

let json = JSON.stringify(myInfo, function replacer(key, value) {
    return (key == 'isYourself') ? undefined : value;
});

console.log(json);