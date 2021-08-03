(self.webpackChunk=self.webpackChunk||[]).push([[2936],{7334:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-33aba058",path:"/ko/development-theory/dynamic-programming.html",title:"Dynamic Programming / 동적 계획법",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:3,title:"참고 링크",slug:"참고-링크",children:[]}],filePathRelative:"ko/development-theory/dynamic-programming.md",git:{updatedTime:1628002356e3,contributors:[]}}},5026:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>c});var p=a(6252);const e=(0,p.uE)('<h1 id="dynamic-programming-동적-계획법" tabindex="-1"><a class="header-anchor" href="#dynamic-programming-동적-계획법" aria-hidden="true">#</a> Dynamic Programming / 동적 계획법</h1><p><code>Written: 2021-03-24</code></p><p>복잡한 문제를 간단한 여러개의 문제로 나누어 푸는 방법. 문제를 잘게 쪼갠 뒤, 작은 문제부터 차근차근 최적의 해답을 차례로 구해가는 방법이다. 이름과 방법의 관계성은 전혀 없다(Dynamic하지 않음).</p><p>작은 문제부터 차례로 해답을 구한다는 방법은 수학에서의 점화식으로 접근할 수 있다.</p><p>피보나치 수열을 예로 들면,<br> 3 이상의 어떠한 수 n은 n-1번째의 수와 n-2번째의 수의 합과 같다. 이는 즉</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>n &gt; 2\nF(n) = F(n-1) + F(n-2)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>로 표현할 수 있다.</p><p>구현 방법은 여러가지가 있다.</p><ol><li>재귀를 통한 구현 재귀를 이용해 n부터 0번째까지 연산을 진행한다.</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fibo</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token function">fibo</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibo</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>연산 결과를 저장(메모이제이션)하지 않고 재귀로 반복하게 되면 같은 결과를 중복해서 연산하게 된다. 이를 BigO notiation으로 표현하면 <code>O(2^n)</code>이 된다(참고링크 참고).</p><ol start="2"><li>반복문을 통한 구현 반복문을 통해 동일한 작업을 수행한다.</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fibo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nfibo<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nfibo<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  fibo<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> fibo<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> fibo<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="참고-링크" tabindex="-1"><a class="header-anchor" href="#참고-링크" aria-hidden="true">#</a> 참고 링크</h3>',14),t={href:"https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1176/handouts/midterm/5-BigO.pdf",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("BigO complexity"),c={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,(0,p.Wm)("ul",null,[(0,p.Wm)("li",null,[(0,p.Wm)("a",t,[o,(0,p.Wm)(a)])])])],64)}}}}]);