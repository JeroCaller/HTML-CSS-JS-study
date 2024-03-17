function User() {
    Object.defineProperty(this, "userID", {
        get() {
            return this._nickName;
        },
        set(value) {
            if ((value.length < 3 || value.length > 15) || (!/^[a-zA-Z0-9]+$/.test(value))) {
                console.log("아이디는 4글자 이상, 15글자 이하의 영문, 숫자 조합이어야 합니다.");
                return;
            }
            this._nickName = value;
        }
    });
}

let user1 = new User();
user1.userID = "aaae1a2#";
console.log(user1.userID);