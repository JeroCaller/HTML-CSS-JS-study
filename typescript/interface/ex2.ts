interface User {
  name: string;
  age?: number;
}

let me: User = { name: 'jeongdb' };

const printUser = (user: User): void => {
  console.log(user.name);
  console.log(user.age);
};

printUser(me);
