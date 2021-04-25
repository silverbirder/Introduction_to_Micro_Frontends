# 最小構成 {#minimum-set}

まず一番簡単な最小構成のサーバーサイド組成を説明する。
説明する順は、次のとおりだ。

1. 組成の説明
2. フラグメントの説明
3. 結果

<!-- textlint-disable -->

サンプルコードは、[こちら](https://github.com/Silver-birder/Introduction_to_Micro_Frontends/tree/main/contents/tutorial/22_server_side_composition_tutorial/src/02_minimum_set/)。

<!-- textlint-enable -->

## 組成 {#composite}

team_composite/serve.js
[include](./src/02_minimum_set/src/team_composite/serve.js)

サーバーサイドでレンダリングする際、SEARCH_HOSTへ問い合わせた結果を使っている。

## フラグメント {#fragment}

`SEARCH_HOST`では、次のようなサーバーサイドレンダリングをしている。

team_search/serve.js
[include](./src/02_minimum_set/src/team_search/serve.js)

これにより、`Team Search`という文字列を返却している。

## 結果 {#results}

その結果、次のような画面が表示される。

![minimum_set_server_side_composition_tutorial](../../../assets/images/drawio/tutorial/minimum_set_server_side_composition_tutorial.png)