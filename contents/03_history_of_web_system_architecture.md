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
しかし、キャッシュは麻酔であり、多用は厳禁である。さまざまな副作用がある。
副作用の1つに、鮮度の低下が見込まれる。キャッシュは用法用量を守ること。

![03_history_of_web_system_architecture_3](../assets/images/drawio/03_history_of_web_system_architecture_3.png)

APIが複数登場すると、APIをまとめるレイヤが必要となる。
そこで、**BFF（Backends For Frontends）** というレイヤが登場する。
これは、文字どおりフロントエンドのためのバックエンドである。
BFFの機能例として、データをフロントエンド向けに加工したり、HTMLを構築したりする。
フロントエンドでは、UI/UXに興味・関心がある。UI/UXを表現するデータは、生のAPIだけでは不十分である。
APIより取得したデータをUI/UX向けに加工したり、複数のAPIを組み合わせたりする。
このBFFにより、フロントエンドとバックエンドの境界を明確にする。

![03_history_of_web_system_architecture_4](../assets/images/drawio/03_history_of_web_system_architecture_4.png)

たちつてと。

![03_history_of_web_system_architecture_5](../assets/images/drawio/03_history_of_web_system_architecture_5.png)

なにぬねの。