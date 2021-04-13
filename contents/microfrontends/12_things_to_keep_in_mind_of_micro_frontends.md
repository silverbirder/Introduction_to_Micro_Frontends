# マイクロフロントエンドにおける注意事項 {#things-to-keep-in-mind-of-micro-frontends}
## ドメインとサブドメイン　{#domain-and-sub-domain}

ドメイン複雑、共有しない。

## マイクロフロントエンドの連携手段 {#communication-frontends}

* 気を付けないといけないこと（Route,State,Message）

* ルーティング
* 状態管理
* コミュニケーション
* 履歴管理
* キャッシュ
* 計測
* 認証

APIゲートウェイや、サービスディスカバリを使う必要がある。
データベースや検索システムは、どのチームが管理し、どう他チームへ提供するか。
それは、依存しないようなものか。

## 業種 {#industry}

* 業種

## その他 {#other}

導入タイミング。大規模。

## 考えること {#thing}

フラグメントの共有方法や、パッケージ共有化などビルドサイズの削減も大事。
デザインシステムやパフォーマンスは、組織全体で共有すること。
モノリスかマルチリポ。
メリット・デメリット。
https://speakerdeck.com/silverbirder/micro-frontends-on-kubernetes-trial

## 実績企業 {#compoany}

https://github.com/Silver-birder/think-micro-frontends/blob/master/research/docs/company.md