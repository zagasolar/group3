const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')

require('./models/user')


mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected' , () => {
    console.log('mongoose connection on')
})


mongoose.connection.on('error' , (err) => {
    console.log('error connection ', err)
})


app.use(express.json())

app.use(require('./routes/auth')) 

app.listen(PORT, () =>{
    console.log("server running on", PORT)
})






