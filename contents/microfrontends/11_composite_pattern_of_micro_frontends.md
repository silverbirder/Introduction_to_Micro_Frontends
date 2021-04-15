# マイクロフロントエンドの組成パターン {#composite-pattern-of-micro-frontends}

本章では、実際にマイクロフロントエンドを構築する際の組成パターンについて紹介する。

## 前提 {#premise}

1つのECサイトを3つのチームでアプリケーション開発する想定とする。

![premise-micro-frontends](../../assets/images/drawio/microfrontends/premise-micro-frontends.png)

* Search Team
  * Productを検索する
* Product Team
  * Productを魅せる
* Inspire Team
  * Productへの購買意欲を高める

これらのチームは、バックエンドからフロントエンドまで1チームで構成されている。
フロントエンドは、コンテンツ（HTML,CSS,JS）を提供する。

## Client-side組成パターン {#client-side-composition}

クライアントサイドレンダリングするタイミングで、組成する。
一番わかりやすい例が、iframeやWeb Componentsである。
各フロントエンドチームのコンテンツを、ブラウザ上で組成する。
もっとも簡単な手段は、iframeによる読み込みだ。

![client-side-composition](../../assets/images/drawio/microfrontends/client-side-composition.png)

## Server-side組成パターン {#server-side-composition}

サーバーサイドレンダリングのタイミングで、組成する。
一番わかりやすい例が、SSIである。
各フロントエンドチームのコンテンツを、サーバーサイドで組成する。

![server-side-composition](../../assets/images/drawio/microfrontends/server-side-composition.png)

## Build-time組成パターン {#build-time-composition}

アプリケーションのビルドするタイミングで、組成する。
一番わかりやすい例が、[bit.dev](https://bit.dev/)のようなサービスである。
各フロントエンドチームがnpm moduleを開発する。
そのmoduleには、コンテンツ（HTML,CSS,JS）を提供する機能を含める。
フロントエンドアプリケーションは、各フロントエンドチームのmoduleをインポートして利用する。

![build-time-composition](../../assets/images/drawio/microfrontends/build-time-composition.png)

## 組成パターンとソフトウェア {#composition-pros-cons}

|種類|解決手段|メリット|デメリット| 
| ---- | ---- | ---- | ---- | 
|サーバーサイド統合| SSI, ESI, Tailor, Podium  |・SEO対策上よい<br>・ユーザーのネットワークレイテンシーが少ない<br>・初回ロードパフォーマンスが優れている|・インタラクションアプローチが不得意|
|クライアントサイド統合|<s>Ajax, Iframe,</s> Web Components  |・Web標準<br>・シャドウDOMによる堅牢な作り|・サポートブラウザに依存する<br>・クライアント側のJavaScriptが有効であること|

## 組成パターンとメリット・デメリット {#composition-pros-cons}

|種類|選択基準|
| ---- | ---- | 
|サーバーサイド統合|良好な読み込みパフォーマンスと検索エンジンのランキングがプロジェクトの優先事項であること|
|クライアントサイド統合|さまざまなチームのユーザーインタフェースを1つの画面に統合する必要があるインタラクティブなアプリケーションを構築すること|

|統合|選択基準|技術|
|--|--|--|
|サーバーサイド統合|良好な読み込みパフォーマンスと検索エンジンのランキングがプロジェクトの優先事項であること|・Podium<br>・Ara-Framework<br>・Tailor<br>・Micromono<br>・PuzzleJS<br>・namecheap/ilc|
|エッジサイド統合|サーバーサイド統合と同じ|・Varnish EDI <br>・Edge Worker<br><br>CDN<br>・ Akamai<br>・ Cloudfront<br>・ Fastly<br>・CloudFlare<br>・ Fly.io|
|クライアント統合|さまざまなチームのユーザーインタフェースを1つの画面に統合する必要があるインタラクティブなアプリケーションを構築すること|・Ajax<br>・Iframe<br>・Web Components<br>・Luigi<br>・Single-Spa<br>・FrintJS<br>・Hinclude<br>・Mashroom|
|ビルド時統合|他の統合が非常に複雑に思われる場合に、<br>小さなプロジェクト（3チーム以下）にのみ使用すること|・ Bit.dev<br>・ Open Components<br>・ Piral|

## マイクロフロントエンドの分割ポリシー {#division-policy-of-micro-frontends}

これまで話してきた組成は、水平分割である。
つまり、1つのページに複数のフロントエンドを組成する。
これとは、対照的に垂直分割もある。
これは、1ページに1つのフロントエンドチームが対応する。

* 水平分割
  * 画面内にある要素で分割
* 垂直分割
  * 画面毎に分割