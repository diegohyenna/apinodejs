const app = require('./config/app_config')
const db = require('./config/db_mongo_config')
//var db = require('./config/db_mysql_config')

const produtos = require('./routes/produtoRouter')

//rota padrao
app.get( '/', (req, res) => res.end( 'Bem vindo a Api em NodeJs') );

//rotas de produtos
app.use( '/produtos', produtos )