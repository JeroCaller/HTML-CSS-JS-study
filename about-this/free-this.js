let me = {name : "자바스"};
let you = {name : "파이썬"};

function showInfo() {
    console.log(this.name);
}

me.showInfo = showInfo;
you.showInfo = showInfo;
me.showInfo();
you.showInfo();

showInfo();