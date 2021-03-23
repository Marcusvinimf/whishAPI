const Produtos = require('../models/models-produtos');
const mongoose = require('mongoose');

module.exports = (app) => {

  app.get('/produtos', async (req, resp) => {

    try {
      const buscaUsuarios = await Produtos.find({});
      if (buscaUsuarios.length) {
        resp.status(200).json(buscaUsuarios)
      } else {
        resp.status(404).json({ Mensagem: "Nenhum usuário cadastrado" })
      }
    } catch {
      resp.status(500).json({ error: err })
    }
  })

  app.post('/produtos', (req, resp) => {
    const produto = new Produtos({
      _id: new mongoose.Types.ObjectId(),
      productId: req.body.productId,
      productName: req.body.productName,
      linkText: req.body.linkText,
      productClusters: req.body.productClusters,
      items: req.body.items
    })
    produto.save()
    resp.send("produto criado com sucesso!")
  })

  app.delete('/produtos/:Id', async (req, resp) => {
    const id = req.params.Id;

    try {
      const deletaProduto = await Produtos.remove({ _id: id })

      resp.status(200).send('Produto Deletado com sucesso')
    } catch (err) {
      resp.status(500).json({ Error: err })
    }
  })
}
