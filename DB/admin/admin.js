// const sql = require("mysql");
// const fs = require("fs");
// const connection = sql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "z10mz10m",
//   database: "DB",
// });

// const Admin = async (obj) => {
//   console.log("obj: ", obj);
//   console.log("Admin");

//   let result = { err: "" };
//   return connection.connect((err) => {
//     if (err) {
//       console.log("err in connection".err);
//     }
//     const insertInto = `INSERT INTO admin (name,password,school_id) VALUES ${
//       (obj.name, obj.password, obj.school_id)
//     }`;

//     connection.query(insertInto, (err) => {
//       if (err) {
//         console.log("there is an error", err);
//         return { err: err };
//       }
//       console.log("insert succsesfully");
//       connection.query(
//         `SELECT * FROM admin WHERE name =${obj.name}`,
//         (err, data) => {
//           if (err) {
//             console.log("error in selecting all:", err);
//             result.err = err;
//             return result;
//           }
//           result = data;
//           return result;
//         }
//       );
//     });
//   });
// };
// module.exports = Admin;
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
  console.log("Admin");

  try {
    await connect(); // Wait for the connection to be established

    // Insert into the admin table
    await queryAsync(
      `INSERT INTO admin (name, password, school_id) VALUES (?, ?, ?)`,
      [obj.name, obj.password, obj.school_id]
    );

    console.log("insert successfully");

    // Select from the admin table
    const result = await queryAsync(`SELECT * FROM admin WHERE name = ?`, [
      obj.name,
    ]);

    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in Admin function:", err);
    return { err };
  }
};



module.exports = Admin;
