var express = require('express')
var bodyParser = require('body-parser')
var port = process.env.PORT || '8080'

var app = module.exports = express()

app.listen(port)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//CORS
app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Origin', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Origin', 'X-Requested-With, content-type, Authorization')
    next()
})
