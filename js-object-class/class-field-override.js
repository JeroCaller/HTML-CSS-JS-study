class Person {
    job = "innocent";

    constructor(printBool) {
        if (printBool) {
            console.log("from constructor... " + this.job);
        }
    }

    showJob() {
        console.log("직업 : " + this.job);
    }
}

class Mafia extends Person {
    job = "Mafia";
}

class Police extends Person {
    job = "Police";

    constructor() {
        super(false);
        //this.job = "Police";
        console.log("from constructor... " + this.job);
    }
}

let person = new Person(true);
let mafia = new Mafia(true);
let police = new Police();

console.log("========");
person.showJob();
mafia.showJob();
police.showJob();