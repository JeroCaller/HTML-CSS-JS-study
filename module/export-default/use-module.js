import DataContainer from './info.js';
import User from './info-2.js';

let me = new DataContainer('자바스', 20, '웹 개발자');
me.printDataInfo();

let you = new User('파이썬', 25, '데이터 분석가');
you.printDataInfo();
