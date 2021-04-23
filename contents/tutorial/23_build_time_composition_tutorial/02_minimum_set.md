# 最小構成 {#minimum-set}

まず一番簡単な最小構成のビルドタイム組成を説明する。
説明する順は、次のとおりだ。

1. 組成の説明
2. フラグメントの説明
3. 結果

## 組成 {#composite}

team_composite/public/index.html
[include](./src/02_minimum_set/src/team_composite/public/index.html)

起動手段は、`react-scripts start`である。
次に、`#root`に対して `ReactDOM.render`を実行する。

team_composite/src/index.js
[include](./src/02_minimum_set/src/team_composite/src/index.js)

そのレンダリングで、`App.js`というものがある。

team_composite/src/App.js
[include](./src/02_minimum_set/src/team_composite/src/App.js)


こちらにあるとおり、`App.js`には `@bit/silver-birder.*`というモジュールをimportしている。

### フラグメント {#fragment}

`@bit/silver-birder.micro-frontends-sample-collections.team-search-text`のモジュールは、次のようなものである。

team_search/src/components/team-search-text/index.js
[include](./src/02_minimum_set/src/team_search/src/components/team-search-text/index.js)

このコードは、[bit.dev](https://bit.dev/)でprivateに公開している。

## 結果 {#results}

その結果、次のような画面が表示される。

![minimum_set_build_time_composition_tutorial](../../../assets/images/drawio/tutorial/minimum_set_build_time_composition_tutorial.png)