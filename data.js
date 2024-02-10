mysql = require('mysql')

conn = mysql.createConnection({host:'localhost',user:"root",password:"",database:"studentbd"})

conn.connect((error)=>{
    if(error) throw error
    console.log('connection successfully')
    data = "insert into kanpur value('Manish',24,'manish@gmail.com')"
    conn.query(data,(error)=>{
        if (error) throw error
        console.log('Data inserted successfully')
    })
})