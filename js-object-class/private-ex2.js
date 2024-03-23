class Car {
    #fuel = 0;
    fuel = 1;

    printProperties() {
        console.log("==== Properties ====");
        console.log("#fuel : " + this.#fuel);
        console.log("fuel : " + this.fuel);
        console.log("====================");
    }
}

let car = new Car();
car.printProperties();
car.fuel = 10;
car.printProperties();