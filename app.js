const express = require('express')
const app = express()
const PORT = 3600
   
const employee = require('./route')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (request, response) => {
    response.send("Hello world")
});

app.use('/employ', employee)

app.listen(PORT, console.log("This server is running at http://localhost:3600"))