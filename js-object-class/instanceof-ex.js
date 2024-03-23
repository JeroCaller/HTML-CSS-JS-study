class Person {}
class Citizen extends Person {}
class Bike {}

let p = new Person();
let c = new Citizen();
let bike = new Bike();
console.log(p instanceof Person);
console.log(c instanceof Citizen);
console.log(bike instanceof Person);