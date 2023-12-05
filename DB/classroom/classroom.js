const { connect, queryAsync } = require("../help");
const sql = require("mysql");
const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "DB",
});

const classroom = async (obj) => {
  console.log("obj: ", obj);
  console.log("Classroom");

  try {
    await connect(); // Wait for the connection to be established

    // Insert into the admin table
    await queryAsync(
      `INSERT INTO classroom (grade, class_index, teacher_id) VALUES (?, ?, ?)`,
      [obj.grade, obj.class_index, obj.teacher_id]
    );

    console.log("insert successfully");

    // Select from the admin table
    const result = await queryAsync(`SELECT * FROM classroom WHERE grade = ?`, [
      obj.grade,
    ]);

    console.log("result: ", result);
    return result;
  } catch (err) {
    console.error("Error in Classroom function:", err);
    return { err };
  }
};

module.exports = classroom;
