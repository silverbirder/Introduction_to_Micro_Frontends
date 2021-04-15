# マイクロフロントエンドにおける注意事項 {#things-to-keep-in-mind-of-micro-frontends}
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

* https://github.com/Silver-birder/think-micro-frontends/blob/master/research/docs/company.md

## コアドメインとサブドメイン　{#core-domain-and-sub-domain}

マイクロフロントエンドでは、コアドメインとサブドメインの定義が大切だ。
ドメインの定義が不適切だと、密結合なフロントエンドとなり、アジリティの低下につながる。

* https://medium.com/dazn-tech/identifying-micro-frontends-in-our-applications-4b4995f39257

## WebサイトとWebアプリとマイクロフロントエンド {#Web-site-and-Web-app-and-micro-frontends}

マイクロフロントエンドは、WebサイトとWebアプリの中間にある形態がよいとされている。

<!-- textlint-disable -->

![<a href="https://www.linkedin.com/pulse/microfrontends-approach-building-scalable-web-apps-vinci-rufus">Microfrontends: An approach to building Scalable Web Apps</a>](https://res.cloudinary.com/silverbirder/image/upload/v1614412210/silver-birder.github.io/blog/microfrontends-document-application.png)

<!-- textlint-enable -->

WebサイトやWebアプリの両極端に位置するサービスへ、マイクロフロントエンドを適用すると、生産性の低下となる。

## モノリポ・マルチリポ {#monolithic-repositories-and-multi-repositories}
### モノリポ {#monolithic-repositories}

* Pros
  * コードベース全体に簡単にアクセス可能（検出可能性が高い）
* Cons
  * 大規模なチームで作業しているときに、動作が遅くなる傾向あり
  * バージョン管理下のコミットとファイルの数が増加
* 技術
  * nx.dev
  * lerna

### マルチリポ {#multi-repositories}

* Pros
  * 大規模なプロジェクトと、それに取り組む大規模なチームがある場合に最適
* Cons
  * 各マイクロアプリを個別にビルドする必要あり

<!-- ## マイクロフロントエンドのProsCons {#micro-frontends-pros-cons}
### マイクロフロントエンドのPros {#micro-frontends-pros}

|観点|内容|
|--|--|
|独立性|・任意のテクノロジーと任意のチームで開発可能<br>|
|展開|・特定の機能をエンドツーエンド（バック、フロント、デプロイ）で確実に実行可能|
|俊敏性|・特定のドメインについて最高の知識をもつチーム間で作業を分散すると、リリースプロセスが確実にスピードアップして簡素化される。<br>・フロントエンドとリリースが小さいということは、リグレッションテストの表面がはるかに小さいことを意味する。リリースごとの変更は少なく、理論的にはテストに費やす時間を短縮できる。<br>・フロントエンドのアップグレード/変更にはコストが小さくなる|

### Micro Frontendsの良さ {#micro-frontends-good}

私が思うMicro Frontendsから得られる最大の恩恵は、"<b>局所化</b>" だと思います。

フロントエンドをサービスごと（商品、注文、検索など）に分割することで

* サービスの<b>専門性</b>向上
  * ex. 対象サービスのフロントエンドだけに集中できる
* サービスの<b>開発速度</b>向上
  * ex. 対象サービスのソースコードだけ読めばよい
  * ex. 対象サービスだけにライブラリアップデートすればよい
  * ex. フレームワークの切り替えは対象サービスだけすればよい

少し薄っぺらいかも知れませんが、↑のように実感しています。

※ Micro FrontendsはWebベースのアーキテクチャになります。

### マイクロフロントエンドのCons {#micro-frontends-cons}

|観点|内容|
|--|--|
|独立性|・独立できず、相互接続しているチームが存在しがち<br>・多くの機能で複数のマイクロフロントエンドにまたがる変更が必要になり、独立性や自律性が低下<br>・ライブラリを共有すること自体は問題ないが、不適切な分割によって作成された任意の境界を回避するための包括的な場所として使用すると、問題が発生する。<br>・コンポーネント間の通信の構築は、実装と維持が困難であるだけでなく、コンポーネントの独立性が取り除かれる<br>・横断的関心ことへの変更ですべてのマイクロフロントエンドを変更することは、独立性が低下する|
|展開|・より大きな機能の部分的な実装が含まれているため、個別にリリースできない<br>・サイト全体のCI / CDプロセス|
|俊敏性|・重複作業が発生する<br>・検出可能性が低下した結果、一部の標準コンポーネントを共有できず、個別のフロントエンド間で実装が重複してしまう。<br>・共有キャッシュがないと、各コンポーネントは独自のデータセットをプルダウンする必要があり、大量の重複呼び出しが発生する。|
|パフォーマンス|・マイクロフロントエンドの実装が不適切な場合、パフォーマンスが低下する可能性がある。|

### Micro Frontendsの難しさ {#micro-frontends-difficulty}

ここは、まだちゃんと掘り下げれていませんが、次のようなものがあります。

* 特定チームが改善しても、チーム全体が改善しない
  * ex. あるチームがWebpackのビルド時間短縮に成功しても、他のチームは影響を受けない
  * ex. すべてのチームが採用しているライブラリのセキュリティパッチは、それぞれのチームが更新しなければならない
* チーム全体へ共有する仕組みを考える必要がある
  * ex. デザインシステム、パフォーマンス、ナレッジ
* エッジな技術スタック採用は、チームメンバー移動を困難にする
  * ex. パラダイムシフトが発生してしまう技術スタック
 -->