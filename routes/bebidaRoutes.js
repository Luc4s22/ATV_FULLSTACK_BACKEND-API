const express = require('express');
const router = express.Router();

const bebidaController = require('../controllers/bebidaController');

router.get('/bebidas', bebidaController.listar);

router.post('/bebidas', bebidaController.cadastrar);

router.put('/bebidas/:id', bebidaController.editar);

router.delete('/bebidas/:id', bebidaController.excluir);

module.exports = router;