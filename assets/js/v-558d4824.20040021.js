(self.webpackChunk=self.webpackChunk||[]).push([[4425],{1991:(e,a,t)=>{"use strict";t.r(a),t.d(a,{data:()=>s});const s={key:"v-558d4824",path:"/ko/etc/add-space-in-macos-dock.html",title:"MacOS 독에 빈 공간 추가하기",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[],filePathRelative:"ko/etc/add-space-in-macos-dock.md",git:{updatedTime:1628002356e3,contributors:[]}}},4590:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});const s=(0,t(6252).uE)('<h1 id="macos-독에-빈-공간-추가하기" tabindex="-1"><a class="header-anchor" href="#macos-독에-빈-공간-추가하기" aria-hidden="true">#</a> MacOS 독에 빈 공간 추가하기</h1><p><code>Written: 2021-07-25</code></p><p>개발이랑 전혀 관계없는 내용이지만 어쨌든 공부(?)했으므로 정리.</p><p>MacOS의 독은 구분선을 추가한다거나 그룹을 지정하는 게 불가능해 굉장히 불편한데, 구분선 비스무리한 빈 공간을 추가하는 방법이 있다.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>% defaults write com.apple.dock persistent-apps -array-add &#39;{&quot;tile-type&quot;=&quot;small-spacer-tile&quot;;}&#39;\n% killall Dock\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>small</code>말고 일반 spacer를 사용하면 아이콘 1개 정도의 빈 공간을 생성할 수 있지만 쓸데없이 커서 사용하진 않았다.</p><p>출처 : https://apple.stackexchange.com/questions/250723/adjust-width-of-spacer-between-mac-os-dock-icons/273540#273540</p>',7),c={render:function(e,a){return s}}}}]);