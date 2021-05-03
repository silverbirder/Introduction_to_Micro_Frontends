# 機能拡張v.1 {#function-1}

[前章](./03_styling.html)までは、見た目だけで機能はない。
本章では、簡単な検索機能を実装する。そこから、各フラグメントの連携手段を話す。

<!-- textlint-disable -->

サンプルコードは、[こちら](https://github.com/Silver-birder/Introduction_to_Micro_Frontends/tree/main/contents/tutorial/23_build_time_composition_tutorial/src/04_function_1/)。

<!-- textlint-enable -->

## 組成 {#composite}

team_composite/src/App.js
[include](./src/04_function_1/src/team_composite/src/App.js)

`.team-search-box-button`からカスタムイベントが発火される。そのイベントにある`items`を`TeamProductList`と`TeamInspireList`に引き渡す。

## フラグメント {#fragment}
### team-search-box {#team-search-box}

team_search/src/components/team-search-box/index.js
[include](./src/04_function_1/src/team_search/src/components/team-search-box/index.js)

`.team-search-box-button`を押下された場合、`team-search-box-input`のキーワードが含まれている`items`を抽出する。
その`items`をカスタムイベントとして発火する。

### team-product-list {#team-product-list}

<!-- textlint-disable -->

team_product/src/components/team-product-list/index.js
[include](./src/04_function_1/src/team_product/src/components/team-product-list/index.js)

<!-- textlint-enable -->

`ProductList`は`{this.props.items}`から構築する。

### team-inspire-list {#team-inspire-list}

<!-- textlint-disable -->

team_inspire/src/components/team-inspire-list/index.js
[include](./src/04_function_1/src/team_inspire/src/components/team-inspire-list/index.js)

<!-- textlint-enable -->

`{this.props.items}`から`recommendItems`のキーにマッチする値を抽出する。
それを`InspireList`として構築する。

## 結果 {#results}

その結果、次のような画面が表示される。

![04_function_1_client_side_composition_tutorial](../../../assets/images/drawio/tutorial/04_function_1_build_time_composition_tutorial.png)