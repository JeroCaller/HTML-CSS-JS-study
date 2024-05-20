class User {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

export const database = [
    new User('자바스', 20, '웹 개발자'), 
    new User('파이썬', 25, '데이터 분석가'),
    new User('나자바', 28, '백엔드 개발자'),
    new User('김백수', 30, '무직')
];

export function printData(dataObj) {
    try {
        console.log("===== 사용자 정보 =====");
        console.log(`이름 : ${dataObj.name}`);
        console.log(`나이 : ${dataObj.age}`);
        console.log(`직업 : ${dataObj.job}`);
    } catch (e) {
        if (e instanceof TypeError) {
            console.log("에러: 사용자 정보를 읽어올 수 없었습니다.");
        } else {
            console.log("알 수 없는 예외 발생. 다음은 해당 에러 메시지입니다.");
            console.log(e);
        }
    }
}