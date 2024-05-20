import {database, printData} from './user-info.js';

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

getData(0)
    .then(result => {
        printData(result);
        return getData(1);
    })
    .then(result => {
        printData(result);
        return getData(2);
    })
    .then(result => {
        printData(result);
        return getData(3);
    })
    .then(result => printData(result))
    .catch(error => {
        console.log("에러 발생");
        console.log(error);
    });
