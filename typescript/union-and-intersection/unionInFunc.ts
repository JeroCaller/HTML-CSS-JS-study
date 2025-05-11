interface Phone {
  phoneNumber: string;
  price: number;
}

interface Laptop {
  ramGB: number;
  price: number;
}

const otherFunc = (device: Phone | Laptop): void => {
  console.log(device.price); // 두 인터페이스 내 공통의 필드 타입만 인식 가능.
  console.log(device.phoneNumber);  // 에러
  console.log(device.ramGB);  // 에러
};

otherFunc({phoneNumber: '000', price: 1000});