(self.webpackChunk=self.webpackChunk||[]).push([[7210],{9432:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-4ab79218",path:"/ko/javascript/study-javascript.html",title:"Javascript 재입문하기",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:3,title:"Number타입은 부동소수점형",slug:"number타입은-부동소수점형",children:[]},{level:3,title:"자바스크립트의 배열은 희소 배열이다",slug:"자바스크립트의-배열은-희소-배열이다",children:[]},{level:3,title:"const는 상수 선언이 아니다",slug:"const는-상수-선언이-아니다",children:[]},{level:3,title:"비구조화 할당",slug:"비구조화-할당",children:[]},{level:3,title:"나머지 연산자와 전개 연산자",slug:"나머지-연산자와-전개-연산자",children:[]},{level:3,title:"계산된 속성 이름",slug:"계산된-속성-이름",children:[]},{level:3,title:"Symbol",slug:"symbol",children:[]},{level:3,title:"단축 평가",slug:"단축-평가",children:[]}],filePathRelative:"ko/javascript/study-javascript.md",git:{updatedTime:1624843445e3,contributors:[{name:"hee-develop",email:"hee950320@yahoo.co.jp",commits:1}]}}},9767:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>v});var e=a(6252);const t=(0,e.Wm)("h1",{id:"javascript-재입문하기",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#javascript-재입문하기","aria-hidden":"true"},"#"),(0,e.Uk)(" Javascript 재입문하기")],-1),p=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"Written: 2021-02-06")],-1),o={href:"https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("JavaScript 재입문하기"),l=(0,e.Uk)(" 등으로부터 공부한 내용 중 되새겨둘 필요가 있는 내용을 정리"),r=(0,e.Wm)("h3",{id:"number타입은-부동소수점형",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#number타입은-부동소수점형","aria-hidden":"true"},"#"),(0,e.Uk)(),(0,e.Wm)("code",null,"Number"),(0,e.Uk)("타입은 부동소수점형")],-1),i=(0,e.Uk)("ECMA표준에 따르면"),u=(0,e.Uk)(", "),d=(0,e.Wm)("code",null,"Number",-1),k=(0,e.Uk)("는 실제로 "),m=(0,e.Wm)("code",null,"double",-1),b=(0,e.Uk)("형(IEEE 754)이다"),h=(0,e.Wm)("li",null,"따라서 javascript에는 정수가 없다",-1),g=(0,e.uE)('<p>마침 얼마 전에 자바스크립트 성능 향상 팁 중 하나로 소수를 정수로 바꾸는 예제가 있었다. 모든 수가 부동소수점 타입이라면 굳이 바꿀 필요가 있을까? 실제로 어떻게 바뀌는지 궁금했기 때문에 간단한 연산으로 소요 시간을 비교해 보았다. 같은 자릿수로 비교하는 것은 무리가 있기 때문에 참고하는 정도로만 사용했다.</p><p>(Firefox 86.0에 모바일용 카비레이크 i5으로 작성된 결과이며, 브라우저의 엔진 등에 의해 다른 결과가 나올 수도 있음)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">LIMIT</span> <span class="token operator">=</span> <span class="token number">1_000_000</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;integer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token constant">LIMIT</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> num <span class="token operator">*=</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;integer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nnum <span class="token operator">=</span> <span class="token number">1.1</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;float&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token constant">LIMIT</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> num <span class="token operator">*=</span> <span class="token number">1.12345</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;float&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>이 연산의 결과는 다음과 같았다.</p><table><thead><tr><th>횟수</th><th>정수</th><th>부동소수점</th></tr></thead><tbody><tr><td>1</td><td>244ms</td><td>245ms</td></tr><tr><td>2</td><td>243ms</td><td>238ms</td></tr><tr><td>3</td><td>244ms</td><td>242ms</td></tr><tr><td>4</td><td>248ms</td><td>244ms</td></tr><tr><td>5</td><td>2379ms</td><td>2361ms</td></tr></tbody></table><p>* 5번은 1~4보다 10배 많은 반복문을 거친 결과이다.</p><p>예상대로 정수와 부동소수점의 성능 차이가 그다지 않았다.<br> 기본적으로 부동소수점 연산은 정수에 비해 연산이 복잡하므로(적어도 전공공부할 때 배웠던 내용은 그렇다) 자바스크립트의 성능에 어느정도 영향은 있을 듯하다.</p><h3 id="자바스크립트의-배열은-희소-배열이다" tabindex="-1"><a class="header-anchor" href="#자바스크립트의-배열은-희소-배열이다" aria-hidden="true">#</a> 자바스크립트의 배열은 희소 배열이다</h3><p>자바스크립트의 배열은 일반적인 배열(밀집 배열, dense array)이 아닌 희소 배열(sparse array)이다.<br> 해쉬 형태로 키(인덱스)-값 구조로 이루어져 있어 배열처럼 빠른 속도로 접근이 가능하다.<br> 때문에 배열이 아니더라도 객체로 배열을 구현하는 것도 가능하다.<br> 다만 객체로 만든 배열(혹은 배열을 객체처럼 사용하는 경우(키 값이 연속적이지 않다거나 0과 자연수가 아닌 키를 사용하는 경우 등))의 경우, 내부적으로 최적화가 이루어지지 않아 상대적으로 배열에 비해 느리다.</p><p>구체적으로 어떤 방식으로 접근하고 있는지는 조금 더 조사가 필요해 보이지만..<br> 배열 최적화라는 얘기가 나오는 걸 보면 Java의 ArrayList처럼 미리 메모리를 할당하는 형식으로 구현이 되어 있을지도 모르겠다.</p><p>일반 배열과 성질이 다르기 때문에 이런 특이사항이 있다.</p><ul><li>선언하지 않은 인덱스의 값은 <code>undefined</code>이 반환된다</li><li>배열의 크기를 나타내는 프로퍼티 <code>length</code>는 마지막 <strong>인덱스의 값+1</strong>이다 <ul><li>배열 요소의 갯수가 아니다</li></ul></li></ul><h3 id="const는-상수-선언이-아니다" tabindex="-1"><a class="header-anchor" href="#const는-상수-선언이-아니다" aria-hidden="true">#</a> <code>const</code>는 상수 선언이 아니다</h3><p><code>const</code>는 상수 선언이 아니고, 재할당이 불가능한 변수이다. 원시 데이터는 재할당이 불가능하므로 상수 취급이 가능하지만, 객체는 포인터로 가리키고 있기 때문에 값을 바꿀 수 있다.</p><h3 id="비구조화-할당" tabindex="-1"><a class="header-anchor" href="#비구조화-할당" aria-hidden="true">#</a> 비구조화 할당</h3><p>영어로 <strong>Destructuring assignment</strong>, 일본어로는 <strong>分割代入</strong><br> 말 그대로 값을 할당할 때 구조를 분해시켜서 넣어주는 문법적 설탕</p><h3 id="나머지-연산자와-전개-연산자" tabindex="-1"><a class="header-anchor" href="#나머지-연산자와-전개-연산자" aria-hidden="true">#</a> 나머지 연산자와 전개 연산자</h3><p>나머지 연산자는 <strong>rest operator</strong><br> 전개 연산자는 <strong>spread operator</strong></p><p><code>Object.assign</code>이나 <code>Array.concat</code>같은 역할을 하며 간략하게 작성이 가능한 문법적 설탕<br> 배열, 객체를 복사(shallow-copy)할 때 유용하게 사용할 수 있음.</p><h3 id="계산된-속성-이름" tabindex="-1"><a class="header-anchor" href="#계산된-속성-이름" aria-hidden="true">#</a> 계산된 속성 이름</h3><p>ES6부터 객체 리터럴에서 키를 대괄호(<code>[]</code>)로 감쌀 때, 대괄호 내에서 계산된 값을 키로 사용할 수 있다.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token operator">+</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nobj<span class="token punctuation">.</span>ab<span class="token punctuation">;</span> <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol" aria-hidden="true">#</a> Symbol</h3><p>ES6에서 새로 추가된 변경 불가능한 원시 타입의 값.<br> 모든 심볼의 값은 고유하며, 이는 같은 키로 만든 심볼도 그렇다.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> sym1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> sym2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nsym1 <span class="token operator">===</span> sym2<span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>루비의 심볼과 같은 느낌인 듯</p><h3 id="단축-평가" tabindex="-1"><a class="header-anchor" href="#단축-평가" aria-hidden="true">#</a> 단축 평가</h3><p>논리곱과 논리합(<code>&amp;&amp;</code>, <code>||</code>) 연산은 <code>true</code> <code>false</code>를 반환하는 것이 아니고, 마지막으로 평가된 값을 반환한다.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;apple&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&#39;banana&#39;</span> <span class="token comment">// &#39;banana&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>&#39;apple&#39;</code>을 먼저 평가(<code>true</code>)한 뒤 <code>&#39;banana&#39;</code>를 평가(<code>true</code>)한다. 마지막으로 평가된 값이 <code>&#39;banana&#39;</code>이므로, 이를 반환한다.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;apple&#39;</span> <span class="token operator">||</span> <span class="token string">&#39;banana&#39;</span> <span class="token comment">// &#39;apple&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>&#39;apple&#39;</code>을 먼저 평가(<code>true</code>)한다. 논리합 연산은 좌항이 <code>true</code>라면 우항은 평가하지 않는다.<br> 마지막으로 평가된 값이 <code>&#39;apple&#39;</code>이므로, 이를 반환한다.</p><p>값이 있을 때만 무언가를 하고자 할 때, <code>if</code>문을 쓰지 않고 짧게 쓰는 것이 가능하다.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> a<span class="token punctuation">.</span><span class="token function">something</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a &amp;&amp; a.something();</span>\n<span class="token comment">// ES2020의 optional chaining을 사용하면 a?.something(); 처럼 더 줄여쓸 수도 있다.</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> b <span class="token operator">=</span> c<span class="token punctuation">;</span> <span class="token comment">// b &amp;&amp; b = c;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>혹은 React는 조건문 등의 처리는 작성할 수 없기 때문에 단축 평가로 조건문을 대신해 사용할 수 있다.</p>',35),v={render:function(n,s){const a=(0,e.up)("OutboundLink"),v=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,p,(0,e.Wm)("p",null,[(0,e.Wm)("a",o,[c,(0,e.Wm)(a)]),l]),r,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)(v,{to:"/ko/javascript/(https:/262.ecma-international.org/6.0/#sec-terms-and-definitions-number-value)"},{default:(0,e.w5)((()=>[i])),_:1}),u,d,k,m,b]),h]),g],64)}}}}]);