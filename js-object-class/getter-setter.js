let user = {
    get userID() {
        return this._nickName;
    },
    set userID(value) {
        if ((value.length < 3 || value.length > 15) || (!/^[a-zA-Z0-9]+$/.test(value))) {
            console.log("아이디는 4글자 이상, 15글자 이하의 영문, 숫자 조합이어야 합니다.");
            return;
        }
        this._nickName = value;
    }
};

user.userID = "aaae1a2";  // setter 접근.
console.log(user.userID);  // getter 접근.