# スタイリング {#styling}

[前章](./02_minimum_set.html)では、単純な組成だけであった。
本章では、目的とするレイアウトに近づける。機能はまだ作らない。

<!-- textlint-disable -->

サンプルコードは、[こちら](https://github.com/Silver-birder/Introduction_to_Micro_Frontends/tree/main/contents/tutorial/23_build_time_composition_tutorial/src/03_styling/)。

<!-- textlint-enable -->

## 組成 {#composite}

team_composite/src/App.js
[include](./src/03_styling/src/team_composite/src/App.js)

各フラグメントは`@bit/silver-birder.micro-frontends-sample-collections`から`import`している。
それぞれは、次のフラグメントになる。

## フラグメント {#fragment}
### team-search-box {#team-search-box}

team_search/src/components/team-search-box/index.js
[include](./src/03_styling/src/team_search/src/components/team-search-box/index.js)

### team-product-list {#team-product-list}

<!-- textlint-disable -->

team_product/src/components/team-product-list/index.js
[include](./src/03_styling/src/team_product/src/components/team-product-list/index.js)

<!-- textlint-enable -->

## 結果 {#results}

その結果、次のような画面が表示される。

![styling_build_time_composition_tutorial](../../../assets/images/drawio/tutorial/styling_build_time_composition_tutorial.png)