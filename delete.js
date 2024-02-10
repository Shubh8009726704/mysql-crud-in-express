mysql = require('mysql')

conn = mysql.createConnection({host:'localhost',user:"root",password:"",database:"studentbd"})

conn.connect((error)=>{
    if(error) throw error
    console.log('connection successfully')
    update = "delete from kanpur where name = 'vivek'"
    conn.query(update,(error)=>{
        if (error) throw error
        console.log('Deleted successfully')
    })
})