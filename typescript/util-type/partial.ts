interface Book {
  name: string;
  price: number;
}

type PartialBook = Partial<Book>;

// 다음의 세 가지 경우의 수 모두 가능.
const oneBook: PartialBook = {};
const twoBook: PartialBook = { name: '타입스크립트 기본만 빠르게 훑기!' };
const threeBook: PartialBook = { name: '굳', price: 10000 };

console.log(oneBook);
console.log(twoBook);
console.log(threeBook);
