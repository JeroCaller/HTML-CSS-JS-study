let user = {
    name: "자바스",
    shoppingBasket: ["사과", "바나나"],
    showProfile() {
        console.log("====== 사용자 정보 ====== ");
        console.log(`이름 : ${this.name}`);
        console.log(`장바구니 : ${this.shoppingBasket}`);
        console.log("==========================");
    }
}

user.showProfile();