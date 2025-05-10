interface Person {
  firstName: string;
  lastName: string;
}

const greeter = (person: Person): string => {
  return `hello, ${person.firstName} ${person.lastName}`;
};

let user: Person = { firstName: 'kim', lastName: 'quel'};

console.log(greeter(user));