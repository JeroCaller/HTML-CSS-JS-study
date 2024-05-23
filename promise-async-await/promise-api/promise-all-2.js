Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hi'), 1000);
    }),
    'nice to',
    'meet',
    'you'
]).then(result => console.log(result));
