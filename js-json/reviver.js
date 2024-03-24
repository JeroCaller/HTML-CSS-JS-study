let myInfoJson = `{
    "nickname": "good",
    "age": 27,
    "isYourself": true,
    "langs": ["java", "python", "html", "css", "js"]
}`;

let myInfo = JSON.parse(myInfoJson, function(key, value) {
    if (key == 'langs') {
        class LangObj {
            constructor(val) {
                this.langs = val;
            }

            printLangs() {
                console.log("=== 사용 프로그래밍 언어 ===");
                console.log(this.langs);
                console.log("===========================")
            }
        }
        return new LangObj(value);
    }
    return value;
});

myInfo.langs.printLangs();

//let myInfo2 = JSON.parse(myInfoJson);
//console.log(typeof myInfo2.langs);
//console.log(myInfo2.langs);
//myInfo2.langs.printLangs();