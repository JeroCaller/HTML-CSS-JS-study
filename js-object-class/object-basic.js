// 객체 리터럴 문법으로 객체 생성.
let siteUser = {
    nickname: "sunandstar11",
    age: 25,
    job: "IT dev",
    "is VIP": true,  // 프로퍼티 키 이름에 띄어쓰기를 쓰고자 한다면 반드시 따옴표로 감싸야함.
    something: "good", 
    // 객체 내 메서드 정의. 
    getAdd: function(a, b) {
        return a + b;
    },
};

// 객체의 프로퍼티 접근.
console.log(siteUser.nickname);
// 프로퍼티 키의 이름에 띄어쓰기가 되어있다면 접근 시 대괄호와 그 안에 따옴표를 이용하여 접근.
// 이러한 접근법을 "대괄호 표기법(square bracket notation)"이라 한다. 
console.log(siteUser["is VIP"]);

siteUser["age"] = 26; // 대괄호 표기법으로 객체 내 프로퍼티에 접근하여 그 값을 변경시킬 수 있다.
console.log(siteUser["age"]); 

// 객체에 새로운 프로퍼티 추가.
siteUser.moneyPoint = 1000;
console.log(siteUser.moneyPoint);

// 객체 내 프로퍼티 삭제.
delete siteUser.something;
console.log(siteUser.something);

// 객체 내 메서드 호출.
console.log(siteUser.getAdd(1, 2));