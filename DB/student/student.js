const { connect, queryAsync } = require("../help");
// const sql = require("mysql");
// const connection = sql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "z10mz10m",
//   database: "DB",
// });

const Student = async (obj) => {
  console.log("obj: ", obj);
  console.log("Student");

  try {
    await connect(); // Wait for the connection to be established

    // Insert into the admin table
    await queryAsync(
      `INSERT INTO student (name, password, classroom_id) VALUES (?, ?, ?)`,
      [obj.name, obj.password, obj.classroom_id]
    );

    console.log("insert successfully");

    // Select from the admin table
    const result = await queryAsync(`SELECT * FROM student WHERE name = ?`, [
      obj.name,
    ]);

    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in Student function:", err);
    return { err };
  }
};

module.exports = Student;
