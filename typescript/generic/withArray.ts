const logMessageError = <T>(message: T): void => {
  console.log(`텍스트 길이: ${message.length}자`);
  console.log(`텍스트 내용: ${message}`);
};

const logMessageGood = <T>(message: T[]): void => {
  console.log(`텍스트 개수: ${message.length}`);
  console.log(`텍스트 내용들) `);
  message.forEach(text => {
    console.log(text);
  });
};

let messageOne: string = "hello, world! My name is kimquel. Nice to meet you";
let messageTwo: string[] = ['hello, world!', 'My name is kimquel', 'Nice to meet you'];

logMessageError<string>(messageOne);
logMessageGood<string>(messageTwo);