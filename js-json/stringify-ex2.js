class User {
    constructor(nickname, age, langs) {
        this.nickname = nickname;
        this.age = age;
        this.langs = langs;
        this.isYourself = true;
    }

    printProfile() {
        console.log("====== 사용자 정보 ======");
        console.log("사용자 ID : " + this.nickname);
        console.log("나이 : " + this.age);
        console.log("프로그래밍 언어 : " + this.langs);
        console.log("본인 인증 : " + this.isYourself);
        console.log("========================");
    }
}

let myInfo = new User("good123", 27, ['java', 'python', 'html', 'css', 'js']);
let json = JSON.stringify(myInfo, null, 2);
console.log(json);