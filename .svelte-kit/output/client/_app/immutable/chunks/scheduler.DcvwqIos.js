function N(){}const et=t=>t;function S(t,e){for(const n in e)t[n]=e[n];return t}function nt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function q(t){return t()}function it(){return Object.create(null)}function L(t){t.forEach(q)}function T(t){return typeof t=="function"}function rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function ct(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function st(t){return Object.keys(t).length===0}function B(t,...e){if(t==null){for(const i of e)i(void 0);return N}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function lt(t,e,n){t.$$.on_destroy.push(B(e,n))}function ot(t,e,n,i){if(t){const r=j(t,e,n,i);return t[0](r)}}function j(t,e,n,i){return t[1]&&i?S(n.ctx.slice(),t[1](i(e))):n.ctx}function ut(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function at(t,e,n,i,r,o){if(r){const c=j(e,n,i,o);t.p(c,r)}}function ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function _t(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function dt(t){return t&&T(t.destroy)?t.destroy:N}function ht(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let p=!1;function mt(){p=!0}function pt(){p=!1}function M(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function F(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:M(1,r,P=>e[n[P]].claim_order,u))-1;i[s]=n[a]+1;const E=a+1;n[E]=s,r=Math.max(E,r)}const o=[],c=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);o.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<o.length&&c[s].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[s],a)}}function H(t,e){t.appendChild(e)}function I(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=A("style");return e.textContent="/* empty */",R(I(t),e),e.sheet}function R(t,e){return H(t.head||t,e),e.sheet}function z(t,e){if(p){for(F(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function bt(t,e,n){p&&!n?z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function gt(t){t.parentNode&&t.parentNode.removeChild(t)}function A(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function xt(){return x(" ")}function wt(){return x("")}function Et(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function kt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function O(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const U=["width","height"];function W(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&U.indexOf(i)===-1?t[i]=e[i]:O(t,i,e[i])}function G(t,e){Object.keys(e).forEach(n=>{J(t,n,e[n])})}function J(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:O(t,e,n)}function vt(t){return/-/.test(t)?G:W}function Nt(t){return t.dataset.svelteH}function jt(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function At(t){return Array.from(t.childNodes)}function K(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,e,n,i,r=!1){K(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Q(t,e,n,i){return C(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||o.push(l.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Ot(t,e,n){return Q(t,e,n,A)}function V(t,e){return C(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(e),!0)}function Ct(t){return V(t," ")}function Dt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Pt(t,e){t.value=e??""}function St(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function qt(t,e,n){t.classList.toggle(e,!!n)}function X(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Lt(t,e){return new t(e)}let m;function y(t){m=t}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function Tt(t){w().$$.on_mount.push(t)}function Bt(t){w().$$.after_update.push(t)}function Mt(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=X(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const d=[],k=[];let _=[];const v=[],D=Promise.resolve();let g=!1;function Y(){g||(g=!0,D.then($))}function Ft(){return Y(),D}function Z(t){_.push(t)}const b=new Set;let f=0;function $(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const e=d[f];f++,y(e),tt(e.$$)}}catch(e){throw d.length=0,f=0,e}for(y(null),d.length=0,f=0;k.length;)k.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];b.has(n)||(b.add(n),n())}_.length=0}while(d.length);for(;v.length;)v.pop()();g=!1,b.clear(),y(t)}function tt(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function Ht(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{nt as $,St as A,k as B,Lt as C,Ft as D,ot as E,at as F,ft as G,ut as H,Z as I,ct as J,Mt as K,I as L,yt as M,T as N,X as O,it as P,$ as Q,st as R,Ht as S,m as T,y as U,q as V,d as W,Y as X,mt as Y,pt as Z,qt as _,xt as a,w as a0,S as a1,_t as a2,vt as a3,dt as a4,At as b,Ot as c,V as d,A as e,gt as f,Ct as g,z as h,bt as i,Dt as j,lt as k,jt as l,Nt as m,N as n,O as o,Pt as p,Et as q,kt as r,rt as s,x as t,L as u,ht as v,et as w,wt as x,Bt as y,Tt as z};
