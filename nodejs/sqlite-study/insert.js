import sqlite3 from "sqlite3";

const db = new sqlite3.Database('test.db');

const executeSql = async (sql, ...params) => {
  if (params && params.length > 0) {
    return new Promise((resolve, reject) => {
      db.run(sql, params, (error) => {
        if (error) {
          reject(error);
        }

        resolve();
      });
    });
  }

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
  const insertSql = `INSERT INTO products(name, price) VALUES(?, ?)`;
  try {
    await executeSql(insertSql, "양상추", 4900.1);
  } catch (error) {
    console.log('SQL 실행 도중 에러 발생');
    console.log(error);
  } finally {
    db.close;
  }
};

main();
