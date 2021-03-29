# マイクロフロントエンド {#micro-frontends}
## 概要 {#overview-of-micro-frontends}

マイクロフロントエンドは、マイクロサービスの考え方をフロントエンドに拡張した考え方だ。
次の図は、Michael Geers氏の[Micro Frontends - micro-frontends.org](https://micro-frontends.org/)より引用する。

<!-- textlint-disable -->

![<a href="https://micro-frontends.org/">Monolithic Frontends - micro-frontends.org</a>](https://micro-frontends.org/ressources/diagrams/organisational/monolith-frontback-microservices.png)

<!-- textlint-enable -->

モノリシックなアプリケーションからはじまり、フロントエンドとバックエンドが分離され、バックエンドのマイクロサービス化と変化している。
その変化は、次のリンクで説明してる。

* [Webシステムアーキテクチャの歴史](../history/03_history_of_web_system_architecture.md) 

バックエンド領域がマイクロサービス化されているが、依然フロントエンド部分はモノリシックなままだ。

<!-- textlint-disable -->

![<a href="https://micro-frontends.org/">End-To-End Teams with Micro Frontends - micro-frontends.org</a>](https://micro-frontends.org/ressources/diagrams/organisational/verticals-headline.png)

<!-- textlint-enable -->

そこで、フロントエンド部分もマイクロサービス化する。

## モノリスフロントエンドの課題 {#issues-of-monolithic-frontends}

なぜフロントエンド部分もマイクロサービス化するのか。
それは、次の2点がモノリスなフロントエンドの課題と筆者は考えている。

1. フロントエンド領域の変化が激しく、追従することが困難
2. システム・組織のスケールに、フロントエンドがボトルネック

### 課題1. フロントエンド領域の変化が激しく、追従することが困難 {#front-end-areas-are-changing-rapidly}

1つ目は、[フロントエンドソフトウェアの歴史](../history/02_history_of_frontend_software.md) を見て分かるとおり、フロントエンド領域の変化は激しい。
それは、次の3要素が複合しているからだと推測する。

* **利用者側の要求変化**
* **開発者側の要求変化** 
* **自由度の高いWebというプラットフォーム**

モノリスなフロントエンドだと、技術の進化に追従することは困難だ。
適切にアプリケーション設計（インタフェース設計）を維持しなければ、新たな技術を取り込むのにビックバンリリースをせざる得ない状況に陥る。
新たな技術を取り込むことは大切なことであり、それは外界の変化に追従しないといけないからだ。

### 課題2. システム・組織のスケールに、フロントエンドがボトルネック {#front-end-is-the-bottleneck}

2つ目は、[Webシステムアーキテクチャの歴史](../history/03_history_of_web_system_architecture.md) の最後に書いたとおりだ。

まず、システムは、サービスの成長に伴い安定したサービス提供を維持しなければならない。
フロントエンドがモノリスであると、部分的な機能に対してスケールできず、モノリス全体でスケールするしか方法がない。
たとえば、Next.jsでECサイトを1つのWebサーバに構築する。
そのサイトの中で、検索、推薦、商品表示の3つの機能を提供するページがあるとする。
仮に検索機能が高負荷によってレスポンスタイムが遅延したとしても、その稼働しているWebサーバをスケールアウトorスケールアップしかない。
ただし、高負荷の原因が、API処理のようなバックエンド側ではないとする。

次に組織は、短い開発サイクルで施策を打ち出し、継続的なフィードバックを得る必要がある。
<!-- textlint-disable -->
そのためには、開発者は高速に開発を進めなければならない。
<!-- textlint-enable -->
しかし、モノリスなフロントエンドの場合、難しいことがある。
それは、次の点が挙げられる。

* 幅広い知識（ドメイン）が要求される
* 全体バランスを整える高度な設計が要求される
* 調査やテストの奥深さが要求される

## 背景 {#background-of-micro-frontends}

マイクロフロントエンドの考え方には、組織に関する背景がある。
それは、縦割り組織、所謂[CFT（Cross Functional Team）](https://en.wikipedia.org/wiki/Cross-functional_team)である。
CFTは、共通の目標を持った、異なる専門性をもつ人々のグループを指す。
自主的に行動し、効率的にコラボレーションすることで、創造性のレベルを高めることができる。
異なる専門性とは、次のようなケースがある。

* フロントエンド（クライアント）
* バックエンド（サーバーサイド）
* デザイナー
* データエンジニア
* データサイエンティスト
* インフラエンジニア

フロントエンドのエンジニアは、UI/UXに関心があるがデータには比較的、専門性が低い。
そこで、データエンジニアとコラボレーションすることで、表現できるUI/UXのバリエーションを増やせる。

## メリット・デメリット {#pros-cons-of-micro-frontends}

TODO