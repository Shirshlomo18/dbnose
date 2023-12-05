const { connect, queryAsync } = require("../help");
const sql = require("mysql");

// const connection = sql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "z10mz10m",
//   database: "DB",
// });
const School = async (obj) => {
  console.log("obj: ", obj);
  console.log("School");

  try {
    await connect(); // Wait for the connection to be established

    // Insert into the admin table
    await queryAsync(`INSERT INTO school (name, school_code) VALUES (?, ?)`, [
      obj.name,
      obj.school_code,
    ]);

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
