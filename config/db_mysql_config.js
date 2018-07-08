const mysql = require('mysql')

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "apinode"
})

con.connect( (err) => {
  if (err) 
      console.log('Deu erro ao conectar ao mysql: '+ err);
  else
      console.log("Conectou ao mysql!");
})