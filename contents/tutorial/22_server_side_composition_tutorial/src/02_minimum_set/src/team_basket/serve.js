const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',  async (req, res) => {
  res.send(`Team Basket`);
});

app.listen(port, () => {
  console.log(`Team Basket app listening at http://localhost:${port}`)
});
