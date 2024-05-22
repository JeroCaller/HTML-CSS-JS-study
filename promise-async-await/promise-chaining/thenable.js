import { getPromise } from "./prom-pkg.js";

class MyThenable {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        setTimeout(() => resolve(this.num), 1000);
    }
}

getPromise()
.then(result => {
    console.log(result);
    return new MyThenable(result + 1);
})
.then((result) => console.log(result));
