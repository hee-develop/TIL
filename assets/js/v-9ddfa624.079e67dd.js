(self.webpackChunk=self.webpackChunk||[]).push([[8268],{1475:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-9ddfa624",path:"/_draft/Typescript/07%20-%20Typescript%20basic7.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Date: 2021-02-28",slug:"date-2021-02-28",children:[]},{level:2,title:"Typescript 기초7",slug:"typescript-기초7",children:[{level:3,title:"제네릭",slug:"제네릭",children:[]},{level:3,title:"제네릭 제약조건 (Generic Constraints)",slug:"제네릭-제약조건-generic-constraints",children:[]}]}],filePathRelative:"_draft/Typescript/07 - Typescript basic7.md",git:{updatedTime:null,contributors:[]}}},3757:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var e=a(6252);const t=(0,e.Wm)("h2",{id:"date-2021-02-28",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#date-2021-02-28","aria-hidden":"true"},"#"),(0,e.Uk)(" Date: 2021-02-28")],-1),p=(0,e.Wm)("h2",{id:"typescript-기초7",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#typescript-기초7","aria-hidden":"true"},"#"),(0,e.Uk)(" Typescript 기초7")],-1),c=(0,e.Uk)("from "),o={href:"https://typescript-kr.github.io/",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("Typescript-kr"),l=(0,e.uE)('<h3 id="제네릭" tabindex="-1"><a class="header-anchor" href="#제네릭" aria-hidden="true">#</a> 제네릭</h3><p>제네릭. 템플릿.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> output <span class="token operator">=</span> <span class="token function">identity</span><span class="token punctuation">(</span><span class="token string">&#39;myString&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 추정이 가능하면 생략 가능\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="제네릭-제약조건-generic-constraints" tabindex="-1"><a class="header-anchor" href="#제네릭-제약조건-generic-constraints" aria-hidden="true">#</a> 제네릭 제약조건 (Generic Constraints)</h3><p>해당 제네릭이 프로퍼티를 가짐을 증명하기 위해서 <code>interface</code>를 사용</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Lengthwise</span> <span class="token punctuation">{</span>\n  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">loggingIdentity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Lengthwise<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>T</code> 는 <code>Lengthwise</code>를 포함하고 있기 때문에, <code>length</code>가 없는 객체는 오류가 발생(예: <code>number</code>타입)</p>',7),i={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,p,(0,e.Wm)("p",null,[c,(0,e.Wm)("a",o,[r,(0,e.Wm)(a)])]),l],64)}}}}]);