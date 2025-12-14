import sqlite3 from "sqlite3";

const db = new sqlite3.Database('test.db');

/**
 * 특정 테이블의 스키마 정보 추출
 * 
 * @param {string} table 
 * @returns Promise
 */
const getTableSchema = async (table) => {
  const sql = `SELECT * FROM sqlite_schema WHERE name = ?`;

  return new Promise((resolve, reject) => {
    db.get(sql, table, (error, row) => {
      if (error) {
        reject(error);
      }

      resolve(row);
    });
  });
};

const main = async () => {
  try {
    const result = await getTableSchema('products');
    console.log(result);
  } catch (error) {
    console.log(`SQL 작업 중 에러 발생`);
    console.log(error);
  } finally {
    db.close();
  }
};

main();
