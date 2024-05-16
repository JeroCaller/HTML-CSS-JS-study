export default class {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    printDataInfo() {
        console.log("====== 사용자 정보 ======");
        console.log(`이름: ${this.name}`);
        console.log(`나이: ${this.age}`);
        console.log(`직업: ${this.job}`);
    }
}