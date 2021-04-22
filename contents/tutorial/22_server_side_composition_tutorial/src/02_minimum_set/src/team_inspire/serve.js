const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Team Inspire')
})

app.listen(port, () => {
  console.log(`Team Inspire app listening at http://localhost:${port}`)
})