interface SignUp {
  (username: string, age: number): void;
}

const signUpFunc: SignUp = (name: string, age: number): void => {
  console.log(`가입정보)`);
  console.log(`유저네임: ${name}, 나이: ${age}`);
};

signUpFunc('good', 23);
