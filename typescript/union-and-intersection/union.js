let some = null;
const someFunc = (som) => {
    if (som === null) {
        console.log('null');
        return;
    }
    console.log(som);
};
someFunc(some);
