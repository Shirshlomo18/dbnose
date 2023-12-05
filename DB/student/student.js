
const sql = require('mysql');
const fs = require('fs');
const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'z10mz10m',
    database:'DB'
});

const Student= (obj)=>{
connection.connect((err)=>{
    const parsedObj=JSON.parse(obj);
    if(err){
        console.log('err in connection'.err)
    }
    const insertInto =`INSERT INTO student (name,password,classroom_id) VALUES ${parsedObj.name,parsedObj.password,parsedObj.classroom_id}`

connection.query(insertInto, (err) => {
    if (err) throw err;
    console.log('insert succsesfully')

})
})}