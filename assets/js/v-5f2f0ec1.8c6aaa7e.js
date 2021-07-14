(self.webpackChunk=self.webpackChunk||[]).push([[215],{223:(e,a,i)=>{"use strict";i.r(a),i.d(a,{data:()=>d});const d={key:"v-5f2f0ec1",path:"/ko/frontend/cors.html",title:"CORS",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:3,title:"'출처(origin)'란",slug:"출처-origin-란",children:[]},{level:3,title:"사용 이유",slug:"사용-이유",children:[]},{level:3,title:"아니 이거 내 코드인데요",slug:"아니-이거-내-코드인데요",children:[]},{level:3,title:"SameSite",slug:"samesite",children:[]},{level:3,title:"출처",slug:"출처",children:[]}],filePathRelative:"ko/frontend/cors.md",git:{updatedTime:null,contributors:[]}}},2:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>h});var d=i(6252);const l=(0,d.uE)('<h1 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h1><p><code>Written: 2021-07-03</code></p><p>CORS는 <code>Cross-Origin Resource Sharing</code>의 줄임말로, 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제를 뜻한다.</p><h3 id="출처-origin-란" tabindex="-1"><a class="header-anchor" href="#출처-origin-란" aria-hidden="true">#</a> &#39;출처(origin)&#39;란</h3><p>출처는 웹 컨텐츠에 접근할 때 사용되는 URI를 의미한다. 여기에 포함되는 건 프로토콜, 호스트, 포트이며, 이들이 모두 일치하는 경우 같은 출처를 가졌다고 말한다.</p><h4 id="동일-출처인-것" tabindex="-1"><a class="header-anchor" href="#동일-출처인-것" aria-hidden="true">#</a> 동일 출처인 것</h4><ul><li><p><code>http://example.com/app1/index.html</code></p></li><li><p><code>http://example.com/app2/index.html</code> 위 둘은 경로(path)는 다르지만 같은 프로토콜(<code>http</code>)과 도메인(<code>example.com</code>)을 가지므로 동일 출처이다.</p></li><li><p><code>http://Example.com:80</code></p></li><li><p><code>http://example.com</code> URL은 대소문자를 구분하지 않는다. 따라서 같은 도메인을 갖고 있다. 또한, HTTP의 기본 포트는 80이므로, 동일 출처이다.</p></li></ul><h4 id="다른-출처인-것" tabindex="-1"><a class="header-anchor" href="#다른-출처인-것" aria-hidden="true">#</a> 다른 출처인 것</h4><ul><li><p><code>http://example.com</code></p></li><li><p><code>https://example.com</code> 같은 도메인을 갖고 있으나, 프로토콜(&amp; 포트)이 다르므로 다른 출처이다.</p></li><li><p><code>http://example.com</code></p></li><li><p><code>http://www.example.com</code> 호스트가 다르므로(<code>www</code>의 유무) 다른 출처이다.</p></li></ul><h3 id="사용-이유" tabindex="-1"><a class="header-anchor" href="#사용-이유" aria-hidden="true">#</a> 사용 이유</h3><p>클라이언트 사이드, 즉 브라우저는 데이터의 위,변조에 취약하다. 누군가가 사이트에 변조된 스크립트를 넣는다면, 해당 스크립트는 다른 출처를 갖게 된다. 이러한 출처가 불분명한 스크립트를 그대로 실행시키면 사용자가 위험에 노출될 가능성이 커진다. 따라서, 의도되지 않은 스크립트는 브라우저에서 강제로 차단하여 보안을 강화시키려는 것이 목적이다.</p><h3 id="아니-이거-내-코드인데요" tabindex="-1"><a class="header-anchor" href="#아니-이거-내-코드인데요" aria-hidden="true">#</a> 아니 이거 내 코드인데요</h3><p>개발을 하다보면 백엔드와 프론트엔드를 나누어 개발하는 경우가 잦다. 그리고 이 때, 두 개의 서버에서 각각 값을 요청하게 되며,</p><h3 id="samesite" tabindex="-1"><a class="header-anchor" href="#samesite" aria-hidden="true">#</a> SameSite</h3><h3 id="출처" tabindex="-1"><a class="header-anchor" href="#출처" aria-hidden="true">#</a> 출처</h3>',15),r={href:"https://developer.mozilla.org/ko/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"},t=(0,d.Uk)("교차 출처 리소스 공유"),h={render:function(e,a){const i=(0,d.up)("OutboundLink");return(0,d.wg)(),(0,d.j4)(d.HY,null,[l,(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[(0,d.Wm)("a",r,[t,(0,d.Wm)(i)])])])],64)}}}}]);