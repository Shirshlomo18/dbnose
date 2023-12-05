const sql = require("mysql");
const fs = require("fs");
const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
});

const getFields = (data) => {
  const fields = Object.keys(data);
  const length = fields.length;
  let tableRequest = "";
  fields.forEach((field, index) => {
    const value = data[field];
    tableRequest += `${field} ${value}`;
    if (index != length - 1) {
      tableRequest += ",";
    }
  });
  return tableRequest;
};
const createTable = (url, name) => {
  fs.readFile(`${url}/${name}`, (err, data) => {
    if (err) {
      console.log("there is an error in redir", err);
      return;
    }
    const fileData = JSON.parse(data);
    const baseName = name.slice(0, -5);
    const tableRequest = `CREATE TABLE IF NOT EXISTS ${baseName}(${getFields(
      fileData
    )})`;
    connection.query(tableRequest, (err, res) => {
      if (err) {
        console.log("there is an error in query", err);
        return;
      }
      console.log(`${baseName} created or already exists`);
    });
  });
};
const createTablesFromEntities = () => {
  fs.readdir("./entities", (err, files) => {
    if (err) {
      console.log("there is an error", err);
    }
    files.forEach((fileName) => {
      createTable("./entities", fileName);
    });

    return "done";
  });
};

connection.connect((err) => {
  if (err) {
    console.log("err connecting to sql:", err);
    return;
  }

  console.log("connected to my sql server");

  // Create the 'DB' database if it doesn't exist
  connection.query("CREATE DATABASE IF NOT EXISTS DB", (err) => {
    if (err) {
      console.log("err in creating DB", err);
      return;
    }

    console.log("Database 'DB' created or already exists");

    // Switch to the 'DB' database
    connection.query("USE DB", (err) => {
      if (err) {
        console.log("err connecting to DB:", err);
        return;
      }

      console.log('Using database "DB"');
      createTablesFromEntities();
      //   connection.query("SHOW TABELS");
    });
  });
});
