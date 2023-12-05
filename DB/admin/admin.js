
const sql = require('mysql');
const fs = require('fs');
const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'z10mz10m',
    database: 'DB'
});

const Admin = async (obj) => {
    await connection.connect((err) => {
        const parsedObj = JSON.parse(obj);
        if (err) {
            console.log('err in connection'.err)
        }
    })
    const insertInto = `INSERT INTO admin (name,password,school_id) VALUES ${parsedObj.name, parsedObj.password, parsedObj.school_id}`

    await connection.query(insertInto, (err) => {
        if (err) {
            console.log("there is an error", err)
            return { "err": err };
        }
        console.log('insert succsesfully')

    })
    let result = { err: "" }
    await connection.query(`SELECT * FROM admin WHERE name =${parsedObj.name}`, (err, data) => {
        if (err) {
            console.log('error in selecting all:', err)
            result.err = err;
        }
        result = data;
    })
    return result;
}