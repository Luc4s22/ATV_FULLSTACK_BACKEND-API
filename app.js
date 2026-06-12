const express = require('express');
const cors = require('cors');

const bebidaRoutes = require('./routes/bebidaRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(bebidaRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});