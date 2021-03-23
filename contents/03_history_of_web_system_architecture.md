# Webシステムアーキテクチャの歴史[私見] {#history-of-Web-system-architecture}

![03_history_of_web_system_architecture_1](../assets/images/drawio/03_history_of_web_system_architecture_1.png)

BrowserとServerだけの構成というシンプルなWebシステムアーキテクチャだ。
Serverから静的コンテンツを返すだけや、CGIを使った動的コンテンツを返すこともできる。

![03_history_of_web_system_architecture_2](../assets/images/drawio/03_history_of_web_system_architecture_2.png)

データベースが登場。
Serverから直接データベースを参照する構成や、データベースからAPIを提供する構成がある。
前者は、直接参照するためレスポンスタイムが後者よりも短い。
後者は、APIというインタフェースを挟むことで、データベースの変更が前者よりも容易。

**レスポンスタイム短縮する常套手段** として、**キャッシュレイヤ** を挟むことである。
たとえば、APIとデータベースの間にキャッシュサーバを置くことで、大幅にレスポンスタイムを短縮することが期待できる。
しかし、キャッシュは麻酔であり、多用は厳禁である。なぜなら、さまざまな副作用があるからだ。
副作用の1つに、データ鮮度の低下が見込まれる。キャッシュは用法用量を守ることが大切だ。

![03_history_of_web_system_architecture_3](../assets/images/drawio/03_history_of_web_system_architecture_3.png)

APIが複数登場すると、APIをまとめるレイヤが必要となる。
そこで、**[BFF（Backend For Frontends）](https://philcalcado.com/2015/09/18/the_back_end_for_front_end_pattern_bff.html)** というレイヤが登場する。

<!-- textlint-disable -->

![<a href="https://philcalcado.com/2015/09/18/the_back_end_for_front_end_pattern_bff.html">The Back-end for Front-end Pattern (BFF) - philcalcado.com</a>](https://philcalcado.com/img/2015-09-back-end-for-front-end-pattern/sc-bff-1.png)

<!-- textlint-enable -->

これは、文字どおりフロントエンドのためのバックエンドである。
BFFの機能例として、データをフロントエンド向けに加工したり、HTMLを構築したりする。
フロントエンドでは、UI/UXに興味・関心がある。**UI/UXを表現するデータは、ビジネスロジックを返却するAPIだけでは不十分** である。
複数のAPIより取得したデータをUI/UX向けに加工してフロントエンドに提供することが多い。
ブラウザからBFFまでをフロントエンドとし、BFFより後ろをバックエンドとする。
BFFにより、フロントエンドとバックエンドの境界が明確になる。

バックエンドの **[マイクロサービス化](https://martinfowler.com/articles/microservices.html)** が進むこととなる。

<!-- textlint-disable -->

![<a href="https://martinfowler.com/articles/microservices.html">Microservices - martinfowler.com</a>](https://martinfowler.com/articles/microservices/images/decentralised-data.png)

<!-- textlint-enable -->

マイクロサービスという単語を出すならば、モノリスという単語が対比としてよく挙げられる。
モノリスとは、一枚岩という意味で解釈されることが多い。

![03_history_of_web_system_architecture_4](../assets/images/drawio/03_history_of_web_system_architecture_4.png)

たちつてと。

![03_history_of_web_system_architecture_5](../assets/images/drawio/03_history_of_web_system_architecture_5.png)

なにぬねの。