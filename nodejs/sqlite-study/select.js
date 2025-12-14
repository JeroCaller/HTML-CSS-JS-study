import sqlite3 from "sqlite3";

const db = new sqlite3.Database('test.db');

const getAll = async (sql) => {
  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }

      resolve(rows);
    });
  })
};

const getFirst = async (sql) => {
  return new Promise((resolve, reject) => {
    db.get(sql, (error, row) => {
      if (error) {
        reject(error);
      }

      resolve(row);
    })
  });
};

const main = async () => {
  const selectAllSql = `SELECT * FROM products`;

  try {
    const rows = await getAll(selectAllSql);

    for (let row of rows) {
      console.log(row);
    }

    console.log("======");

    const oneRow = await getFirst(selectAllSql);
    console.log(oneRow);
  } catch (error) {
    console.log(`SQL 작업 중 에러 발생`);
    console.log(error);
  } finally {
    db.close();
  }
}

main();
