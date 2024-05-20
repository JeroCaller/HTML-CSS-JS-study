import {database} from './user-info.js';

function getData(id) {
    return new Promise((resolve, reject) => {
        let userInfo;

        try {
            setTimeout(() => {
                userInfo = database[id];
                resolve(userInfo);
            }, 1000);
        } catch (e) {
            reject(e);
        }
    });
}

getData(1).then(
    result => {
        console.log("===== 사용자 정보 =====");
        console.log(`이름 : ${result.name}`);
        console.log(`나이 : ${result.age}`);
        console.log(`직업 : ${result.job}`);
    },
    error => {
        console.log("에러 : 에러가 발생했습니다. 다음은 에러 메시지입니다.");
        console.log(error);
    }
);
