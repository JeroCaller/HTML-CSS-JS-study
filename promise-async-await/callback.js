function getData(callback) {
    let userInfo;

    setTimeout(() => {
        userInfo = {
            name: '자바스',
            age: 20,
            job: '웹 개발자'
        };
        callback(userInfo);
    }, 1000);

    return userInfo;
}

function printData(dataObj) {
    try {
        console.log("===== 사용자 정보 =====");
        console.log(`이름 : ${dataObj.name}`);
        console.log(`나이 : ${dataObj.age}`);
        console.log(`직업 : ${dataObj.job}`);
    } catch (e) {
        if (e instanceof TypeError) {
            console.log("에러: 사용자 정보를 읽어올 수 없었습니다.");
        } else {
            throw e;
        }
    }
}

getData(printData);
