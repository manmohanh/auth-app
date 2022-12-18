require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const connection = require('./util/db');


const app = express()
connection()

const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`listening on port:${port}`)
})