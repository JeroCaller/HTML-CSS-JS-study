const printUserInfo = (person: { name: string, age: number }): void => {
  console.log(`=== 유저 정보 ===`);
  console.log(`유저네임: ${person.name}`);
  console.log(`나이: ${person.age}`);
  console.log('======================');
};

let user = { name: 'kimquel', age: 25, message: '만나서 반갑습니다.'};
printUserInfo(user);

console.log('==============================');

interface User {
  name: string,
  age: number
}

const printUserInfo2 = (person: User): void => {
  console.log(`=== 유저 정보 ===`);
  console.log(`유저네임: ${person.name}`);
  console.log(`나이: ${person.age}`);
  console.log('======================');
};
printUserInfo2(user);
