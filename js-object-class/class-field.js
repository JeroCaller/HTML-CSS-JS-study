function getAdd(a, b) {
    return a + b;
}

class Person {
    name = "James";
    // 클래스 필드에는 표현식 및 함수 반환값도 저장 가능.
    someMethod = function() {console.log("hi");}
    number = getAdd(1, 2);
}

let james = new Person();
// 해당 객체의 클래스 필드에 접근.
console.log(james.name);
james.someMethod();
console.log(james.number);