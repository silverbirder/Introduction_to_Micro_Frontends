# フロントエンドソフトウェアの歴史 {#history-of-frontend-software}

![02_history_of_frontend_software_1](../assets/images/drawio/02_history_of_frontend_software_1.png)

[2006年、jQueryの誕生](https://en.wikipedia.org/wiki/JQuery)により、フロントエンドの開発は加速する。
主に、次の2つがjQueryの素晴らしいところだ。

* DOM操作やイベント処理が容易
* ブラウザ間の非互換性をサポート

[2009年、Node.jsが誕生](https://en.wikipedia.org/wiki/Node.js)した。
Node.jsは、V8Javascriptエンジン上に構築されたJavascript実行環境の1つである。
サーバサイドでJavascriptを動かすことができるため、 Universal JavaScript（Isomorphic JavaScript）が実現できる。
つまり、クライアントもサーバサイド両方ともJavascriptで構築できるということだ。
イベント駆動型プログラミング言語であるNode.jsは、[C10K問題](https://en.wikipedia.org/wiki/C10k_problem)を解決する。

[2010年、npmが誕生](https://en.wikipedia.org/wiki/Node.js)した。
フロントエンドパッケージの中央リポジトリであり、現在100万を超えるパッケージがある。

jQueryの開発の加速後、課題が見えてきた。一貫したデータの管理・処理する機能がないところだ。
AngularJS、Backbone.js、Ember.jsのようなクライアントサイドにおけるMVCアーキテクチャが話題となる。
AngularJSから、AngularJS2への移行に互換性がないため、Angularユーザは激怒した。

![02_history_of_frontend_software_2](../assets/images/drawio/02_history_of_frontend_software_2.png)

[2012年、Bowerが誕生](https://github.com/bower/bower/blob/master/CHANGELOG.md)した。
Bowerは、フロントエンドにおけるパッケージマネージャーを管理する。
執筆当時（2021年3月時点）のBower公式によると、YarnやWebpackの使用をお勧めされている。

[2013年、Reactが誕生](https://en.wikipedia.org/wiki/React_%28JavaScript_library%29)した。
仮想DOMや、一方向データフロー、Fluxといった機能が登場した。
これらは、従来のフロントエンド開発におけるデータバインディングの課題を解決する。
仮想DOMによって、データ更新に伴うレンダリングが差分更新となり、パフォーマンスが向上する。
Fluxによって、状態は唯一の情報源として扱い、一方向データフローを管理できるようになった。

[2014年、Vue.jsが誕生](https://en.wikipedia.org/wiki/Vue.js)した。
GoogleでAngularJSを使用していたEvan Youによって、Vue.jsが開発された。
それには、プログレッシブフレームワークという特性があり、段階的に導入できるメリットがある。
React.jsとは違い、それはコンポーネントに焦点があたっている。
そのため、コアライブラリは、コンポーネントに関するもので、ルーティングや状態管理はサポートライブラリと区分けされている。

[2015年、Reduxが誕生](https://en.wikipedia.org/wiki/Redux_%28JavaScript_library%29)した。
Fluxアーキテクチャの影響により、状態管理のライブラリとしてReduxが生まれた。
Reactから切り離されているため、他のライブラリでも使用可能となる。
また、Reduxの影響により、Angularはngrx、Vue.jsはVuexというライブラリが派生する。

[同年、GraphQLが誕生](https://en.wikipedia.org/wiki/GraphQL)した。
GraphQLは、API向けのクエリ言語である。
クライアント側から要求するデータ構造を定義できるため、サーバ側は必要以上のデータを返却しなくて済む。
そのような柔軟性は、多種多様なデータをもつサービスには効果的である。

![02_history_of_frontend_software_3](../assets/images/drawio/02_history_of_frontend_software_3.png)

