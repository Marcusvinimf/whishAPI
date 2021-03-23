const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, resp) => {
  resp.send('<h1>home agora ao vivo</h1>');
});

app.listen(port, () => {
  console.log(`Tudo sendo ouvido corretamente, confira: http://localhost:${port}`)
})