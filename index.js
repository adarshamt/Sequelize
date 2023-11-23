const express =require('express')
const Users = require('./model/user')
 
const app = express ()

const port = 3000


app.get('/',(req,res)=>{
    res.send("HELLO WORLD")
})
    Users.sync({force:true}) // THIS IS USED TO CREATE A TABLE IF THE SAME TABLE EXISTS IT DELETE THE PREVIOUS TABLE AND CREATE THE NEW







app.listen(port,()=>{

    console.log(`Server listerning to ${port} `)
})