let some: string | null = null;

const someFunc = (som: string | null): void => {
  if (som === null) {
    console.log('null');
    return;
  }

  console.log(som);
};

someFunc(some);