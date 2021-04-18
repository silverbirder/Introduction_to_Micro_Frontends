# クライアントサイド組成 - チュートリアル {#client-side-composition-tutorial}

クライアントサイド組成は、次のような構成図を想定する。

![client-side-composition](../../assets/images/drawio/microfrontends/client-side-composition.png)

先に、組成している部分を紹介する。

```html
<!-- team-composite/index.html -->
<script type="module" src="./search/team-search-text.js" defer></script>
<team-search-text .title="Text"></team-search-text>
```

このように、Search Teamから提供されるカスタム要素モジュールを読み込む。
カスタム要素モジュールは、次のようなコードになる。

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
    this.title = 'Text';
  }
  render() {
    return html`<div>Team Search ${this.title}</div>`;
  }
}
```
