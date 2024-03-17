class Person {
    constructor(name) {
        this.name = name;
        this.skill = undefined;
    }

    vote(target) {
        this.target = target;
        console.log(`${this.name}님이 ${this.target}님에게 투표하였습니다.`);
    }

    useSkill() {
        let skillName = this.skill;
        if (this.skill == undefined) {
            skillName = "";
        }
        console.log(`${this.name}님이 ${skillName} 스킬을 사용하였습니다.`);
    }
}

class Citizen extends Person {
    chat(message) {
        console.log(`[chat] ${this.name} : ${message}`);
    }
}

class Mafia extends Person {
    // constructor overriding
    constructor(name) {
        // super() : 부모 클래스의 생성자 호출. 자식 생성자 내부에서만 사용 가능.
        // 자식 생성자 내부에서 this를 사용하기 전에 반드시 부모 생성자를 호출.
        super(name);  
        this.skill = "밤에 시민 한 명 킬";
    }

    // Method overriding
    useSkill() {
        super.useSkill();  // super.method() : 부모 클래스의 메서드 호출.
        console.log("누군가 밤에 살해당했습니다.");
    }
}

let citizen = new Citizen("난무죄");
let mafia = new Mafia("갱스터");
citizen.vote("갱스터");
citizen.useSkill();
citizen.chat("난 저 사람 의심됨 ㅇㅇ.");

mafia.useSkill();