(self.webpackChunk=self.webpackChunk||[]).push([[594],{3373:(e,t,n)=>{"use strict";n.r(t),n.d(t,{data:()=>l});const l={key:"v-6867d7fc",path:"/ko/frontend/document-fragment.html",title:"DocumentFragment",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:3,title:"DocumentElement와의 차이",slug:"documentelement와의-차이",children:[]},{level:3,title:"template 태그",slug:"template-태그",children:[]}],filePathRelative:"ko/frontend/document-fragment.md",git:{updatedTime:1627997873e3,contributors:[]}}},3298:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});const l=(0,n(6252).uE)('<h1 id="documentfragment" tabindex="-1"><a class="header-anchor" href="#documentfragment" aria-hidden="true">#</a> DocumentFragment</h1><p><code>Written: 2021-06-20</code></p><p>개발에서 흔히 사용되는 Fragment와 같은 역할.</p><h3 id="documentelement와의-차이" tabindex="-1"><a class="header-anchor" href="#documentelement와의-차이" aria-hidden="true">#</a> DocumentElement와의 차이</h3><ul><li><code>Element</code>는 원소이므로 <code>root</code>가 되는 태그가 필요하다. <ul><li><code>document.createElement(&#39;div&#39;);</code></li></ul></li><li><code>DocumentFragment</code>는 fragment이므로, <code>root</code>가 되는 태그가 필요 없다. <ul><li><code>document.createDocumentFragment();</code></li></ul></li><li><code>Fragment</code>를 쓴다고 해서 성능에 이점이 있는 것은 아니다. <ul><li>root가 있느냐 없느냐의 차이</li></ul></li><li><code>Element</code>는 <code>innerHTML</code>등을 사용할 수 있지만, fragment는 그렇지 못하다</li></ul><h3 id="template-태그" tabindex="-1"><a class="header-anchor" href="#template-태그" aria-hidden="true">#</a> template 태그</h3><ul><li><code>&lt;template&gt;</code>태그는 Javascript에 의해 인스턴스를 생성할 수 있는 HTML코드를 담음.</li><li><code>HTMLTemplateElement</code>는 <code>DocumentFragment</code>를 가짐</li></ul>',7),d={render:function(e,t){return l}}}}]);