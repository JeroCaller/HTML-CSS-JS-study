const siteUser = {
    nickname: "sunandstar11",
    age: 25,
    job: "IT dev",
    "is VIP": true,
    something: "good",  
    getAdd: function(a, b) {
        return a + b;
    },
};

siteUser.nickname = "moon";
console.log(siteUser.nickname);

// 에러.
// siteUser = 12;
// console.log(siteUser);