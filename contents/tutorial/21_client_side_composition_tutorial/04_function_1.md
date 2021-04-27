# 機能拡張v.1 {#function-1}

[前章](./03_styling.html)までは、見た目だけで機能はなかった。
本章では、簡単な検索機能を実装する。そこから、各フラグメントの連携手段を話す。

<!-- textlint-disable -->

サンプルコードは、[こちら](https://github.com/Silver-birder/Introduction_to_Micro_Frontends/tree/main/contents/tutorial/21_client_side_composition_tutorial/src/04_function_1/)。

<!-- textlint-enable -->

## 組成 {#composite}

team-composite/index.html
[include](./src/04_function_1/src/team-composite/index.html)

team-composite/src/eventBus.js
[include](./src/04_function_1/src/team-composite/src/eventBus.js)

## フラグメント {#fragment}
### team-search-box {#team-search-box}

team-search/team-search.js
[include](./src/04_function_1/src/team-search/team-search.js)

team-search-text/src/TeamSearchBox.js
[include](./src/04_function_1/src/team-search/src/TeamSearchBox.js)

URLと履歴管理について考えないといけないが、今回は何もしない。

### team-product-list {#team-product-list}
`team-product-list`は、次のjsから読み込む。

team-product/src/team-product.js
[include](./src/04_function_1/src/team-product/team-product.js)

team-product/src/TeamProductList.js
[include](./src/04_function_1/src/team-product/src/TeamProductList.js)

team-product/src/TeamProductItem.js
[include](./src/04_function_1/src/team-product/src/TeamProductItem.js)

### team-inspire-list {#team-inspire-list}
`team-inspire-list`は、次のjsから読み込む。

team-inspire/src/team-inspire.js
[include](./src/04_function_1/src/team-inspire/team-inspire.js)

team-inspire/src/TeamInspireList.js
[include](./src/04_function_1/src/team-inspire/src/TeamInspireList.js)

team-inspire/src/TeamInspireItem.js
[include](./src/04_function_1/src/team-inspire/src/TeamInspireItem.js)

## 結果 {#results}

その結果、次のような画面が表示される。

![04_function_1_client_side_composition_tutorial](../../../assets/images/drawio/tutorial/04_function_1_client_side_composition_tutorial.png)