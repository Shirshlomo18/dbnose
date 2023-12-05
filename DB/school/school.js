// const sql = require('mysql');
// const fs = require('fs');
// const connection = sql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'z10mz10m',
//     database:'DB'
// });

// const School= (obj)=>{
// connection.connect((err)=>{
//     const parsedObj=JSON.parse(obj);
//     if(err){
//         console.log('err in connection'.err)
//     }
//     const insertInto =`INSERT INTO admin (name,school_code) VALUES ${parsedObj.name,parsedObj.school_code}`

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

const Admin = async (obj) => {
  console.log("obj: ", obj);
  console.log("School");

  try {
    await connect(); // Wait for the connection to be established

    // Insert into the admin table
    await queryAsync(
      `INSERT INTO school (name, school_code) VALUES (?, ?)`,
      [obj.name,obj.school_code]
    );

    console.log("insert successfully");

    // Select from the admin table
    const result = await queryAsync(`SELECT * FROM school WHERE name = ?`, [
      obj.name,
    ]);

    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in School function:", err);
    return { err };
  }
};



module.exports = School;
