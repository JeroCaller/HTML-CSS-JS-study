let siteUser = {
    nickname: "sunandstar11",
    age: 25,
    job: "IT dev",
    "is VIP": true,
    something: "good", 
    getAdd: function(a, b) {
        return a + b;
    },
};

console.log("age" in siteUser);
console.log("a" in siteUser);
let strVar = "job";
console.log(strVar in siteUser);