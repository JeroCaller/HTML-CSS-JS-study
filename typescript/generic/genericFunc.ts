const normalFunc = (data: any): void => {
  console.log(`data type: ${typeof data}`);
  console.log(`data: ${data}`);
};

const genericFunc = <T>(data: T): void => {
  console.log(`data type: ${typeof data}`);
  console.log(`data: ${data}`);
};

let someStr: string = 'hi';
let myNum: number = 3.14;

normalFunc(someStr);
normalFunc(myNum);
console.log('===============');
genericFunc<string>(someStr);
genericFunc<number>(myNum);
