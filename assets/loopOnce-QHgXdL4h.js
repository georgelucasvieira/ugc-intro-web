import{a as l,r}from"./animationSetup-DGAsOXoj.js";import{w as m,t as f}from"./writeEffect-CVTKLYqx.js";import{u}from"./unwriteEffect-CO3Jj9tn.js";import"./index-vcv1k7Gn.js";const v=async(o,a)=>{const{options:t,elements:s}=l(o,a);for(const i of s){const{currentNode:e,text:p}=i;await m(i,t);const c=p.replaceAll("&","&amp;");e.innerHTML===c&&(t.dispatch("done"),await f(t.wordInterval),s.indexOf(i)===s.length-1||(await u(e,t),r(e,t.parentElement,n=>{e===n?n.classList.remove("typing"):n.classList.remove("finished-typing")})),r(e,t.parentElement,n=>{typeof t.keepCursorOnFinish=="number"&&setTimeout(()=>{n.classList.replace("typing","finished-typing")},t.keepCursorOnFinish)}))}return{update(){},destroy(){}}};export{v as default};
