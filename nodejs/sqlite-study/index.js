import sqlite3 from "sqlite3";

/*
  만일 해당 파일이 존재한다면 해당 파일에 대한 새 connection을 연다.
  만일 파일이 존재하지 않는다면 새 파일을 만들어 새 connection을 연다.
*/
const db = new sqlite3.Database('test.db');

const execute = async (sql) => {
  return new Promise((resolve, reject) => {
    db.exec(sql, (error) => {
      if (error) {
        reject(error);
      }

      resolve();
    });
  });
}

const main = async () => {
  const createTableSql = `CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC NOT NULL
  )`;

  try {
    await execute(createTableSql);
  } catch (error) {
    console.log('SQL 실행 도중 에러 발생');
    console.log(error);
  } finally {
    db.close();
  }
};

main();
