# マイクロフロントエンド {#micro-frontends}
## 概要 {#overview-of-micro-frontends}

マイクロフロントエンドは、マイクロサービスの考え方をフロントエンドに拡張した考え方だ。
次の図は、Michael Geers氏の[Micro Frontends - micro-frontends.org](https://micro-frontends.org/)より引用する。

<!-- textlint-disable -->

![<a href="https://micro-frontends.org/">Monolithic Frontends - micro-frontends.org</a>](https://micro-frontends.org/ressources/diagrams/organisational/monolith-frontback-microservices.png)

<!-- textlint-enable -->

モノリシックなアプリケーションからはじまり、フロントエンドとバックエンドが分離され、バックエンドのマイクロサービス化と変化している。
この変化は、次のリンクで説明している。

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

1つ目は、[フロントエンドソフトウェアの歴史](../history/02_history_of_frontend_software.md) を見て分かるとおり、フロントエンド領域の変化は激しい。
それは、次の3要素が複合しているからだと推測する。

* **利用者側の要求変化**
* **開発者側の要求変化** 
* **自由度の高いWebというプラットフォーム**

モノリスなフロントエンドだと、技術の進化に追従することは困難だ。
適切にアプリケーション設計（インタフェース設計）を維持しなければ、新たな技術を取り込むのにビックバンリリースをせざる得ない状況に陥る。
新たな技術を取り込むことは大切なことであり、それは外界の変化に追従しないといけないからだ。

2つ目は、[Webシステムアーキテクチャの歴史](../history/03_history_of_web_system_architecture.md) の最後に書いたとおりだ。

まず、システムは、サービスの成長に伴い安定したサービス提供を維持しなければならない。
フロントエンドがモノリスであると、部分的な機能に対してスケールできず、モノリス全体でスケールするしか方法がない。
たとえば、Next.jsでECサイトを1つのWebサーバに構築する。
そのサイトの中で、検索、推薦、商品表示の3つの機能を提供するページがあるとする。
仮に検索機能が高負荷によってレスポンスタイムが遅延したとしても、その稼働しているWebサーバをスケールアウトorスケールアップしかない。
ただし、高負荷の原因が、API処理のようなバックエンド側ではないとする。

次に、組織は、短い開発サイクルで施策を打ち出し、継続的なフィードバックを得る必要がある。
<!-- textlint-disable -->
そのためには、開発者は高速に開発を進めなければならない。
しかし、モノリスなフロントエンドの中で開発する場合、幅広い知識（ドメイン）が要求される。
かつ、他へ影響しないような調査やテストが求められると、どうしても時間がかかってしまう。
<!-- textlint-enable -->
マイクロフロントエンドの背景には、縦割り組織、所謂CFT（Cross Functional Team）の考え方がある。
横割り組織だと、コミュニケーションコストが必要以上に発生し、業務が進みにくくなる。
CFTは、フロントエンドからデータベース、インフラまで専門家を1チームに揃えることで、スピーディに業務を進めることができる。

## メリット・デメリット {#pros-cons-of-micro-frontends}

あいうえお。
