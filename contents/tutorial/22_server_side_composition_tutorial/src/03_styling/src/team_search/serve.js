const express = require('express')
const app = express()
app.set("view engine", "ejs")
const port = process.env.PORT || 6000;

app.get('/search-box', (req, res) => {
  res.render('./search-box.ejs')
})

app.listen(port, () => {
  console.log(`Team Search app listening at http://localhost:${port}`)
})