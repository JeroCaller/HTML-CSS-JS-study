interface FuncInterfaceOne {
  <T>(message: T): void;
}

interface FuncInterfaceTwo<T> {
  (message: T): void;
}

const funcOne: FuncInterfaceOne = <T>(message: T): void => {
  console.log(message);
};

const funcTwo: FuncInterfaceTwo<string> = (message: string): void => {
  console.log(message);
};

let myMessage: string = "hello, world!";
funcOne<string>(myMessage);
funcTwo(myMessage);