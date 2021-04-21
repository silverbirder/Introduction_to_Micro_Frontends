# クライアントサイド組成 - チュートリアル {#client-side-composition-tutorial}

クライアントサイド組成は、次のような構成図を想定する。

![client-side-composition](../../assets/images/drawio/microfrontends/client-side-composition.png)

サンプルコードは、[こちら](https://github.com/Silver-birder/micro-frontends-sample-codes/tree/main/pattern/client_side)。

## 最小構成 {#minimum-set}

まず一番簡単な最小構成のクライアントサイド組成を説明する。
説明する順は、次のとおりだ。

1. 組成の説明
2. フラグメントの説明
3. 結果

### 組成 {#composite}

```html
<!-- team-composite/index.html -->
<script type="module" src="./search/team-search-text.js" defer></script>
<team-search-text .title=""></team-search-text>
```

このように、組成するHTMLではフラグメントを読み込む。このフラグメントには、カスタム要素を定義してある。
そのため、`<team-search-text>`のタグが使える。

### フラグメント {#fragment}

```javascript
// team-search-text/team-search-text.js
import { TeamSearchText } from './src/TeamSearchText.js';
window.customElements.define('team-search-text', TeamSearchText);
```

team-search-textと呼ばれるカスタム要素を定義している。
team-search-textの詳細は、次のとおりである。

```javascript
// team-search-text/src/TeamSearchText.js
import { html, css, LitElement } from 'lit-element';

export class TeamSearchText extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }
  constructor() {
    super();
    this.title = '';
  }
  render() {
    return html`<div>Team Search ${this.title}</div>`;
  }
}
```

### 結果 {#results}

その結果、次のような画面が表示される。

![minimum_set_client_side_composition_tutorial](../../assets/images/drawio/tutorial/minimum_set_client_side_composition_tutorial.png)