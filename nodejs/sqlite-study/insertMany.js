import sqlite3 from "sqlite3";

const db = new sqlite3.Database('test.db');

const executeInsertMany = async (sql, data) => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const stmt = db.prepare(sql, (error) => {
        if (error) {
          reject(error);
        }
      });
  
      for (let oneData of data) {
        stmt.run(...oneData, (error) => {
          if (error) {
            reject(error);
          }
        });
      }
  
      stmt.finalize((error) => {
        if (error) {
          reject(error);
        }
      });
  
      resolve();
    });
  });
};

const executeSelectAll = async (sql) => {
  return new Promise((resolve, reject) => {
    db.each(sql, (error, row) => {
      if (error) {
        reject(error);
      }

      console.log(row);
      resolve();
    });
  });
};

const main = async () => {
  const insertSql = `INSERT INTO products(name, price) VALUES (?, ?)`;
  const insertData = [
    ["라면", 2000],
    ["생수", 1000],
    ["밥", 3000],
  ];

  const selectAllSql = `SELECT * FROM products`;

  try {
    await executeInsertMany(insertSql, insertData);
    await executeSelectAll(selectAllSql);
  } catch (error) {
    console.log("SQL 작업 실행 도중 에러 발생");
    console.log(error);
  } finally {
    db.close();
  }
}

main();
