function User(name) {
    this.name = name;
}

User.prototype.printHello = function() {
    console.log(this.name);
}

let user = new User("James");
user.printHello();