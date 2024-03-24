class User {
    constructor(nickname, age, langs) {
        this.nickname = nickname;
        this.age = age;
        this.langs = langs;
        this.isYourself = true;
    }
}

class UserJson {
    constructor(nickname, age, langs) {
        this.nickname = nickname;
        this.age = age;
        this.langs = langs;
        this.isYourself = true;
    }

    toJSON() {
        return this.nickname;
    }
}

let me = new User("good123", 27, ["python", "js", "java", "html", "css"]);
let meToJson = new UserJson("good123", 27, ["python", "js", "java", "html", "css"]);

console.log(JSON.stringify(me));
console.log(JSON.stringify(meToJson));