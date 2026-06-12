const bebidas = require('../models/bebidaModel');

exports.listar = (req, res) => {
  res.json(bebidas);
};

exports.cadastrar = (req, res) => {
  const { nome, categoria, teor } = req.body;

  const novaBebida = {
    id: Date.now(),
    nome,
    categoria,
    teor
  };

  bebidas.push(novaBebida);

  res.status(201).json(novaBebida);
};

exports.editar = (req, res) => {
  const id = Number(req.params.id);

  const bebida = bebidas.find(b => b.id === id);

  if (!bebida) {
    return res.status(404).json({
      mensagem: 'Bebida não encontrada'
    });
  }

  bebida.nome = req.body.nome;
  bebida.categoria = req.body.categoria;
  bebida.teor = req.body.teor;

  res.json(bebida);
};

exports.excluir = (req, res) => {
  const id = Number(req.params.id);

  const index = bebidas.findIndex(
    b => b.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      mensagem: 'Bebida não encontrada'
    });
  }

  bebidas.splice(index, 1);

  res.json({
    mensagem: 'Bebida removida'
  });
};