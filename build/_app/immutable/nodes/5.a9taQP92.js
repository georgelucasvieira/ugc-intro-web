import{s as G,e as k,c as y,b as C,f as m,o as b,i as _,h as L,K as Y,t as Z,a as I,d as ee,g as E,m as O,j as te,z as se,x as S,q as ne,r as re,n as P,I as le}from"../chunks/scheduler.DcvwqIos.js";import{S as J,i as Q,c as A,a as N,m as M,t as g,b as $,d as T,e as x,g as D,f as z}from"../chunks/index.w2n1_xMr.js";import{T as W,e as F,C as X,u as ae,o as ie,U as oe}from"../chunks/UserMessage.BFSGC5UK.js";import{N as fe}from"../chunks/Navbar.CpF64Bv6.js";import{f as U}from"../chunks/index.E-g4_rZF.js";function ce(f){let e,n,t,l,a="ToDo:Table";return{c(){e=k("p"),n=Z(f[0]),t=I(),l=k("div"),l.textContent=a,this.h()},l(r){e=y(r,"P",{});var s=C(e);n=ee(s,f[0]),s.forEach(m),t=E(r),l=y(r,"DIV",{class:!0,"data-svelte-h":!0}),O(l)!=="svelte-1xshlm7"&&(l.textContent=a),this.h()},h(){b(l,"class","content-table svelte-gcp0qs")},m(r,s){_(r,e,s),L(e,n),_(r,t,s),_(r,l,s)},p(r,s){s&1&&te(n,r[0])},d(r){r&&(m(e),m(t),m(l))}}}function ue(f){let e,n,t,l;return t=new W({props:{interval:f[1],delay:400,$$slots:{default:[ce]},$$scope:{ctx:f}}}),t.$on("done",f[2]),{c(){e=k("div"),n=k("div"),A(t.$$.fragment),this.h()},l(a){e=y(a,"DIV",{class:!0});var r=C(e);n=y(r,"DIV",{class:!0});var s=C(n);N(t.$$.fragment,s),s.forEach(m),r.forEach(m),this.h()},h(){b(n,"class","agent-message-box svelte-gcp0qs"),b(e,"class","agent-message-container svelte-gcp0qs")},m(a,r){_(a,e,r),L(e,n),M(t,n,null),l=!0},p(a,[r]){const s={};r&17&&(s.$$scope={dirty:r,ctx:a}),t.$set(s)},i(a){l||(g(t.$$.fragment,a),l=!0)},o(a){$(t.$$.fragment,a),l=!1},d(a){a&&m(e),T(t)}}}function me(f,e,n){let t=[20,100,50,20,25,18,14,50,100,20,15,10,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,100,100,50,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,50,25,5,5],{message:l=""}=e;const a=Y();function r(){a("finished",!0)}return f.$$set=s=>{"message"in s&&n(0,l=s.message)},[l,t,r]}class he extends J{constructor(e){super(),Q(this,e,me,ue,G,{message:0})}}function V(f,e,n){const t=f.slice();return t[11]=e[n],t}function pe(f){let e,n=[],t=new Map,l,a,r,s,i,h,u,d,v=F(f[2]);const q=o=>o[11];for(let o=0;o<v.length;o+=1){let c=V(f,v,o),w=q(c);t.set(w,n[o]=K(w,c))}i=new X({}),i.$on("message",f[5]);let p=f[1]&&R(f);return{c(){e=k("section");for(let o=0;o<n.length;o+=1)n[o].c();l=I(),a=k("span"),r=I(),s=k("footer"),A(i.$$.fragment),h=I(),p&&p.c(),u=S(),this.h()},l(o){e=y(o,"SECTION",{class:!0});var c=C(e);for(let B=0;B<n.length;B+=1)n[B].l(c);c.forEach(m),l=E(o),a=y(o,"SPAN",{class:!0}),C(a).forEach(m),r=E(o),s=y(o,"FOOTER",{id:!0,class:!0});var w=C(s);N(i.$$.fragment,w),w.forEach(m),h=E(o),p&&p.l(o),u=S(),this.h()},h(){b(e,"class","messages-chat-container svelte-11ygegx"),b(a,"class","footer-background svelte-11ygegx"),b(s,"id","chat-position"),b(s,"class","svelte-11ygegx")},m(o,c){_(o,e,c);for(let w=0;w<n.length;w+=1)n[w]&&n[w].m(e,null);_(o,l,c),_(o,a,c),_(o,r,c),_(o,s,c),M(i,s,null),_(o,h,c),p&&p.m(o,c),_(o,u,c),d=!0},p(o,c){c&68&&(v=F(o[2]),D(),n=ae(n,c,q,1,o,v,t,e,ie,K,null,V),x()),o[1]?p?(p.p(o,c),c&2&&g(p,1)):(p=R(o),p.c(),g(p,1),p.m(u.parentNode,u)):p&&(D(),$(p,1,1,()=>{p=null}),x())},i(o){if(!d){for(let c=0;c<v.length;c+=1)g(n[c]);g(i.$$.fragment,o),g(p),d=!0}},o(o){for(let c=0;c<n.length;c+=1)$(n[c]);$(i.$$.fragment,o),$(p),d=!1},d(o){o&&(m(e),m(l),m(a),m(r),m(s),m(h),m(u));for(let c=0;c<n.length;c+=1)n[c].d();T(i),p&&p.d(o)}}}function _e(f){let e,n,t,l,a;return n=new W({props:{interval:f[3],delay:400,$$slots:{default:[ge]},$$scope:{ctx:f}}}),l=new X({}),l.$on("message",f[4]),{c(){e=k("section"),A(n.$$.fragment),t=I(),A(l.$$.fragment),this.h()},l(r){e=y(r,"SECTION",{class:!0});var s=C(e);N(n.$$.fragment,s),t=E(s),N(l.$$.fragment,s),s.forEach(m),this.h()},h(){b(e,"class","first-chat-container svelte-11ygegx")},m(r,s){_(r,e,s),M(n,e,null),L(e,t),M(l,e,null),a=!0},p(r,s){const i={};s&16384&&(i.$$scope={dirty:s,ctx:r}),n.$set(i)},i(r){a||(g(n.$$.fragment,r),g(l.$$.fragment,r),a=!0)},o(r){$(n.$$.fragment,r),$(l.$$.fragment,r),a=!1},d(r){r&&m(e),T(n),T(l)}}}function j(f){let e,n;return e=new oe({props:{message:f[11].content}}),{c(){A(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){M(e,t,l),n=!0},p(t,l){const a={};l&4&&(a.message=t[11].content),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function H(f){let e,n;return e=new he({props:{message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}}),e.$on("finished",f[6]),{c(){A(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){M(e,t,l),n=!0},p:P,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function K(f,e){let n,t,l,a,r=e[11].user==="A"&&j(e),s=e[11].user==="B"&&H(e);return{key:f,first:null,c(){n=S(),r&&r.c(),t=I(),s&&s.c(),l=S(),this.h()},l(i){n=S(),r&&r.l(i),t=E(i),s&&s.l(i),l=S(),this.h()},h(){this.first=n},m(i,h){_(i,n,h),r&&r.m(i,h),_(i,t,h),s&&s.m(i,h),_(i,l,h),a=!0},p(i,h){e=i,e[11].user==="A"?r?(r.p(e,h),h&4&&g(r,1)):(r=j(e),r.c(),g(r,1),r.m(t.parentNode,t)):r&&(D(),$(r,1,1,()=>{r=null}),x()),e[11].user==="B"?s?(s.p(e,h),h&4&&g(s,1)):(s=H(e),s.c(),g(s,1),s.m(l.parentNode,l)):s&&(D(),$(s,1,1,()=>{s=null}),x())},i(i){a||(g(r),g(s),a=!0)},o(i){$(r),$(s),a=!1},d(i){i&&(m(n),m(t),m(l)),r&&r.d(i),s&&s.d(i)}}}function R(f){let e,n="Analyze",t,l,a,r;return{c(){e=k("button"),e.textContent=n,this.h()},l(s){e=y(s,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1k1kz78"&&(e.textContent=n),this.h()},h(){b(e,"id","search-button"),b(e,"class","svelte-11ygegx")},m(s,i){_(s,e,i),l=!0,a||(r=ne(e,"click",re(f[7])),a=!0)},p:P,i(s){l||(s&&le(()=>{l&&(t||(t=z(e,U,{y:200,duration:700},!0)),t.run(1))}),l=!0)},o(s){s&&(t||(t=z(e,U,{y:200,duration:700},!1)),t.run(0)),l=!1},d(s){s&&m(e),s&&t&&t.end(),a=!1,r()}}}function ge(f){let e,n="Describe by keyword, task or media";return{c(){e=k("h2"),e.textContent=n,this.h()},l(t){e=y(t,"H2",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1et5yqv"&&(e.textContent=n),this.h()},h(){b(e,"class","svelte-11ygegx")},m(t,l){_(t,e,l)},p:P,d(t){t&&m(e)}}}function de(f){let e,n,t,l,a,r;e=new fe({});const s=[_e,pe],i=[];function h(u,d){return u[0]?1:0}return l=h(f),a=i[l]=s[l](f),{c(){A(e.$$.fragment),n=I(),t=k("main"),a.c(),this.h()},l(u){N(e.$$.fragment,u),n=E(u),t=y(u,"MAIN",{class:!0});var d=C(t);a.l(d),d.forEach(m),this.h()},h(){b(t,"class","svelte-11ygegx")},m(u,d){M(e,u,d),_(u,n,d),_(u,t,d),i[l].m(t,null),r=!0},p(u,[d]){let v=l;l=h(u),l===v?i[l].p(u,d):(D(),$(i[v],1,1,()=>{i[v]=null}),x(),a=i[l],a?a.p(u,d):(a=i[l]=s[l](u),a.c()),g(a,1),a.m(t,null))},i(u){r||(g(e.$$.fragment,u),g(a),r=!0)},o(u){$(e.$$.fragment,u),$(a),r=!1},d(u){u&&(m(n),m(t)),T(e,u),i[l].d()}}}function $e(f,e,n){let t=[20,100,50,20,25,18,14,50],l="",a=!1,r=!1,s=[];function i(v){l=v.detail,n(0,a=!0),n(2,s=[...s,{user:"A",content:l}]),n(2,s=[...s,{user:"B",content:""}])}function h(v){l=v.detail,n(2,s=[...s,{user:"A",content:l}]),n(2,s=[...s,{user:"B",content:""}])}function u(v){n(1,r=v.detail);let q=document.querySelector(".content-table");q==null||q.setAttribute("style","display:flex")}return se(()=>{}),[a,r,s,t,i,h,u,()=>window.location.href="/search-query/scanning"]}class Ce extends J{constructor(e){super(),Q(this,e,$e,de,G,{})}}export{Ce as component};