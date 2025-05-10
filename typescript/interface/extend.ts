interface Person {
  name: string;
  age: number;
}

interface Hobby {
  hobbyName: string;
}

interface Developer extends Person, Hobby {
  skills: string[];
}

let me: Developer = { 
  name: 'kimquel', 
  age: 23, 
  hobbyName: '게임', 
  skills: ['React', 'SpringBoot'],
};

console.log(me);