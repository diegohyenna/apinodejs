const Produto = require('../models/Produto')

exports.save = (nome, descricao, valor, callback) => {
    new Produto({
        'nome': nome,
        'descricao': descricao,
        'valor': valor
    }).save( (err, produto) => {
        if(err)
        {
            callback({error: 'Nao foi possivel salvar'})
        }
        else
        {
            callback(produto)
        }
    })
}

exports.list = (callback) => {
    Produto.find({}, (err, produtos) => {
        if(err)
        {
            callback({error: 'nao foi possivel encontrar produtos'})
        }
        else
        {
            callback(produtos)
        }
    })
}

exports.delete = (id, callback) => {
    Produto.findById(id, (err, produto) => {
        if(err)
        {
            callback({error: "nao foi possivel excluir"})
        }
        else
        {
            produto.remove( (err) => {
                if(!err)
                {
                    callback({resp: "produto excluido com sucesso"})
                }
            })
        }
    })
}