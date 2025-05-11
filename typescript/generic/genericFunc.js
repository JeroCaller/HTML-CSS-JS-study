const normalFunc = (data) => {
    console.log(`data type: ${typeof data}`);
    console.log(`data: ${data}`);
};
const genericFunc = (data) => {
    console.log(`data type: ${typeof data}`);
    console.log(`data: ${data}`);
};
let someStr = 'hi';
let myNum = 3.14;
normalFunc(someStr);
normalFunc(myNum);
console.log('===============');
genericFunc(someStr);
genericFunc(myNum);
