
let user = {
    name: "자바스",
    showInfo() {
        console.log(this);
        let arrow = () => console.log(this.name);
        arrow();
    }
};

let arrowFunc = () => {
    console.log(this.name);
    console.log(this);
    console.log(typeof this);
};
arrowFunc();

console.log("===============");
user.showInfo();