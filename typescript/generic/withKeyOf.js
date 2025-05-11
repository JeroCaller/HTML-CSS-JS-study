const getValueOfProperty = (obj, key) => {
    return obj[key];
};
let myObj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(getValueOfProperty(myObj, 'a'));
console.log(getValueOfProperty(myObj, 'x'));
