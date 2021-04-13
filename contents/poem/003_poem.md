# マイクロフロントエンド {#micro-frontends}
## 組成パターン {#composite-pattern}
APIゲートウェイや、サービスディスカバリを使う必要がある。
データベースや検索システムは、どのチームが管理し、どう他チームへ提供するか。
それは、依存しないようなものか。

## 考えること {#thing}

* ルーティング
* 状態管理
* コミュニケーション
* 履歴管理
* キャッシュ
* 計測
* 認証

フラグメントの共有方法や、パッケージ共有化などビルドサイズの削減も大事。
デザインシステムやパフォーマンスは、組織全体で共有すること。
モノリスかマルチリポなのか。
メリット・デメリット。
https://speakerdeck.com/silverbirder/micro-frontends-on-kubernetes-trial

## 実績企業 {#compoany}

https://github.com/Silver-birder/think-micro-frontends/blob/master/research/docs/company.md