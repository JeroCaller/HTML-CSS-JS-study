export let user = {
    name: "자바스",
    age: 20,
    job: '웹 개발자',
    printUserInfo() {
        console.log("===== 사용자 정보 =====");
        console.log(`이름: ${this.name}`);
        console.log(`나이: ${this.age}`);
        console.log(`직업: ${this.job}`);
    }
};
