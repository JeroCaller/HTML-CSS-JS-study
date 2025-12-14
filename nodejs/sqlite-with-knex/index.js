import knex from "knex";

const kn = knex({
  client: 'sqlite3',
  connection: {
    filename: 'knex-study.db'
  },
  useNullAsDefault: true
});

const main = async () => {

  try {
    await kn.schema.createTableIfNotExists('users', (table) => {
      table.increments('id', {primaryKey: true});
      table.string('name').notNullable();
      table.integer('age');
      table.string('job');
    });

    await kn.select().from('sqlite_schema')
      .where('tbl_name', 'users')
      .then((results) => {
        console.log("생성한 테이블 스키마 구조 확인");
        console.log(results);
      });

    await kn.insert([
      {name: '자바스', age: 23, job: '정원관리사'},
      {name: '정디비', age: 31, job: '프로그래머'},
      {name: '김큐엘', age: 25}
    ]).into('users');

    await kn.select().from('users')
      .then((results) => {
        console.log("테이블 데이터 확인");
        
        for (let result of results) {
          console.log(result);
        }
      });

    await kn.delete().from('users')
      .then((results) => {
        console.log('전체 데이터 삭제 완료');
      });

    await kn.select().from('users')
      .then((results) => {
        console.log("테이블 데이터 확인");
        
        if (!results || results.length == 0) {
          console.log("조회된 데이터 없음");
          return;
        }
        
        for (let result of results) {
          console.log(result);
        }
      });
  } catch (error) {
    console.log('SQL 작업 중 에러 발생');
    console.log(error);
  } finally {
    try {
      kn.destroy();
    } catch (error) {
      console.log('knex 닫는 도중 에러 발생');
      console.log(error);
    }
  }
};

main();
