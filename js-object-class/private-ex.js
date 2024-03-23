class Car {
    #fuel = 0;  // private 프로퍼티

    set fuel(arg) {
        if (arg < 0) {
            throw new Error("연료량은 음수가 되어선 안됩니다.");
        }
        this.#fuel = arg;
    } 

    get fuel() {
        return this.#fuel;
    }
}

let car = new Car();
car.fuel = 20;
console.log(car.fuel);
// console.log(car.#fuel);  // 에러 발생. private 필드는 외부에서 직접 접근 불가.
// car.fuel = -1;  // 에러 발생.
