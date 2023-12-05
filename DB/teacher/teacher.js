
// const sql = require('mysql');
// const fs = require('fs');
// const connection = sql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'z10mz10m',
//     database:'DB'
// });

// const Teacher= (obj)=>{
// connection.connect((err)=>{
//     const parsedObj=JSON.parse(obj);
//     if(err){
//         console.log('err in connection'.err)
//     }
//     const insertInto =`INSERT INTO teacher (name,password,email) VALUES ${parsedObj.name,parsedObj.password,parsedObj.email}`

// connection.query(insertInto, (err) => {
//     if (err) throw err;
//     console.log('insert succsesfully')

// })
// })}

const {connect,queryAsync}=require('../help')
const sql = require("mysql");
const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "DB",
});

const Teacher = async (obj) => {
  console.log("obj: ", obj);
  console.log("Teacher");

  try {
    await connect(); // Wait for the connection to be established

    // Insert into the admin table
    await queryAsync(
      `INSERT INTO teacher (name, password, email) VALUES (?, ?, ?)`,
      [obj.name, obj.password, obj.email]
    );

    console.log("insert successfully");

    // Select from the admin table
    const result = await queryAsync(`SELECT * FROM teacher WHERE name = ?`, [
      obj.name,
    ]);

    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in Teacher function:", err);
    return { err };
  }
};



module.exports = Teacher;
