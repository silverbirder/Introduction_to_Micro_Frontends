const express = require('express')
const app = express()
app.set("view engine", "ejs")
const port = process.env.PORT || 6000;

app.get('/search-box', (req, res) => {
  const defualtQuery = {k: ''}
  const query = Object.assign(defualtQuery, req.query);
  res.render('./search-box.ejs', query);
})

app.listen(port, () => {
  console.log(`Team Search app listening at http://localhost:${port}`)
})