const express = require('express')
const app = express()
app.set("view engine", "ejs")
const port = process.env.PORT || 5000;

app.get('/product-list', (req, res) => {
  const defualtQuery = {items: []}
  let query = defualtQuery;
  query['items'] = req.query['i'].split(',').filter((e) => e !== '');
  res.render('./product-list.ejs', query)
})

app.listen(port, () => {
  console.log(`Team Product app listening at http://localhost:${port}`)
})