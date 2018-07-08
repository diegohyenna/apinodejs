const mongoose = require('mongoose')

const urlDB = 'mongodb://localhost/API'

mongoose.connect(urlDB, (err, res) => {
    if(err)
    {
        console.log('nao foi possivel conectar a: '+ urlDB)
    }
    else
    {
        console.log('conectou')
    }
})