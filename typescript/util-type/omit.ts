interface SiteUserInfo {
  name: string;
  phone: string;
  address: string;
  age: number;
}

// 둘 이상의 속성 제거를 원한다면 union 연산자를 이용한다. 
const basicUser: Omit<SiteUserInfo, 'phone' | 'address'> = {
  name: 'typeson',
  age: 34
};

const restaurant: Omit<SiteUserInfo, 'age'> = {
  name: '일식집',
  address: 'xx시 xx동 xx대로',
  phone: '000-1111-2222' 
};

console.log(basicUser);
console.log(restaurant);