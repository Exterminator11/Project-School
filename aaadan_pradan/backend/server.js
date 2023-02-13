const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser = require('body-parser')

const db=require('./db')
const urouter=require('./routes/route')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


db.on('error',console.error.bind(console,'Mongo connection error'))

app.get('/',(req,res)=>{res.send('Hello world')})

app.use('/api',urouter)

app.listen(8001,()=>{console.log(`Server running on port 8001`)})