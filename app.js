const express = require('express');
const path = require('path');
const app = express();

console.log("Rodando...");

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usar rotas
const indexRouter = require('./routes/index');
const calcRouter = require('./routes/calculadora1');
const eleERouter = require('./routes/ele-e');

app.use('/', indexRouter);
app.use('/calculadora1', calcRouter);
app.use('/ele-e', eleERouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});