let myString = 'hi';
let intNum = 10;
let doubleNum = 3.141592;
let isTrue = true;
// 객체 타입은 interface 또는 type alias(타입 별칭)의 사용을 권장
let user = { username: 'kimquel', message: '만나서 반갑습니다!' };
let numArr = [1, 2, 3];
let numArr2 = [4, 5, 6];
let tupleArr = ['jeongdb', 23];
var Beverage;
(function (Beverage) {
    Beverage[Beverage["Cola"] = 0] = "Cola";
    Beverage[Beverage["Juice"] = 1] = "Juice";
    Beverage[Beverage["Soda"] = 2] = "Soda";
    Beverage[Beverage["Milk"] = 6] = "Milk";
})(Beverage || (Beverage = {}));
let myDrink = Beverage.Cola;
let yourDrink = Beverage.Juice;
let myAny = 'wow';
let myAny2 = 123;
let myAny3 = ['wow', 1312, false];
const addAllAndPrint = (nums) => {
    let result = nums.reduce((prev, current) => prev + current);
    console.log(`총합: ${result}`);
};
addAllAndPrint(numArr);
