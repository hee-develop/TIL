(self.webpackChunk=self.webpackChunk||[]).push([[150],{36:(e,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>t});const t={key:"v-5171fee7",path:"/ko/frontend/add-sass-in-cra.html",title:"create-react-app 으로 만드는 리액트 엡에 Sass 추가하기",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[],filePathRelative:"ko/frontend/add-sass-in-cra.md",git:{updatedTime:1627254259e3,contributors:[{name:"hee-develop",email:"hee950320@yahoo.co.jp",commits:1}]}}},1144:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>i});var t=s(6252);const n=(0,t.uE)('<h1 id="create-react-app-으로-만드는-리액트-엡에-sass-추가하기" tabindex="-1"><a class="header-anchor" href="#create-react-app-으로-만드는-리액트-엡에-sass-추가하기" aria-hidden="true">#</a> create-react-app 으로 만드는 리액트 엡에 Sass 추가하기</h1><p><code>Written: 2021-07-26</code></p><p><strong>TL;DR</strong> : <code>yarn add sass</code></p><p><code>create-react-app</code>, 줄여서 <code>CRA</code>는 높은 추상화로 webpack 등의 설정이 거의 필요하지 않다는 것이 가장 큰 장점인 것 같다. 템플릿을 이용하면 더욱 빠른 시작이 가능하다.</p><p>이번에 공부하면서 만든 앱은 PWA&amp;TS 템플릿이었는데, 이 템플릿은 CSS 전처리기가 설정이 되어 있지 않았기 때문에 별도로 Sass를 넣으려고 했다.</p>',5),r={href:"https://create-react-app.dev/docs/adding-a-sass-stylesheet/",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("공식 홈페이지"),c=(0,t.Uk)("에서 친절하게 안내되어 있어 이대로 진행했더니 다음과 같은 에러가 발생했다."),o=(0,t.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Error: Node Sass version 6.0.1 is incompatible with ^4.0.0 || ^5.0.0.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>인터넷을 찾아보니, <code>CRA</code>에서 지원하는 <code>node-sass</code>의 버전이 낮아서, 최신 버전(6.0.1)을 아직 지원하지 않는 모양이다.</p><p>그래서 가장 최신 버전의 <code>^5.0.0</code>을 설치하려고 했더니, 왜인지 설치가 안 됐다.</p><p>npm에 들어가 보니 다음과 같은 말이 적혀 있다.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Warning: LibSass and Node Sass are deprecated. While they will continue to receive maintenance releases indefinitely, there are no plans to add additional features or compatibility with any new CSS or Sass features. Projects that still use it should move onto Dart Sass.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>그렇다. deprecated되었다. (그런데 태그 <code>5.0.0</code>은 아직 살아있는데 왜 설치가 안 되는지는 잘 모르겠다)</p><p>가이드에 안내되어 있는 내용대로 <code>dart-sass</code>를 설치.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>% yarn add sass\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>그리고 <code>*.sass|scss</code>를 import하면 준비가 끝난다.</p>',9),i={render:function(e,a){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[n,(0,t.Wm)("p",null,[(0,t.Wm)("a",r,[d,(0,t.Wm)(s)]),c]),o],64)}}}}]);