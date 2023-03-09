const express=require('express')
const cors=require('cors')
const mysql=require('mysql')
const app=express()
app.use(cors())



app.get('/',function(req,res){
    res.send("działa")
})



var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nowa2"

})
con.connect()

app.get('/wybierz',function(req,res){
con.query('SELECT * FROM tabela',function(err,result,fields){
    if(err) console.log(err)
  else  console.log(result)
res.send(result)

})
})

app.get('/dodawanie/:nazwa/:wykon/:termin',function(req,res){
    const nazwa=req.params.nazwa
    const wykon=req.params.wykon
    const termin=req.params.termin
    con.query(`INSERT INTO tabela (nazwa,wykon,termin) VALUES ('${nazwa}','${wykon}','${termin}')`,function(err,result,fields){
        if(err) {console.log(err)
            res.send("nie dodano")
        }
        else res.send("dodano")
    })

    })



app.listen(3001)