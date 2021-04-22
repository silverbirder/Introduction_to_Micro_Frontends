const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 2000;
const basketHost = process.env.BASKET_HOST || 'localhost:3000';
const inspireHost = process.env.INSPIRE_HOST || 'localhost:4000';
const productHost = process.env.PRODUCT_HOST || 'localhost:5000';
const searchHost = process.env.SEARCH_HOST || 'localhost:6000';

app.get('/',  async (req, res) => {
  const basket = await (await fetch(`http://${basketHost}`)).text();
  const inspire = await (await fetch(`http://${inspireHost}`)).text();
  const product = await (await fetch(`http://${productHost}`)).text();
  const search = await (await fetch(`http://${searchHost}`)).text();
  res.send(`${basket}<br>${inspire}<br>${product}<br>${search}`);
});

app.listen(port, () => {
  console.log(`Team Composite app listening at http://localhost:${port}`)
});
