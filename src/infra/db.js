const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://dbBlackBeauty:blackbeauty@vtexblackbeauty.8pjfq.mongodb.net/dbBlackBeauty?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function run() {
  try {
    await client.connect();
    const database = client.db('whishlist');
    const produtos = database.collection('produtos');

    const produto = await produtos.findOne({ title: 'Perfume' });

    console.log(produto);

  } catch {
    await client.close();
  }

}
run().catch(console.dir);