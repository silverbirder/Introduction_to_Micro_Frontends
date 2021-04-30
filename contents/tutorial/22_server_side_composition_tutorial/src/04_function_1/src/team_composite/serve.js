const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.set("view engine", "ejs");

const port = process.env.PORT || 2000;
const inspireHost = process.env.INSPIRE_HOST || 'localhost:4000';
const productHost = process.env.PRODUCT_HOST || 'localhost:5000';
const searchHost = process.env.SEARCH_HOST || 'localhost:6000';

const items = ['apple', 'banana', 'grapes', 'mango', 'orange'];
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
};

app.get('/',  async (req, res) => {
  queryParams = req.query;
  keyword = queryParams['k'];
  let localItems = items;
  if (keyword !== undefined) {
    localItems = filterItems(items, keyword);
  }
  urlQueryParams = Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');
  const inspireList = await (await fetch(`http://${inspireHost}/inspire-list?i=${localItems.join(',')}`)).text();
  const productList = await (await fetch(`http://${productHost}/product-list?i=${localItems.join(',')}`)).text();
  const searchBox = await (await fetch(`http://${searchHost}/search-box?${urlQueryParams}`)).text();
  res.render("./index.ejs", {
    inspireList: inspireList,
    productList: productList,
    searchBox: searchBox
  });
});

app.listen(port, () => {
  console.log(`Team Composite app listening at http://localhost:${port}`)
});
