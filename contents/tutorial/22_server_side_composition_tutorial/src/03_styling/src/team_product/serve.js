const express = require('express')
const app = express()
app.set("view engine", "ejs")
const port = process.env.PORT || 5000;

app.get('/product-list', (req, res) => {
  res.render('./product-list.ejs', {
    items: [
      "Product 1",
      "Product 2",
      "Product 3",
    ]
  })
})

app.listen(port, () => {
  console.log(`Team Product app listening at http://localhost:${port}`)
})