(self.webpackChunk=self.webpackChunk||[]).push([[681],{9366:(e,a,t)=>{"use strict";t.r(a),t.d(a,{data:()=>i});const i={key:"v-658c8356",path:"/jp/database/database-index.html",title:"インデックスとは",lang:"ja-JP",frontmatter:{},excerpt:"",headers:[{level:3,title:"インデックスを使うと良い例",slug:"インデックスを使うと良い例",children:[]}],filePathRelative:"jp/database/database-index.md",git:{updatedTime:1625100048e3,contributors:[{name:"hee-develop",email:"hee950320@yahoo.co.jp",commits:1}]}}},3678:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l});const i=(0,t(6252).uE)('<h1 id="インデックスとは" tabindex="-1"><a class="header-anchor" href="#インデックスとは" aria-hidden="true">#</a> インデックスとは</h1><p><code>Written: 2021-07-01</code></p><p>正直、ORMとかの抽象化されているものを使っていたせいで概念くらいでしか理解できていなかった。。</p><p>Indexとは、テーブルの検索速度を向上させるためのデータストラクチャーである。本にあるインデックスと同じ。 DB全体を検索するのはかなりの時間が必要になるため、よく使われている値を他のところに保存し使う。</p><ul><li>検索自体が早くなるので、全体的なパフォーマンスもよくなる(CRUD全部検索が必要になるため)</li><li>但し、インデックスを作るのはタダではない。修正が頻繁に行われるテーブルなら、オーバーヘッドが起きる可能性が高い</li></ul><h3 id="インデックスを使うと良い例" tabindex="-1"><a class="header-anchor" href="#インデックスを使うと良い例" aria-hidden="true">#</a> インデックスを使うと良い例</h3><ul><li>規模の小さいテーブル</li><li>データの修正があまり行われないテーブル</li><li>検索が頻繁に起きるテーブル</li><li>データの重複度が低いコラム</li></ul><p>昔勉強して今までちゃんと整理しなかったせいで完全に忘れていた。。</p>',8),l={render:function(e,a){return i}}}}]);