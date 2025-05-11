interface TypeThatHaveLength {
  length: number;
}

const logMessage = <T extends TypeThatHaveLength>(message: T): void => {
  console.log(`텍스트 길이: ${message.length}`);
  console.log(`텍스트 내용: ${message}`);
};

let greetings: string = 'hi, everyone!';
logMessage(greetings);