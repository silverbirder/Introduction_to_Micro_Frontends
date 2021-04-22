const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Team Product')
})

app.listen(port, () => {
  console.log(`Team Product app listening at http://localhost:${port}`)
})