require ('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
console.log("Hello Backend")
 
app.get('/github',(req,res) =>{
    res.send("Muhammad361738")
})
 
app.get('/youtube',(req,res) =>{
    res.send("<h1>Please login chai aur code . com</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})