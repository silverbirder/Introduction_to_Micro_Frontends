# スタイリング {#styling}

本章では、目的とするレイアウトへ整えるようにする。

## 組成 {#composite}

team-composite/index.html
[include](./src/03_styling/src/team-composite/index.html)

全体のレイアウトは、`display: grid;`で制御する。

## フラグメント {#fragment}

team-search/team-search.js
[include](./src/03_styling/src/team-search/team-search.js)


team-search-text/src/TeamSearchBox.js
[include](./src/03_styling/src/team-search/src/TeamSearchBox.js)

## 結果 {#results}

その結果、次のような画面が表示される。

![styling_client_side_composition_tutorial](../../../assets/images/drawio/tutorial/styling_client_side_composition_tutorial.png)