const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const port = process.env.PORT;
const app = express();
const uri = "mongodb+srv://dbBlackBeauty:blackbeauty@vtexblackbeauty.8pjfq.mongodb.net/dbBlackBeauty?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(cors());

const produtosController = require('./controllers/produtos-controller');
produtosController(app)

app.listen(port, () => {
  console.log(`Tudo sendo ouvido corretamente `)
})