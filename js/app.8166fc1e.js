(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],l=0,v=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(v.length)v.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b5c15fbb"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"11a8":function(e,t,n){},"21bb":function(e,t,n){"use strict";var r=n("2dad"),a=n.n(r);a.a},"2dad":function(e,t,n){},"3fe5":function(e,t,n){"use strict";var r=n("9b7e"),a=n.n(r);a.a},"4ec2":function(e,t,n){"use strict";var r=n("11a8"),a=n.n(r);a.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"62d4":function(e,t,n){},"79ef":function(e,t,n){},8104:function(e,t,n){"use strict";var r=n("c661"),a=n.n(r);a.a},"9b7e":function(e,t,n){},"9c0c":function(e,t,n){},aea4:function(e,t,n){"use strict";var r=n("62d4"),a=n.n(r);a.a},c661:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=n("9f12"),c=n("8b83"),s=n("c65a"),u=n("c03e"),l=n("9ab4"),p=n("60a3"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],f=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(p["c"]);l["a"]([Object(p["b"])()],f.prototype,"msg",void 0),f=l["a"]([p["a"]],f);var d=f,h=d,_=(n("aea4"),n("2877")),m=Object(_["a"])(h,v,b,!1,null,"a38c91a8",null),g=m.exports,j=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(p["c"]);j=l["a"]([Object(p["a"])({components:{HelloWorld:g}})],j);var O,y=j,k=y,w=(n("5c0b"),Object(_["a"])(k,a,o,!1,null,null,null)),E=w.exports,P=(n("d3b7"),n("8c4f")),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("section",{attrs:{id:"landing_section"}},[n("LandingPage")],1),e._m(0)])},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"main_section"}},[n("div")])}],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"landing-page"},[n("LandingPageInfo"),n("Particles"),n("router-view")],1)},S=[],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"particles-js"}})},I=[],z=n("2fa7"),T=n("53fe"),M=Object(p["a"])(O=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(T["a"])(t,[{key:"mounted",value:function(){var e=this;n("572f"),this.$nextTick((function(){e.initParticlesJS()}))}},{key:"initParticlesJS",value:function(){var e;particlesJS("particles-js",(e={particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:"#e31b6d"},shape:{type:"circle",stroke:{width:0,color:"#00b077"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#00b077",opacity:.6,width:1.1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:800,line_linked:{opacity:1}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}}},Object(z["a"])(e,"interactivity",{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}}),Object(z["a"])(e,"retina_detect",!0),e))}}]),t}(p["c"]))||O,J=M,A=(n("4ec2"),Object(_["a"])(J,L,I,!1,null,null,null)),D=A.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"landing-container"},[n("SlideIn",[n("div",{staticClass:"text"},[e._v(" Hello I´m "),n("span",[e._v("Marius Bongarts")]),n("br"),e._v(" I´m a full-stack web developer ")])]),n("button",{staticClass:"btn"},[e._v("View my Work")])],1)},N=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"",appear:""}},[e._t("default")],2)},W=[],B=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(p["c"]);B=l["a"]([p["a"]],B);var F=B,U=F,q=(n("3fe5"),Object(_["a"])(U,V,W,!1,null,"6890556d",null)),R=q.exports,X=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(T["a"])(t,[{key:"navigate",value:function(e){this.$router.push(e)}}]),t}(p["c"]);X=l["a"]([Object(p["a"])({components:{SlideIn:R}})],X);var Y=X,G=Y,K=(n("8104"),Object(_["a"])(G,H,N,!1,null,"d76ac732",null)),Q=K.exports,Z=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.test=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_MODE,e}return Object(u["a"])(t,e),t}(p["c"]);Z=l["a"]([Object(p["a"])({components:{Particles:D,LandingPageInfo:Q}})],Z);var ee=Z,te=ee,ne=(n("f1b9"),Object(_["a"])(te,C,S,!1,null,null,null)),re=ne.exports,ae={name:"home",components:{HelloWorld:g,LandingPage:re}},oe=ae,ie=(n("21bb"),Object(_["a"])(oe,x,$,!1,null,null,null)),ce=ie.exports;r["a"].use(P["a"]);var se=[{path:"/",name:"home",component:ce},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ue=new P["a"]({mode:"history",base:"/",routes:se}),le=ue;r["a"].config.productionTip=!1,new r["a"]({router:le,render:function(e){return e(E)}}).$mount("#app")},f1b9:function(e,t,n){"use strict";var r=n("79ef"),a=n.n(r);a.a}});
//# sourceMappingURL=app.8166fc1e.js.map