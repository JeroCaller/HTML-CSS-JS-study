let str1: string = 'hi';

type Username = string;
let myname: Username = 'tyson';

// =======================
type PersonType = {
  name: string;
  age: number;
}

interface PersonInter {
  name: string;
  age: number;
}

// 타입 이름 위에 마우스 커서를 대어 타입에 대한 프리뷰를 살펴보자.
let iAm: PersonType;
let you: PersonInter;