let myInfo = {
    name: 'javas',
    age: 20,
    job: 'SW Developer'
};

let job, name, age;
({job, name, age} = myInfo);

console.log(job, name, age);
