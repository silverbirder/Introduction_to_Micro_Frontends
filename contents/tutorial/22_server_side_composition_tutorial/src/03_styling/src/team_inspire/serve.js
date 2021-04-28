const express = require('express')
const app = express()
app.set("view engine", "ejs")
const port = process.env.PORT || 4000;

app.get('/inspire-list', (req, res) => {
  res.render('./inspire-list.ejs', {
    items: [
      "Product 1",
      "Product 2",
      "Product 3",
    ]
  });
})

app.listen(port, () => {
  console.log(`Team Inspire app listening at http://localhost:${port}`)
})