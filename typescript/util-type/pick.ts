interface Info {
  name: string;
  phone: string;
  address: string;
  age: number;
}

const onlyMyname: Pick<Info, 'name'> = {name: 'kimquel'};

// Union 연산자를 이용하여 둘 이상의 프로퍼티들을 골라올 수 있음.
const person : Pick<Info, 'name' | 'age' > = { name: 'typeson', age: 23 };
const chickenRestaurant : Pick<Info, 'phone' | 'address' > = {
  phone: '000-1111-2222',
  address: 'xx시 xx구 xx대로'
};

console.log(onlyMyname);
console.log(person);
console.log(chickenRestaurant);
