require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const connection = require('./util/db');


const app = express()
app.use(cors())

app.get('/', async (req,res)=> {
    console.log("home")
})



const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`listening on port:${port}`)
})