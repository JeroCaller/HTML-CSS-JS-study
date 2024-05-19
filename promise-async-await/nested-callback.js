import { database, printData } from "./user-info.js";

function getData(id, callback) {
    let userInfo;

    setTimeout(() => {
        userInfo = database[id];
        callback(userInfo);
    }, 1000);

    return userInfo;
}

getData(0, data => {
    getData(1, data => {
        getData(2, data => {
            getData(3, printData);
            printData(data);
        });
        printData(data);
    });
    printData(data);
});
