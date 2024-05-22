new Promise((resolve, reject) => {
    reject(new Error("그냥 에러 일으켜봄"));
}).then(result => console.log(result));
