(self.webpackChunk=self.webpackChunk||[]).push([[2481],{8389:(e,a,r)=>{"use strict";r.r(a),r.d(a,{data:()=>t});const t={key:"v-6e677948",path:"/jp/frontend/create-react-app-with-pwa.html",title:"PWA React アプリケーションを作る",lang:"ja-JP",frontmatter:{},excerpt:"",headers:[{level:3,title:"create-react-app にてWEBアプリを生成",slug:"create-react-app-にてwebアプリを生成",children:[]},{level:3,title:"ServiceWorkerを登録",slug:"serviceworkerを登録",children:[]},{level:3,title:"serveでちゃんと動くか確認する",slug:"serveでちゃんと動くか確認する",children:[]}],filePathRelative:"jp/frontend/create-react-app-with-pwa.md",git:{updatedTime:1628030041e3,contributors:[]}}},4940:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>U});var t=r(6252),n=r(5914);const l=(0,t.Wm)("h1",{id:"pwa-react-アプリケーションを作る",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#pwa-react-アプリケーションを作る","aria-hidden":"true"},"#"),(0,t.Uk)(" PWA React アプリケーションを作る")],-1),s=(0,t.Wm)("p",null,[(0,t.Wm)("code",null,"Written: 2021-07-24")],-1),c=(0,t.Wm)("p",null,"最近の勉強でPWAという存在を知った。PWAはネイティブアプリケーションのようなUXを提供できるためものすごく魅力的である。今回はPWAを作ることにした。",-1),i=(0,t.Wm)("p",null,[(0,t.Wm)("code",null,"create-react-app"),(0,t.Uk)("を使えば、Reactアプリケーションを素早く作ることができる。そしてPWAをサポートするテンプレートがあるので楽だ。")],-1),m=(0,t.Wm)("h3",{id:"create-react-app-にてwebアプリを生成",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#create-react-app-にてwebアプリを生成","aria-hidden":"true"},"#"),(0,t.Uk)(" create-react-app にてWEBアプリを生成")],-1),p=(0,t.Wm)("div",{class:"language-text ext-text line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-text"},[(0,t.Wm)("code",null,"npx create-react-app . --template cra-template-pwa-typescript\n")]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br")])],-1),W=(0,t.Wm)("p",null,[(0,t.Wm)("code",null,"cra-template-pwa-typescript"),(0,t.Uk)(" というテンプレートを用いて、Typescript + PWAのアプリケーションを生成する。 既に"),(0,t.Wm)("code",null,"manifest.json"),(0,t.Uk)("や"),(0,t.Wm)("code",null,"ServiceWorker"),(0,t.Uk)("などの設定は完了しているため、残りはブラウザにServiceWorkerを登録するだけ。")],-1),u=(0,t.Wm)("h3",{id:"serviceworkerを登録",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#serviceworkerを登録","aria-hidden":"true"},"#"),(0,t.Uk)(" ServiceWorkerを登録")],-1),d=(0,t.Wm)("p",null,[(0,t.Wm)("code",null,"index.tsx"),(0,t.Uk)("の内容を一部修正する。")],-1),o=(0,t.Wm)("div",{class:"language-typescript ext-ts line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-typescript"},[(0,t.Wm)("code",null,[(0,t.Uk)("serviceWorkerRegistration"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"register"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token comment"},"// serviceWorkerRegistration.unregister();"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br")])],-1),k=(0,t.Wm)("h3",{id:"serveでちゃんと動くか確認する",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#serveでちゃんと動くか確認する","aria-hidden":"true"},"#"),(0,t.Uk)(" serveでちゃんと動くか確認する")],-1),h=(0,t.Wm)("p",null,[(0,t.Wm)("code",null,"service-worker.ts"),(0,t.Uk)("は"),(0,t.Wm)("code",null,"develop"),(0,t.Uk)("モードでアクセスできないため、PWAとして動かない。ローカルで確認するには必ずビルドし、別のサーバーに載せる必要がある。")],-1),v=(0,t.Wm)("p",null,[(0,t.Wm)("code",null,"serve"),(0,t.Uk)("を使えば簡単に確認できるため、今回は"),(0,t.Wm)("code",null,"serve"),(0,t.Uk)("を使うことにした。")],-1),b=(0,t.Wm)("div",{class:"language-text ext-text line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-text"},[(0,t.Wm)("code",null,"yarn build\nnpx serve -s build\n")]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br")])],-1),g=(0,t.Wm)("p",null,"そしてChromeで確認すると…",-1),w=(0,t.Wm)("p",null,[(0,t.Wm)("img",{src:n.Z,alt:"PWA確認用スクショー"})],-1),x=(0,t.Wm)("p",null,"PWA専用のダウンロードマークがでた！",-1),U={render:function(e,a){return(0,t.wg)(),(0,t.j4)(t.HY,null,[l,s,c,i,m,p,W,u,d,o,k,h,v,b,g,w,x],64)}}},5914:(e,a,r)=>{"use strict";r.d(a,{Z:()=>t});const t=r.p+"assets/img/create-pwa-react-app-01.767fa569.png"}}]);