# kadai01
kadai01_じゃんけんアプリ１提出用

# 課題1　 -世界を変えるチーズを作ろう！チーズアカデミーゲーム-

## ①課題内容（どんな作品か）
- チーズアカデミー入学者の最初の関門。
「チーズを作る」ボタンを押すとランダムな検索語から画像が取得され、チーズと判定されれば合格です。

## ②工夫した点・こだわった点
- フリー写真素材サイトのUnsplashから検索語で素材を取得できるAPI（Unsplash Source)を使用して、ボタンを押すとランダムな検索語から画像を取得して表示する仕組みを作りました。あらかじめimgフォルダに入っている画像ではないので、同じ検索語でも、ゲームをする度に表示される画像が変わります。
- 実際の構造は、5パターンの検索語（ほぼダジャレ）と判定テキストの組み合わせをランダムで選択（おみくじアプリそのままです）、それを最初に画像のみ表示させ、「判定」ボタンで結果を表示するという仕組みです。
- 初めはif文で分岐処理する形で作っていたのですが、オブジェクトの配列で検索語とイメージURLと表示したいテキストのデータセットを作って、ボタンクリックにaddEventListenerを設定して、それにMath.random関数をつけるという方法を見つけたので、それを試してみました。また、querySelectorを使う方法も試してみました。

## ③難しかった点・次回トライしたいこと(又は機能)
- 当初のアイデアでは、予め仕込んでおいたランダムなプロンプトから画像生成APIで画像生成させ、それを機械学習ライブラリで判定させ、チーズと判定されれば合格というものを作りたかったのですが、自分の理解力・スキル不足で断念しました。
- 画像生成APIはLeap AIというものを使用予定で、JavaScriptで扱いやすいという記事を見つけたのでチャレンジしてみたのですが、Node.js環境が必要とのことで、いろいろ調べて環境構築はしてみたのですが、Node.jsに対する理解が追いつかずで断念しました。今後、勉強が進んだらチャレンジし直したいです。
- 機械学習ライブラリは、ml5.jsのMobile.netを使用予定でした。ml5.jsは別のライブラリ（doodle.net）の方は、見つけてきたチュートリアル通りに作成してみたアプリでは動かすことができたのですが、その応用でMobile.netを使用してみても、どうしてもうまく行かず、諦めてしまいました。ml5.jsはTensorFlow.jsをベースとしたライブラリとのことで、TensorFlow.jsの使い方を勉強していけば、自力で解決できそうでしたので、自習を始めています。その勉強が進んだらこちらも再チャレンジしたいです。

## ④質問・疑問・感想、シェアしたいこと等なんでも
- [質問]　Node.jsの学習方法について、何から始めるのが良いでしょうか（ひとまずProgateにも教材があったので、それをやってみる予定です）。
- [疑問]　生成AIのAPIについては関心ある方が多い一方、機械学習ライブラリの話題は比較的不人気なような気がします。両方使いこなせるようになった方が面白いのでは？
- [感想]　今回は、ハイテクでバカゲーを作るというコンセプトだったのですが、ハイテク部分が実装できず、結果としてただのバカゲーになってしまいました。でも、Unsplash Sourceという非常に便利なAPIを見つけられて、それなりに面白いものはできたかなと思います。また、近い将来にできるようになりたい目標が、新たにいくつか出てきたので個人的には良かったなと思いました。
- [tips]
  - Unsplash Image API   https://unsplash.com/developers
  - ml5.js  https://ml5js.org/
  - Leap AI  https://tryleap.ai/
- [参考記事]
  - Unsplash Sourceを使ってみよう！ https://bagelee.com/design/about-unsplash-source/
  - わずか３行のJavaScriptで手描き画像認識をする！ https://note.com/ippunkan/n/n90c66f38a800
  - JavaScriptで簡単にAIを制御！「Leap」による画像生成や独自モデルの作り方を解説 https://paiza.hatenablog.com/entry/2023/04/12/150000
