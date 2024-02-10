mysql = require('mysql')

conn = mysql.createConnection({host:'localhost',user:"root",password:"",database:"studentbd"})

conn.connect((error)=>{
    if(error) throw error
    console.log('connection successfully')
    table = "create table ddn(id primary key auto_increment,name varchar(50), age int ,mail varchar(50))"
    conn.query(table,(error,res)=>{
        if (error) throw error
        console.log('table created successfully')
    })
})