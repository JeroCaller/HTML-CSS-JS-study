function User(nickName, pointMoney) {
    // this = {}; 빈 객체 임시 생성.

    // 객체 프로퍼티 정의
    this.nickName = nickName;
    this.pointMoney = pointMoney;

    // 메서드 정의
    this.printProfile = function() {
        console.log("===== 사용자 프로필 =====");
        // this는 메서드 호출 시 해당 메서드가 속한 객체를 의미.
        console.log(`닉네임 : ${this.nickName}`);
        console.log(`보유 포인트 : ${this.pointMoney}`);
        console.log("=======================");
    };

    // return this;  this가 암묵적으로 반환됨.
};

// 생성자 함수에 new 키워드를 이용하여 객체 생성 및 변수에 할당.
let user1 = new User("bowWow2024", 1000);
let user2 = new User("Hamburger11", 2000);

user1.printProfile();
user2.printProfile();