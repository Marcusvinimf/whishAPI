const express = require('express');
const app = express();
const port = 8080;


app.get('/', (req, resp)=>{
  resp.send('<h1>home</h1>');
});

app.listen(port, ()=>{
  console.log(`Tudo sendo ouvido corretamente, confira: http://localhost:${port}`)
})