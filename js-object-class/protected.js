class Car {
    _fuel = 0;  // protected 프로퍼티

    set fuel(arg) {
        if (arg < 0) {
            throw new Error("연료량은 음수가 되어선 안됩니다.");
        }
        this._fuel = arg;
    } 

    get fuel() {
        return this._fuel;
    }
}

let car = new Car();
car.fuel = 20;
console.log(car.fuel);
console.log(car._fuel);  // protected 필드는 접근 가능하긴 하다. 
car.fuel = -1;  // 에러 발생.
