(self.webpackChunk=self.webpackChunk||[]).push([[8947],{6116:(e,r,o)=>{"use strict";o.r(r),o.d(r,{data:()=>a});const a={key:"v-2659f8d7",path:"/ko/frontend/web-worker.html",title:"Web Worker",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:3,title:"Worker란",slug:"worker란",children:[]},{level:3,title:"메인 스레드와의 통신",slug:"메인-스레드와의-통신",children:[]},{level:3,title:"문제점",slug:"문제점",children:[]},{level:3,title:"참고",slug:"참고",children:[]}],filePathRelative:"ko/frontend/web-worker.md",git:{updatedTime:1628002356e3,contributors:[]}}},1518:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>d});const a=(0,o(6252).uE)('<h1 id="web-worker" tabindex="-1"><a class="header-anchor" href="#web-worker" aria-hidden="true">#</a> Web Worker</h1><p><code>Written: 2021-07-15</code></p><p>ECMAScript는 싱글 스레드 기반 언어이므로, 동시에 여러 작업을 수행할 수 없다. 때문에 브라우저나 node같은 런타임 환경에서는 이러한 단점을 극복하기 위해 별도의 API를 제공, 통신 작업 등을 <strong>동시에 수행하는 것처럼</strong> 구현해 두었다.<br> 그러나 이렇게 해도 비동기로 수행되는 작업에는 한계가 있고, 결정적으로 실질적인 처리 자체는 전부 메인 스레드에서 진행이 되므로 태생적인 한계를 벗어날 수는 없다.</p><p>이처럼 자바스크립트는 태생적으로 병렬 작업 수행이 불가능하기 때문에, 무거운 작업이 반복되면 UX에 영향을 미칠 수 있다. 그래서 최근 자바스크립트 진영에서는 별도의 코드를 별도의 스레드에서 돌아가도록 만들어 병렬 작업을 진행할 수 있게끔 만들었다. 그것이 바로 <code>Web Worker</code>이다.</p><h3 id="worker란" tabindex="-1"><a class="header-anchor" href="#worker란" aria-hidden="true">#</a> Worker란</h3><p><code>Worker</code>는 Javascript 파일을 구동하는 객체로, <code>Worker thread</code>에서 작동하게 된다. 기본적으로 Javascript파일을 구동시키므로 대부분의 처리를 수행할 수 있으나, DOM에 직접적으로 접근할 수 없다는 단점이 존재한다. 자세한 이유까지는 찾아보지 못했지만, 동시에 수정하는 것을 막기 위함이 아닌가 싶다(비슷한 예로 안드로이드 역시 별도의 스레드에서 UI 접근이 불가능했다).<br> 임계 영역으로 설정하면 문제를 해결할 수 있겠지만, 이렇게 되면 화면이 멈추기 때문에 UX를 해치지 않게 하려는 게 목적인 것 같다.</p><h3 id="메인-스레드와의-통신" tabindex="-1"><a class="header-anchor" href="#메인-스레드와의-통신" aria-hidden="true">#</a> 메인 스레드와의 통신</h3><p>어찌됐든 Worker에서는 UI수정이 불가능하므로, 화면에 나타내려면 메인 스레드에게 결괏값을 전달해 줄 필요가 있다. <code>Web Worker</code>는 <code>message</code>이벤트를 통해 데이터를 주고받을 수 있다. 데이터는 직렬화되어 전달된다.</p><h3 id="문제점" tabindex="-1"><a class="header-anchor" href="#문제점" aria-hidden="true">#</a> 문제점</h3><ul><li>Worker는 프로세스를 fork하거나 서브 스레드를 만드는 행위가 아니다. Worker는 완전 별도의 thread로 동작하며(process?), 때문에 별도의 Javascript 파일이 존재해야 한다. 메인 스레드의 코드는 활용할 수 없다.</li><li>Worker는 자바스크립트 레벨을 벗어나는 기술이므로, 별도의 Polyfill이 존재하지 않는다. 물론 IE가 최근 지원 중단이 확정되며 이젠 별 의미가 없는 내용이기도 하다.</li></ul><h3 id="참고" tabindex="-1"><a class="header-anchor" href="#참고" aria-hidden="true">#</a> 참고</h3><ul><li>https://developer.mozilla.org/ko/docs/Web/API/Web_Workers_API</li><li>https://developer.mozilla.org/ko/docs/Web/API/Window/postMessage</li></ul><p>WASM이라던지 PWA같은 기술들이 등장하면서 웹 프론트엔드의 입지가 점점 넓어지는 느낌이다.</p>',13),d={render:function(e,r){return a}}}}]);