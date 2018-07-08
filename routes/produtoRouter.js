const express = require('express')
const router = express.Router()
const produtoController = require('../controllers/produtoController')


router.get('/', (req, res) => {
    produtoController.list( (resp) => res.json(resp) )       
})

router.post('/', (req, res) => {
    
    let nome = req.body.nome
    let descricao = req.body.descricao
    let valor = req.body.valor
    
    produtoController.save( nome, descricao, valor, (resp) => res.json(resp) );
})

router.delete('/deletar:id', (req, res) => {
    
    let id = req.params.id        
    
    produtoController.delete( id, (resp) => res.json(resp) )
})

module.exports = router
    
