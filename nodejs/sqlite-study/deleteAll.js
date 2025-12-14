import sqlite3 from "sqlite3";

const db = new sqlite3.Database('test.db');

const executeSql = async (sql) => {
  return new Promise((resolve, reject) => {
    db.run(sql, (error) => {
      if (error) {
        reject(error);
      }

      resolve();
    });
  });
};

const main = async () => {
  const deleteAllSql = `DELETE FROM products`;

  try {
    await executeSql(deleteAllSql);
  } catch (error) {
    console.log('SQL 실행 도중 에러 발생');
    console.log(error);
  } finally {
    db.close;
  }
};

main();