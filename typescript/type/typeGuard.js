const mockFunc = (data) => {
    if (typeof data === 'string') {
        console.log(`string 타입입니다.`);
        console.log(`텍스트 길이: ${data.length}`);
    }
    else {
        console.log(`number 타입입니다.`);
        console.log(`소수점 2자리까지의 수: ${data.toFixed(2)}`);
    }
};
mockFunc('hello');
mockFunc(3.141592);
