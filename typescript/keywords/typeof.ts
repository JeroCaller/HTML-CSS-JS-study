const instaAppInfo = {
  name: 'instagram',
  since: 2010,
  appType: 'SNS'
};

/*
type FamousAppInfo = {
  name: string;
  since: number;
  ppType: string;
}
*/
type FamousAppInfo = typeof instaAppInfo;

const wrtnAppInfo: FamousAppInfo = {
  name: 'wrtn',
  since: 2021,
  appType: 'AI'
}

console.log(instaAppInfo);
console.log(wrtnAppInfo);

console.log(typeof 'hi');  // 순수 자바스크립트 문법에서의 typeof