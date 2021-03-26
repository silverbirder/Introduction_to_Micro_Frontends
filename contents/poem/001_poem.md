# フロントエンドアーキテクチャの歴史 {#History-of-Front-End-Architecture}

インターネットが広がる。
初期は、HTMLを提供するだけ。
1994年にPHPで、クライアントとサーバの構成が普及。
1995年からJavascriptが登場。
クライアントがリッチになる。
jQueryが登場し、よりDOM操作が容易となる。
その後、Backborn.jsやAngularJSが登場し、
クライアントサイドでMVCアーキテクチャができる。

が、ModelとView間の責任分離が難しく、MVVMやMVPなどのアーキテクチャも生まれる。
その後、React.jsが登場し、Fluxのデータ管理のアイデアや、単一方向のデータバインディングが実現。

その後、Vue.jsというフレームワークも生まれ、Atomic DesignというWordが流行り、
UIを再利用するためのコンポーネント設計がはやる。

また、リッチなUIから、SPAとSSRという考え方が生まれた。
SSRから速度の面より、静的ページジェネレータや、JamStack、AppShellなどの構成も話題に。
SSRを話し始めると、SEOがついてまわる。

近年は、モバイルユーザーのユーザー体験をよりよくするためのPWAが生まれた。
高速化の面より、AMPも生まれる。

クライアントサイドの変化は、これぐらいで、バックエンドについて。
1994年ぐらいからHTTP通信があり、SOAPやRESTどちらかみたいな時代になり、
REST APIが主流に使われるように。

BFFというレイヤの話があり、Backend for frontendという略語で、
フロントエンドのためのバックエンド。クライアントとBFFが通信し、BFFから
APIを呼び出して、UIようデータを編集しクライアントに返却。後ろのAPIは、
いわゆるマイクロサービス化されるように。より疎結合・スケーラブルな世界に。

また、Facebook社のGraphQLという技術が出て、クエリ言語でデータのやりとりをすることに。
これは、主にフロントエンドの関心ことに着目し、クライアントからBFF（graphql）へリクエスト、BFF（graphql）から
必要なデータをAPIより収集するように。

フロントエンドの世界は、UIの関心ことについてさまざまな取り組みがされてきた。
が、バックエンドの世界にあったマイクロサービスは、フロントエンドにまだ適用されていない。

フロントエンドもマイクロサービス化することで、より疎結合・スケーラブルな世界に持っていけるよう
マイクロフロントエンドが話題となる。

フロントエンドの設計にて、疎結合なシステムにするならば、モノリスであったとしても。
モジュラモノリス、エンタープライズアーキテクチャ、ヘキサゴナルアーキテクチャのように
アプリケーション内部での設計方法はある。が、アプリケーションは、1つのサーバだけにあると。
リクエストボトルネックとなり、スケールする柔軟性が欠ける。

http://www.developer-cheatsheets.com/history.html
http://softwarephilosophy.ninja/evolution-of-front-end-architecture
https://blog.logrocket.com/history-of-frontend-frameworks/
https://dev.to/_adam_barker/the-super-brief-history-of-javascript-frameworks-for-those-somewhat-interested-3m82
https://blog.webf.zone/contemporary-front-end-architectures-fb5b500b0231
https://speakerdeck.com/initfabian/a-brief-history-of-front-end-frameworks
https://github.com/mraible/history-of-web-frameworks-timeline
https://digitalidentity.co.jp/blog/creative/mvc-mvvm.html

grpc-web
初期は、PCだったけど、iPhoneが流行ってモバイルWebサイトが流行る。
