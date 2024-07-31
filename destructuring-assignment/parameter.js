let userInfo = {
    nickName: 'javas',
    age: 25,
    email: 'javas@aaa.com',
    job: 'Web Dev'
};

function printUserInfo({nickName, age = 20, email, job, say = "할 말 없음"}) {
    console.log("=== 사용자 정보 ===");
    console.log("닉네임: ", nickName);
    console.log("나이: ", age);
    console.log("이메일: ", email);
    console.log("직업: ", job);
    console.log("남긴 말: ", say);
    console.log("==================");
}

printUserInfo(userInfo);