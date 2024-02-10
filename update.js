mysql = require('mysql')

conn = mysql.createConnection({host:'localhost',user:"root",password:"",database:"studentbd"})

conn.connect((error)=>{
    if(error) throw error
    console.log('connection successfully')
    update = "update kanpur set name='manish' where name='shubham'"
    conn.query(update,(error)=>{
        if (error) throw error
        console.log('Update  successfully')
    })
})