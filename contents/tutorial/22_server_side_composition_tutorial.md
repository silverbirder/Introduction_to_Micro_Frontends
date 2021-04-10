# サーバーサイド組成 - チュートリアル {#server-side-composition-tutorial}


```javascript
// team_composite/serve.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 2000;
const searchHost = process.env.SEARCH_HOST || 'team-search-app:6000';
app.get('/',  async (req, res) => {
  const search = await (await fetch(`http://${searchHost}`)).text();
  res.send(`${search}`);
});
app.listen(port, () => {
  console.log(`Team Composite app listening at http://localhost:${port}`)
});
```

```javascript
// team_search/serve.js
const express = require('express')
const app = express()
const port = process.env.PORT || 6000;
app.get('/', (req, res) => {
  res.send('Team Search')
})
app.listen(port, () => {
  console.log(`Team Search app listening at http://localhost:${port}`)
})
```