require("dotenv").config()
require("./config/database").connect()

const express = require('express')

const app = express()
const cors = require("cors")

app.use( cors())
app.use(express.json())

app.use( "/product", require( './routes/productRoute' ) )
app.use('/order', require( './routes/orderRoute' ) )

module.exports = app