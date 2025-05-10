interface User {
  readonly siteName: string;
  name: string;
  age?: number;
}

let me: User = { siteName: '나이버', name: 'kimquel' };
console.log(me);
me.siteName = '굳굳';
console.log(me);