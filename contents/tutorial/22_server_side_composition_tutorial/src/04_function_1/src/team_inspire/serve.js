const express = require('express')
const app = express()
app.set("view engine", "ejs")
const port = process.env.PORT || 4000;

const recommendItems = {
  apple: ['apple pie'], 
  banana: ['banana juice'], 
  grapes: ['grape mousse'], 
  mango: ['mango ice'], 
  orange: ['orange cake']
}

app.get('/inspire-list', (req, res) => {
  const defualtQuery = {items: []}
  let query = defualtQuery;
  const productItems = req.query['i'].split(',').filter((e) => e !== '');
  const localRecommendItems = productItems.map((item) => recommendItems[item]).flat();
  query['items'] = localRecommendItems;
  res.render('./inspire-list.ejs', query);
})

app.get('/inspire-label', (req, res) => {
  res.render('./inspire-label.ejs');
})

app.listen(port, () => {
  console.log(`Team Inspire app listening at http://localhost:${port}`)
})