(self.webpackChunk=self.webpackChunk||[]).push([[4522],{4062:(e,t,a)=>{"use strict";a.r(t),a.d(t,{data:()=>r});const r={key:"v-c8a89082",path:"/ko/javascript/immutable-object.html",title:"자바스크립트의 불변 객체",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:2,title:"불변 객체",slug:"불변-객체",children:[]},{level:2,title:"객체 복사",slug:"객체-복사",children:[]},{level:2,title:"객체 불변화",slug:"객체-불변화",children:[]},{level:2,title:"참고",slug:"참고",children:[]}],filePathRelative:"ko/javascript/immutable-object.md",git:{updatedTime:1624843445e3,contributors:[{name:"hee-develop",email:"hee950320@yahoo.co.jp",commits:1}]}}},3739:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var r=a(6252);const o=(0,r.uE)('<h1 id="자바스크립트의-불변-객체" tabindex="-1"><a class="header-anchor" href="#자바스크립트의-불변-객체" aria-hidden="true">#</a> 자바스크립트의 불변 객체</h1><p><code>Written: 2021-02-09</code></p><h2 id="불변-객체" tabindex="-1"><a class="header-anchor" href="#불변-객체" aria-hidden="true">#</a> 불변 객체</h2><p>ES6부터 <code>const</code>를 이용해 상수를 선언할 수 있게 됐지만, 객체는 직접적인 할당이 아닌 참조이므로 <code>const</code>로 선언해도 값을 변경할 수 있다는 문제가 있다. 그리고 이러한 불변성을 인식하지 못한 채 값을 전달해 의도치 않은 값의 변경이 일어나는 경우가 빈번하다(최근 JS진영에서 함수형에 대한 수요가 급증한 주된 이유가 아닐까 싶다).</p><p>이렇게 의도치 않은 값의 변경을 어떤 식으로 막을 수 있을까?</p><h2 id="객체-복사" tabindex="-1"><a class="header-anchor" href="#객체-복사" aria-hidden="true">#</a> 객체 복사</h2><p><strong>객체 자체를 복사해, 의도치 않게 값을 변경하더라도 원본에 영향을 주지 않게</strong>끔 하는 방법이다. 함수형 사고 방식에서 많이 언급되는 내용인 것 같다. 보통 <code>Object.assign</code>을 사용하거나 spared operator(<code>{...obj}</code>) 등을 이용해 복사하는 방법을 사용할 수 있다. 허나 위 두 방법만으로는 nested object에 대해 deep copy가 이루어지지 않는다는 문제점이 있다. 보통 lodash같은 라이브러리를 이용해 복사한다.</p><h2 id="객체-불변화" tabindex="-1"><a class="header-anchor" href="#객체-불변화" aria-hidden="true">#</a> 객체 불변화</h2><p>객체를 읽기 전용으로 변경해, 값을 변경하지 못하게 하는 방법이다. 자바스크립트의 <code>Object.freeze</code>메소드를 사용하면 객체를 읽기 전용으로 변경시킬 수 있다. 문제점은 객체 복사와 같이 적용 범위는 대상 object의 프로퍼티 뿐이라는 것(nested object에 대해서는 불변화하지 않음)이다. 이 역시 직접 구현하는 것은 오래 걸리므로 라이브러리(Immutable.js)의 도움을 받는 것이 좋다.</p><h2 id="참고" tabindex="-1"><a class="header-anchor" href="#참고" aria-hidden="true">#</a> 참고</h2>',10),c={href:"https://poiemaweb.com/js-immutability?fbclid=IwAR37euGK_rRr34Q0lCYJ3ctFIj5gCb8GpVYw85vBisD3BO8vOFitaiEQ96M",target:"_blank",rel:"noopener noreferrer"},n=(0,r.Uk)("객체와 변경불가성(Immutability)"),i={href:"https://stackoverflow.com/questions/8435080/any-performance-benefit-to-locking-down-javascript-objects",target:"_blank",rel:"noopener noreferrer"},l=(0,r.Uk)("Any performance benefit to “locking down” JavaScript objects?"),d=(0,r.Uk)(" : 윗글에서 "),s=(0,r.Wm)("code",null,"Object.freeze",-1),h=(0,r.Uk)("가 성능 이슈가 있다는 얘기가 있어 찾아 보았다."),u={render:function(e,t){const a=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[o,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)("a",c,[n,(0,r.Wm)(a)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",i,[l,(0,r.Wm)(a)]),d,s,h])])],64)}}}}]);