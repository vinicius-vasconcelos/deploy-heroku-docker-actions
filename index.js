const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.send(`<h1> Executando na porta: ${port}  #novoDeploy com CD e CI falhando</h1>`));
app.listen(port)