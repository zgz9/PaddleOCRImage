(function(e){function t(t){for(var a,s,r=t[0],u=t[1],i=t[2],f=0,d=[];f<r.length;f++)s=r[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},s={app:0},o={app:0},c=[];function r(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-109eef4c":"de645940","chunk-390e2a0b":"b8c7336b","chunk-436c727f":"af90309f","chunk-c5884b78":"9211ac05","chunk-d3c2121c":"6a0d5bd1"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-109eef4c":1,"chunk-390e2a0b":1,"chunk-436c727f":1,"chunk-c5884b78":1,"chunk-d3c2121c":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-109eef4c":"0083ca8d","chunk-390e2a0b":"0e433876","chunk-436c727f":"0e433876","chunk-c5884b78":"0e433876","chunk-d3c2121c":"0e433876"}[e]+".css",o=u.p+a,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var i=c[r],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===a||f===o))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){i=d[r],f=i.getAttribute("data-href");if(f===a||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete s[e],l.parentNode.removeChild(l),n(c)},l.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){s[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=r(e);var d=new Error;i=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2981:function(e,t,n){var a={"./af":"f826","./af.js":"f826","./ar":"0fa2","./ar-dz":"8ec6","./ar-dz.js":"8ec6","./ar-kw":"36f4","./ar-kw.js":"36f4","./ar-ly":"0e86","./ar-ly.js":"0e86","./ar-ma":"3d3d","./ar-ma.js":"3d3d","./ar-sa":"cfe1","./ar-sa.js":"cfe1","./ar-tn":"0608","./ar-tn.js":"0608","./ar.js":"0fa2","./az":"9cec","./az.js":"9cec","./be":"609d","./be.js":"609d","./bg":"3f4f","./bg.js":"3f4f","./bm":"43e9","./bm.js":"43e9","./bn":"d345","./bn.js":"d345","./bo":"fe43","./bo.js":"fe43","./br":"927d","./br.js":"927d","./bs":"1808","./bs.js":"1808","./ca":"2a24","./ca.js":"2a24","./cs":"8bb4","./cs.js":"8bb4","./cv":"1788","./cv.js":"1788","./cy":"8cb6","./cy.js":"8cb6","./da":"9fca","./da.js":"9fca","./de":"3f20","./de-at":"a8f1","./de-at.js":"a8f1","./de-ch":"2b68","./de-ch.js":"2b68","./de.js":"3f20","./dv":"6a7c","./dv.js":"6a7c","./el":"7f03","./el.js":"7f03","./en-SG":"2c5d","./en-SG.js":"2c5d","./en-au":"e33b","./en-au.js":"e33b","./en-ca":"563d","./en-ca.js":"563d","./en-gb":"6e59","./en-gb.js":"6e59","./en-ie":"a02d","./en-ie.js":"a02d","./en-il":"2dd2","./en-il.js":"2dd2","./en-nz":"2e16","./en-nz.js":"2e16","./eo":"3645","./eo.js":"3645","./es":"8669","./es-do":"1ef1","./es-do.js":"1ef1","./es-us":"2adb","./es-us.js":"2adb","./es.js":"8669","./et":"7672","./et.js":"7672","./eu":"666c","./eu.js":"666c","./fa":"691e","./fa.js":"691e","./fi":"b486","./fi.js":"b486","./fo":"60e4","./fo.js":"60e4","./fr":"bc2c","./fr-ca":"028a","./fr-ca.js":"028a","./fr-ch":"de9b","./fr-ch.js":"de9b","./fr.js":"bc2c","./fy":"de08","./fy.js":"de08","./ga":"c134","./ga.js":"c134","./gd":"680a","./gd.js":"680a","./gl":"3a5c","./gl.js":"3a5c","./gom-latn":"9bbd","./gom-latn.js":"9bbd","./gu":"3123","./gu.js":"3123","./he":"a3bb","./he.js":"a3bb","./hi":"74d5","./hi.js":"74d5","./hr":"3d1a","./hr.js":"3d1a","./hu":"8930","./hu.js":"8930","./hy-am":"5368","./hy-am.js":"5368","./id":"4d1d","./id.js":"4d1d","./is":"d8c2","./is.js":"d8c2","./it":"b571","./it-ch":"26a2","./it-ch.js":"26a2","./it.js":"b571","./ja":"f409","./ja.js":"f409","./jv":"24ca","./jv.js":"24ca","./ka":"57b4","./ka.js":"57b4","./kk":"7af1","./kk.js":"7af1","./km":"368b","./km.js":"368b","./kn":"c931","./kn.js":"c931","./ko":"8472","./ko.js":"8472","./ku":"41c3","./ku.js":"41c3","./ky":"7229","./ky.js":"7229","./lb":"febd","./lb.js":"febd","./lo":"b36b","./lo.js":"b36b","./lt":"2654","./lt.js":"2654","./lv":"6e31","./lv.js":"6e31","./me":"f72d","./me.js":"f72d","./mi":"2bcd","./mi.js":"2bcd","./mk":"c0de","./mk.js":"c0de","./ml":"e75d","./ml.js":"e75d","./mn":"b37a","./mn.js":"b37a","./mr":"a76b","./mr.js":"a76b","./ms":"2bf0","./ms-my":"2b02","./ms-my.js":"2b02","./ms.js":"2bf0","./mt":"e717","./mt.js":"e717","./my":"e2e2","./my.js":"e2e2","./nb":"bdfc","./nb.js":"bdfc","./ne":"75c0","./ne.js":"75c0","./nl":"3e8e","./nl-be":"de3b","./nl-be.js":"de3b","./nl.js":"3e8e","./nn":"90a3","./nn.js":"90a3","./pa-in":"bf7a","./pa-in.js":"bf7a","./pl":"210f","./pl.js":"210f","./pt":"12e3","./pt-br":"294f","./pt-br.js":"294f","./pt.js":"12e3","./ro":"7a04","./ro.js":"7a04","./ru":"75cb","./ru.js":"75cb","./sd":"f957","./sd.js":"f957","./se":"4169","./se.js":"4169","./si":"951b","./si.js":"951b","./sk":"1c1d","./sk.js":"1c1d","./sl":"eb2c","./sl.js":"eb2c","./sq":"7c7d","./sq.js":"7c7d","./sr":"5f14","./sr-cyrl":"20a0","./sr-cyrl.js":"20a0","./sr.js":"5f14","./ss":"3a89","./ss.js":"3a89","./sv":"87ac","./sv.js":"87ac","./sw":"91c3","./sw.js":"91c3","./ta":"41cd","./ta.js":"41cd","./te":"5a49","./te.js":"5a49","./tet":"0e56","./tet.js":"0e56","./tg":"2495","./tg.js":"2495","./th":"db96","./th.js":"db96","./tl-ph":"b593","./tl-ph.js":"b593","./tlh":"04f0","./tlh.js":"04f0","./tr":"d11d","./tr.js":"d11d","./tzl":"6da8","./tzl.js":"6da8","./tzm":"11af","./tzm-latn":"2eac","./tzm-latn.js":"2eac","./tzm.js":"11af","./ug-cn":"f551","./ug-cn.js":"f551","./uk":"89a5","./uk.js":"89a5","./ur":"faa7","./ur.js":"faa7","./uz":"c23b","./uz-latn":"d399","./uz-latn.js":"d399","./uz.js":"c23b","./vi":"6811","./vi.js":"6811","./x-pseudo":"52a9","./x-pseudo.js":"52a9","./yo":"f28c","./yo.js":"f28c","./zh-cn":"39cf","./zh-cn.js":"39cf","./zh-hk":"25ad","./zh-hk.js":"25ad","./zh-tw":"2dba","./zh-tw.js":"2dba"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=o,e.exports=s,s.id="2981"},4121:function(e,t,n){"use strict";var a=n("e99a"),s=n.n(a);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e930");var a=n("8f80"),s=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("8bbf")),o=n.n(s),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"pageContainer"},[n("router-view")],1),n("van-popup",{style:{height:"10%"},attrs:{position:"bottom"},model:{value:e.showPop,callback:function(t){e.showPop=t},expression:"showPop"}},[n("span",{staticClass:"about",on:{click:e.getAbout}},[e._v("关于")])])],1)},r=[],u=(n("4de4"),n("4160"),n("b0c0"),n("2ca0"),n("159b"),n("ade3")),i=(n("c3a6"),n("ad06")),f=(n("a52c"),n("2ed4")),d=(n("537a"),n("ac28")),l=(n("8a58"),n("e41f"));o.a.use(l["a"]),o.a.use(d["a"]),o.a.use(f["a"]);var b={name:"APP",components:Object(u["a"])({},i["a"].name,i["a"]),data:function(){return{active:0,showPop:!1,goAbout:!1,titleData:[{text:"Title1"},{text:"Title2"},{text:"Title3"},{text:"Title4"}],vanTabbarData:[{path:"/firstDemo",text:"firstDemo",icon:"home-o"},{path:"/secondDemo",text:"secondDemo",icon:"search"},{path:"/thirdDemo",text:"thirdDemo",icon:"friends-o"},{path:"/fourDemo",text:"fourDemo",icon:"setting-o"}]}},computed:{currentTitle:function(){var e=this;return this.goAbout?[{text:"关于"}]:this.titleData.filter((function(t,n){return n===e.active}))}},mounted:function(){},beforeUpdate:function(){this.goAbout=this.$route.fullPath.startsWith("/about"),console.log(this.$route),this.changeTabBar()},methods:{changeTabBar:function(){var e=this,t=this.$route.fullPath;this.vanTabbarData.forEach((function(n,a){t.startsWith(n.path)&&(e.active=a)}))},backHistory:function(){this.$router.go(-1)},getAbout:function(){this.$router.push({name:"About"}),this.showPop=!1},showPopup:function(){this.showPop=!0}}},h=b,j=(n("fe7a"),n("2877")),m=Object(j["a"])(h,c,r,!1,null,"9ddbdbd8",null),p=m.exports,v=(n("d3b7"),n("6389")),g=n.n(v),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},y=[],w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{staticClass:"titleName"},[e._v("移动端分辨率适配")])])}],D={name:"HelloWorld"},z=D,_=(n("60e1"),Object(j["a"])(z,w,x,!1,null,"66319a9e",null)),P=_.exports,O={name:"Home",components:{HelloWorld:P}},T=O,E=(n("4121"),Object(j["a"])(T,k,y,!1,null,"839d0592",null)),A=E.exports;o.a.use(g.a);var C=[{path:"/",name:"Home",meta:{showBack:!1},component:A},{path:"/firstDemo",name:"FirstDemo",meta:{showBack:!1},component:function(){return n.e("chunk-c5884b78").then(n.bind(null,"a3ce"))}},{path:"/secondDemo",name:"SecondDemo",meta:{showBack:!1},component:function(){return n.e("chunk-436c727f").then(n.bind(null,"66af"))}},{path:"/thirdDemo",name:"ThirdDemo",meta:{showBack:!1},component:function(){return n.e("chunk-d3c2121c").then(n.bind(null,"9b16"))}},{path:"/fourDemo",name:"FourDemo",meta:{showBack:!1},component:function(){return n.e("chunk-390e2a0b").then(n.bind(null,"484a"))}},{path:"/about",name:"About",meta:{showBack:!0},component:function(){return n.e("chunk-109eef4c").then(n.bind(null,"f820"))}}],S=new g.a({mode:"history",base:"/",routes:C}),B=S,$=n("cebe"),N=n.n($),H=(n("5cfb"),n("fcff"),n("5c96")),L=n.n(H),W=n("2ef6");o.a.use(L.a),o.a.use(a["a"]),o.a.prototype.axios=N.a,o.a.use(W["a"]),o.a.config.productionTip=!1,new o.a({router:B,render:function(e){return e(p)}}).$mount("#app")},"60e1":function(e,t,n){"use strict";var a=n("c920"),s=n.n(a);s.a},6389:function(e,t){e.exports=VueRouter},8798:function(e,t,n){},"8bbf":function(e,t){e.exports=Vue},c920:function(e,t,n){},cebe:function(e,t){e.exports=axios},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},e99a:function(e,t,n){},fcff:function(e,t,n){},fe7a:function(e,t,n){"use strict";var a=n("8798"),s=n.n(a);s.a}});