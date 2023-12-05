const sql = require('mysql');
const fs = require('fs');
const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'z10mz10m',
    database:'DB'
});

const School= (obj)=>{
connection.connect((err)=>{
    const parsedObj=JSON.parse(obj);
    if(err){
        console.log('err in connection'.err)
    }
    const insertInto =`INSERT INTO admin (name,school_code) VALUES ${parsedObj.name,parsedObj.school_code}`

connection.query(insertInto, (err) => {
    if (err) throw err;
    console.log('insert succsesfully')

})
})}