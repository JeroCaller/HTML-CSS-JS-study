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

for (let prop in siteUser) {
    console.log(`${prop} : ${siteUser[prop]}`);
}