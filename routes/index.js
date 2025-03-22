const express = require('express');
const router = express.Router();
const path = require('path');

// Rota para a Home
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/Users/pedropastoriz/Desktop/AULAS/Aulas Guanabara/CascataAtividade/index.html'));
});

// Rota para a Calculadora
router.get('/calculadora1', (req, res) => {
  res.sendFile(path.join(__dirname, '/Users/pedropastoriz/Desktop/AULAS/Aulas Guanabara/CascataAtividade/calculadora1.js'));
});

// Rota para a página "ele-e"
router.get('/ele-e', (req, res) => {
  res.sendFile(path.join(__dirname, '/Users/pedropastoriz/Desktop/AULAS/Aulas Guanabara/CascataAtividade/ele-e.js'));
});

module.exports = router;
