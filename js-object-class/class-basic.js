// 클래스 선언식
class Person {
    constructor(name, age, phoneNumber) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }

    showProfile() {
        console.log("======= 개인 정보 =======");
        console.log(`이름 : ${this.name}`);
        console.log(`나이 : ${this.age}`);
        console.log(`전화번호 : ${this.phoneNumber}`);
        console.log("========================");
    }
}

// class 문법으로 객체 생성 시, 반드시 new 키워드와 함께 사용해야함.
let james = new Person("James", 34, "1111-2222");
james.showProfile();
console.log(`클래스의 타입은? ${typeof Person}`);

// 클래스 표현식
let Mafia = class {
    fireGun() {console.log("Bang!")}
};
new Mafia().fireGun();