class User {
    name = "no name";
    shoppingBasket = [];

    constructor(name, basket) {
        this.name = name;
        this.shoppingBasket = basket;
    }

    showProfile() {
        console.log("====== 사용자 정보 ====== ");
        console.log(`이름 : ${this.name}`);
        console.log(`장바구니 : ${this.shoppingBasket}`);
        console.log("==========================");
    }
}

let userObj = new User("자바스", ["사과", "바나나"]);
userObj.showProfile();