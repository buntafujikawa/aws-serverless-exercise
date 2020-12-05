'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  port     : process.env.DB_PORT,
  database : process.env.DB_NAME,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS
});

exports.handler = async (event, context) => {
  const sql = `SELECT name,price,created_at FROM items WHERE deleted_at IS NULL ORDER BY created_at DESC;`;

  await connection.query(sql, function(err, rows, fields) {
    if(err){
      return {
        isBase64Encoded: false,
        statusCode: 500,
        headers: { 'Content-Type': 'application/json; charset=UTF-8'},
        body: [],
      };
    } else {
      return {
        isBase64Encoded: false,
        statusCode: 200,
        headers: { 'Content-Type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(rows),
      };
    }
  });
};
