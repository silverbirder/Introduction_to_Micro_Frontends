# マイクロフロントエンドの検討事項 {#micro-frontends-considerations}
## マイクロフロントエンドの適用対象 {#target-of-micro-frontends}

マイクフロントエンドを適用するサービスは、中規模から大規模なものがよい。
その規模感の具体的な指標は、秒間リクエスト数がよいだろう。
この考え方はWebサービスを対象としており、ネイティブアプリは対象としていない。
詳しくは、[Micro Frontends in Action](https://www.manning.com/books/micro-frontends-in-action)を参照。

## 組成時のフロントエンド連携手段 {#means-of-frontend-coordination-during-composition}

各フロントエンド間の連携について考える必要がある。
具体的には、次のような機能を列挙する。

* 状態管理
* 履歴管理
* 計測
* 認証
* キャッシュ
* ルーティング
* イベントバス

また、次のようなレイヤーも、場合によっては必要である。

* APIゲートウェイ
* サービスディスカバリ

フロントエンド全体として共有すべきことがある。

* デザインシステム
* パフォーマンスメトリクス
* パッケージ共有とビルドプロセス

## マイクロフロントエンドの実績企業 {#companies-that-have-used-micro-frontends}

マイクロフロントエンドの実績がある企業を、次に列挙する。

* IKEA
* Spotify
* DAZN

次のリンクには、より多くの企業名を記録している。

* [github.com/Silver-birder/think-micro-frontends/research/docs/company.md](https://github.com/Silver-birder/think-micro-frontends/blob/master/research/docs/company.md)

## コアドメインとサブドメイン　{#core-domain-and-sub-domain}

マイクロフロントエンドでは、コアドメインとサブドメインの定義が大切だ。
ドメインの定義が不適切だと、密結合なフロントエンドとなり、アジリティの低下につながる。

* [Identifying micro-frontends in our applications | by Luca Mezzalira | DAZN Engineering | Medium](https://medium.com/dazn-tech/identifying-micro-frontends-in-our-applications-4b4995f39257)

## WebサイトとWebアプリとマイクロフロントエンド {#Web-site-and-Web-app-and-micro-frontends}

マイクロフロントエンドは、WebサイトとWebアプリの中間にある形態がよいとされている。

<!-- textlint-disable -->

![<a href="https://www.linkedin.com/pulse/microfrontends-approach-building-scalable-web-apps-vinci-rufus">Microfrontends: An approach to building Scalable Web Apps</a>](https://res.cloudinary.com/silverbirder/image/upload/v1614412210/silver-birder.github.io/blog/microfrontends-document-application.png)

<!-- textlint-enable -->

WebサイトやWebアプリの両極端に位置するサービスへ、マイクロフロントエンドを適用すると、生産性の低下となる。

## モノリポ・マルチリポ {#monolithic-repositories-and-multi-repositories}

マイクロフロントエンドのリポジトリ戦略として、モノリポとマルチリポがある。
そのメリットやデメリットは、次のとおりだ。

* モノリポ
  * メリット
    * コードベース全体に簡単にアクセス可能（検出可能性が高い）
  * デメリット
    * 大規模なチームで作業しているときに、動作が遅くなる傾向あり
    * バージョン管理下のコミットとファイルの数が増加
  * 技術
    * nx.dev
    * lerna
* マルチリポ
  * メリット
    * 大規模なプロジェクトと、それに取り組む大規模なチームがある場合に最適
  * デメリット
    * 各マイクロアプリを個別にビルドする必要あり