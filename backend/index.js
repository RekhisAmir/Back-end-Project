var mysql = require('mysql');
const express = require ('express')
const cors = require('cors')

const app = express()

var port = process.env.PORT || 5000
 

app.use(cors())
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'db_isa2',
  user     : 'root',
  password : '',
  connectionLimit : 10
});

connection.connect((err)=>{err?console.log(err): console.log('connection to database ok')});
app.get('/triage', (req,res)=>{

    connection.query('SELECT * FROM `triage`', (err, rows) => {
        err? res.send(err):res.send(rows)
        console.log(res)
    })
});

app.get('/operations', (req,res)=>{
    connection.query('SELECT * FROM `pack_36414490`', (err, rows)=> {
      err? res.send(err):res.send(rows)
    })
})

app.get('/chains', (req,res)=>{
      connection.query('SELECT * FROM `chains`', (err,rows)=>{+
        err? res.send(err): res.send(rows)
      })
})

//connection.end();



//app listen on environment port
app.listen(port, ()=>console.log(`Listen on port ${port}`))