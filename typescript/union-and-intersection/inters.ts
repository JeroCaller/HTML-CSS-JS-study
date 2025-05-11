interface Phone {
  phoneNumber: string;
  price: number;
}

interface Laptop {
  ramGB: number;
  price: number;
}

type Device = Phone & Laptop;

let myDevice: Device = {
  phoneNumber: '010-0101-1111',
  price: 1000000,
  ramGB: 16
};

console.log(myDevice);