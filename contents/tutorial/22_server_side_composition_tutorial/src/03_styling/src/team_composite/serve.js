const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.set("view engine", "ejs");

const port = process.env.PORT || 2000;
const inspireHost = process.env.INSPIRE_HOST || 'localhost:4000';
const productHost = process.env.PRODUCT_HOST || 'localhost:5000';
const searchHost = process.env.SEARCH_HOST || 'localhost:6000';

app.get('/',  async (req, res) => {
  const inspireList = await (await fetch(`http://${inspireHost}/inspire-list`)).text();
  const productList = await (await fetch(`http://${productHost}/product-list`)).text();
  const searchBox = await (await fetch(`http://${searchHost}/search-box`)).text();
  res.render("./index.ejs", {
    inspireList: inspireList,
    productList: productList,
    searchBox: searchBox
  });
});

app.listen(port, () => {
  console.log(`Team Composite app listening at http://localhost:${port}`)
});
