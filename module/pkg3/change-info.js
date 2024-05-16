import {user} from './user-info.js';

// 객체 리터럴 정보 변경.
user.name = '파이썬';
user.age = 30;
user.job = '회사원';

console.log('from change-info.js');
user.printUserInfo();