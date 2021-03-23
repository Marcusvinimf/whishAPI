const mongoose = require('mongoose');

const produtoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  productId:{
    type: String
  },
  productName:{
    type: String
  },
  linkText: {
    type: String,
  },
  productClusters: {
    type: Array,
  },
  items: {
    type: Array,
  }
})

module.exports = mongoose.model('Produtos', produtoSchema);