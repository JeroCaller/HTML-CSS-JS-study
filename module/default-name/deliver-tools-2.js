class UserInfo {
    constructor(address, menu) {
        this.address = address;
        this.menu = menu;
    }
}

function printDeliverInfo(userObj) {
    try {
        console.log("=== 배달 정보 ===");
        console.log("주소 : " + userObj.address);
        console.log("메뉴 : " + userObj.menu);
    } catch (e) {
        console.log("배달 주문 내역을 받아오지 못했습니다.");
    }
}

// export {UserInfo as default} == export class UserInfo {...}
export {UserInfo as default, printDeliverInfo};
