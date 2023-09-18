const express = require ('express')
const app = express()

app.get('/',(req ,res)=>{
    req.token= 10 +'10'
 
    res.send('Hello world')
})

app.listen (5000)
console.log("el servidor esta corriendo");