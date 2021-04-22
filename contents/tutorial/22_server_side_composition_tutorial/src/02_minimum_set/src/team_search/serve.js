const express = require('express')
const app = express()
const port = process.env.PORT || 6000;

app.get('/', (req, res) => {
  res.send('Team Search')
})

app.listen(port, () => {
  console.log(`Team Search app listening at http://localhost:${port}`)
})