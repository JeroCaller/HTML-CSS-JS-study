const greeter = (person) => {
    return `hello, ${person.firstName} ${person.lastName}`;
};
let user = { firstName: 'kim', lastName: 'quel' };
console.log(greeter(user));
