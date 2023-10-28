const { Router } = require('express');
const { createProduto } = require('../controllers/ProdutoController')

const router = Router();

router.post('/criarProduto', createProduto);

module.exports = router
