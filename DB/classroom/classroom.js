
const sql = require('mysql');
const fs = require('fs');
const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'z10mz10m',
    database:'DB'
});

const Classroom= (obj)=>{
connection.connect((err)=>{
    const parsedObj=JSON.parse(obj);
    if(err){
        console.log('err in connection'.err)
    }
    const insertInto =`INSERT INTO classroom (grade,class_index,teacher_id) VALUES ${parsedObj.grade,parsedObj.class_index,parsedObj.teacher_id}`

connection.query(insertInto, (err) => {
    if (err) throw err;
    console.log('insert succsesfully')

})
})}