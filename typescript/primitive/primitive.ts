let myString: string = 'hi';
let intNum: number = 10;
let doubleNum: number = 3.141592;
let isTrue: boolean = true;

// 객체 타입은 interface 또는 type alias(타입 별칭)의 사용을 권장
let user: object = { username: 'kimquel', message: '만나서 반갑습니다!'};

let numArr: number[] = [1, 2, 3];
let numArr2: Array<number> = [4, 5, 6];

let tupleArr: [string, number] = ['jeongdb', 23];

enum Beverage {
  Cola,
  Juice,
  Soda,
  Milk = 6
}

let myDrink: Beverage = Beverage.Cola;
let yourDrink: Beverage = Beverage.Juice;

let myAny: any = 'wow';
let myAny2: any = 123;
let myAny3: any = ['wow', 1312, false];

const addAllAndPrint = (nums: Array<number>): void => {
  let result: number = nums.reduce((prev, current) => prev + current);
  console.log(`총합: ${result}`);
};

addAllAndPrint(numArr);
