let user = {
    nickname: "bowWow2024",
    pointMoney: 1000,
    // 일반적인 메서드 정의 방법. (함수 표현식)
    getMinus: function(a, b) {
        return a - b;
    },
    // 메서드 단축 구문으로 메서드 정의.
    getAdd(a, b) {
        return a + b;
    },
};

// user 객체 내 메서드 정의 및 printProfile 프로퍼티에 할당.
user.printProfile = function() {
    console.log("===== 사용자 프로필 =====");
    // this는 메서드 호출 시 해당 메서드가 속한 객체를 의미.
    console.log(`닉네임 : ${this.nickname}`);
    console.log(`보유 포인트 : ${this.pointMoney}`);
    console.log("=======================");
};

function getSumOneToN(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// 이미 선언된 함수를 객체의 메서드로 할당 가능.
user.getSumOneToN = getSumOneToN;

user.printProfile();
console.log(user.getAdd(3, 4));
console.log(user.getMinus(3, 4));
console.log(user.getSumOneToN(user.pointMoney));