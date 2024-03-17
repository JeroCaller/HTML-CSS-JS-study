class Car {
    constructor(mileage) {
        this._mileage = mileage;
    }

    get mileage() {
        return this._mileage;
    }
}

let car = new Car(50);
console.log("주행 거리 :", car.mileage);
car.mileage = 100;
console.log("주행 거리 :", car.mileage);  // setter가 없어 값이 바뀌지 않음.
console.log(car._mileage);