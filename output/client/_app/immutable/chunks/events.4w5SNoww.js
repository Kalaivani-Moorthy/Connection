import{V as f,W as l,X as y,M as b,q as S,Y as W,Z as x,_ as B}from"./runtime.CpCqj8bJ.js";let w=!1;function M(){w||(w=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var t;if(!r.defaultPrevented)for(const a of r.target.elements)(t=a.__on_r)==null||t.call(a)})},{capture:!0}))}function E(r){var t=y,a=b;f(null),l(null);try{return r()}finally{f(t),l(a)}}function D(r,t,a,n=a){r.addEventListener(t,()=>E(a));const i=r.__on_r;i?r.__on_r=()=>{i(),n()}:r.__on_r=n,M()}const N=new Set,V=new Set;function O(r,t,a,n){function i(e){if(n.capture||T.call(t,e),!e.cancelBubble)return E(()=>a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?W(()=>{t.addEventListener(r,i,n)}):t.addEventListener(r,i,n),i}function X(r,t,a,n,i){var e={capture:n,passive:i},o=O(r,t,a,e);(t===document.body||t===window||t===document)&&S(()=>{t.removeEventListener(r,o,e)})}function T(r){var g;var t=this,a=t.ownerDocument,n=r.type,i=((g=r.composedPath)==null?void 0:g.call(r))||[],e=i[0]||r.target,o=0,v=r.__root;if(v){var _=i.indexOf(v);if(_!==-1&&(t===document||t===window)){r.__root=t;return}var p=i.indexOf(t);if(p===-1)return;_<=p&&(o=_)}if(e=i[o]||r.target,e!==t){x(r,"currentTarget",{configurable:!0,get(){return e||a}});var L=y,k=b;f(null),l(null);try{for(var s,h=[];e!==null;){var d=e.assignedSlot||e.parentNode||e.host||null;try{var u=e["__"+n];if(u!==void 0&&!e.disabled)if(B(u)){var[q,...P]=u;q.apply(e,[r,...P])}else u.call(e,r)}catch(c){s?h.push(c):s=c}if(r.cancelBubble||d===t||d===null)break;e=d}if(s){for(let c of h)queueMicrotask(()=>{throw c});throw s}}finally{r.__root=t,delete r.currentTarget,f(L),l(k)}}}export{N as a,M as b,X as e,T as h,D as l,V as r};
