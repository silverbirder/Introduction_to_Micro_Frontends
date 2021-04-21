# サーバーサイド組成 - チュートリアル {#server-side-composition-tutorial}

サーバーサイド組成は、次のような構成図を想定する。

![server-side-composition](../../assets/images/drawio/microfrontends/server-side-composition.png)

サンプルコードは、[こちら](https://github.com/Silver-birder/micro-frontends-sample-codes/tree/main/pattern/server_side)。

## 最小構成 {#minimum-set}

まず一番簡単な最小構成のサーバーサイド組成を説明する。
説明する順は、次のとおりだ。

1. 組成の説明
2. フラグメントの説明
3. 結果

### 組成 {#composite}

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

サーバーサイドでレンダリングする際、SEARCH_HOSTへ問い合わせた結果を使っている。

### フラグメント {#fragment}

SEARCH_HOSTでは、次のようなサーバーサイドレンダリングをしている。

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

これにより、`Team Search` という文字列を返却している。

### 結果 {#results}

その結果、次のような画面が表示される。

![minimum_set_server_side_composition_tutorial](../../assets/images/drawio/tutorial/minimum_set_server_side_composition_tutorial.png)