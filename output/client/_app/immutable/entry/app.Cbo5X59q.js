const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.C5-TQUzo.js","../chunks/jCTKtdQ_.js","../chunks/DiwTp2os.js","../nodes/1.COZZ65H7.js","../chunks/BKkrUJE7.js","../chunks/yl0GpNlX.js","../chunks/DM9iFJZv.js","../chunks/BUtUFBUc.js","../chunks/CCzQdjwV.js","../nodes/2.CqZBcxpm.js","../assets/2.uSe_K_Q2.css","../nodes/3.CQNLF2gH.js","../chunks/CQw6z3Wc.js","../assets/3.OMw9pkuA.css"])))=>i.map(i=>d[i]);
var p=t=>{throw TypeError(t)};var ee=(t,e,n)=>e.has(t)||p("Cannot "+n);var P=(t,e,n)=>(ee(t,e,"read from private field"),n?n.call(t):e.get(t)),K=(t,e,n)=>e.has(t)?p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),M=(t,e,n,_)=>(ee(t,e,"write to private field"),_?_.call(t,n):e.set(t,n),n);import{al as j,am as oe,an as ce,a5 as T,ao as de,N as y,U as R,ak as w,ap as G,K as X,aq as _e,ar as ve,_ as he,h as te,a as me,b as ge,E as ye,e as be,f as Ee,p as Pe,as as Re,ag as we,v as $,Y as Oe,at as Se,au as Ie,av as Ae,aw as xe,a4 as fe,ax as Le,ay as ue,t as Te,az as De,aA as Ce,aB as Ne,V as re,aC as ke,Q as q,aD as Be,a1 as je,aE as qe,Z as Fe,j as Ue,L as Ve,u as Ye,aF as Z,aG as Ge,i as U,l as Ke,k as Me,m as Ze,o as ze,S as He}from"../chunks/DiwTp2os.js";import{h as Qe,m as We,u as Je,s as Xe}from"../chunks/yl0GpNlX.js";import{t as le,a as N,c as z,d as $e}from"../chunks/jCTKtdQ_.js";import{i as H}from"../chunks/CQw6z3Wc.js";import{o as pe}from"../chunks/CCzQdjwV.js";function D(t,e=null,n){if(typeof t!="object"||t===null||j in t)return t;const _=ve(t);if(_!==oe&&_!==ce)return t;var a=new Map,c=he(t),f=T(0);c&&a.set("length",T(t.length));var i;return new Proxy(t,{defineProperty(u,r,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&_e();var l=a.get(r);return l===void 0?(l=T(s.value),a.set(r,l)):w(l,D(s.value,i)),!0},deleteProperty(u,r){var s=a.get(r);if(s===void 0)r in u&&a.set(r,T(R));else{if(c&&typeof r=="string"){var l=a.get("length"),o=Number(r);Number.isInteger(o)&&o<l.v&&w(l,o)}w(s,R),ae(f)}return!0},get(u,r,s){var m;if(r===j)return t;var l=a.get(r),o=r in u;if(l===void 0&&(!o||(m=G(u,r))!=null&&m.writable)&&(l=T(D(o?u[r]:R,i)),a.set(r,l)),l!==void 0){var d=y(l);return d===R?void 0:d}return Reflect.get(u,r,s)},getOwnPropertyDescriptor(u,r){var s=Reflect.getOwnPropertyDescriptor(u,r);if(s&&"value"in s){var l=a.get(r);l&&(s.value=y(l))}else if(s===void 0){var o=a.get(r),d=o==null?void 0:o.v;if(o!==void 0&&d!==R)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return s},has(u,r){var d;if(r===j)return!0;var s=a.get(r),l=s!==void 0&&s.v!==R||Reflect.has(u,r);if(s!==void 0||X!==null&&(!l||(d=G(u,r))!=null&&d.writable)){s===void 0&&(s=T(l?D(u[r],i):R),a.set(r,s));var o=y(s);if(o===R)return!1}return l},set(u,r,s,l){var E;var o=a.get(r),d=r in u;if(c&&r==="length")for(var m=s;m<o.v;m+=1){var v=a.get(m+"");v!==void 0?w(v,R):m in u&&(v=T(R),a.set(m+"",v))}o===void 0?(!d||(E=G(u,r))!=null&&E.writable)&&(o=T(void 0),w(o,D(s,i)),a.set(r,o)):(d=o.v!==R,w(o,D(s,i)));var h=Reflect.getOwnPropertyDescriptor(u,r);if(h!=null&&h.set&&h.set.call(l,s),!d){if(c&&typeof r=="string"){var S=a.get("length"),I=Number(r);Number.isInteger(I)&&I>=S.v&&w(S,I+1)}ae(f)}return!0},ownKeys(u){y(f);var r=Reflect.ownKeys(u).filter(o=>{var d=a.get(o);return d===void 0||d.v!==R});for(var[s,l]of a)l.v!==R&&!(s in u)&&r.push(s);return r},setPrototypeOf(){de()}})}function ae(t,e=1){w(t,t.v+e)}function Q(t,e,n){te&&me();var _=t,a,c;ge(()=>{a!==(a=e())&&(c&&(Pe(c),c=null),a&&(c=be(()=>n(_,a))))},ye),te&&(_=Ee)}function ne(t,e){return t===e||(t==null?void 0:t[j])===e}function W(t={},e,n,_){return Re(()=>{var a,c;return we(()=>{a=c,c=[],$(()=>{t!==n(...c)&&(e(t,...c),a&&ne(n(...a),t)&&e(null,...a))})}),()=>{Oe(()=>{c&&ne(n(...c),t)&&e(null,...c)})}}),t}let V=!1;function et(t){var e=V;try{return V=!1,[t(),V]}finally{V=e}}function se(t){for(var e=X,n=X;e!==null&&!(e.f&(Ce|Ne));)e=e.parent;try{return re(e),t()}finally{re(n)}}function J(t,e,n,_){var k;var a=(n&ke)!==0,c=!Te||(n&De)!==0,f=(n&Le)!==0,i=(n&Be)!==0,u=!1,r;f?[r,u]=et(()=>t[e]):r=t[e];var s=j in t||ue in t,l=f&&(((k=G(t,e))==null?void 0:k.set)??(s&&e in t&&(g=>t[e]=g)))||void 0,o=_,d=!0,m=!1,v=()=>(m=!0,d&&(d=!1,i?o=$(_):o=_),o);r===void 0&&_!==void 0&&(l&&c&&Se(),r=v(),l&&l(r));var h;if(c)h=()=>{var g=t[e];return g===void 0?v():(d=!0,m=!1,g)};else{var S=se(()=>(a?q:je)(()=>t[e]));S.f|=Ie,h=()=>{var g=y(S);return g!==void 0&&(o=void 0),g===void 0?o:g}}if(!(n&Ae))return h;if(l){var I=t.$$legacy;return function(g,L){return arguments.length>0?((!c||!L||I||u)&&l(L?h():g),g):h()}}var E=!1,A=!1,b=fe(r),C=se(()=>q(()=>{var g=h(),L=y(b);return E?(E=!1,A=!0,L):(A=!1,b.v=g)}));return a||(C.equals=xe),function(g,L){if(arguments.length>0){const B=L?y(C):c&&f?D(g):g;return C.equals(B)||(E=!0,w(b,B),m&&o!==void 0&&(o=B),$(()=>y(C))),g}return y(C)}}function tt(t){return class extends rt{constructor(e){super({component:t,...e})}}}var x,O;class rt{constructor(e){K(this,x);K(this,O);var c;var n=new Map,_=(f,i)=>{var u=fe(i);return n.set(f,u),u};const a=new Proxy({...e.props||{},$$events:{}},{get(f,i){return y(n.get(i)??_(i,Reflect.get(f,i)))},has(f,i){return i===ue?!0:(y(n.get(i)??_(i,Reflect.get(f,i))),Reflect.has(f,i))},set(f,i,u){return w(n.get(i)??_(i,u),u),Reflect.set(f,i,u)}});M(this,O,(e.hydrate?Qe:We)(e.component,{target:e.target,anchor:e.anchor,props:a,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((c=e==null?void 0:e.props)!=null&&c.$$host)||e.sync===!1)&&qe(),M(this,x,a.$$events);for(const f of Object.keys(P(this,O)))f==="$set"||f==="$destroy"||f==="$on"||Fe(this,f,{get(){return P(this,O)[f]},set(i){P(this,O)[f]=i},enumerable:!0});P(this,O).$set=f=>{Object.assign(a,f)},P(this,O).$destroy=()=>{Je(P(this,O))}}$set(e){P(this,O).$set(e)}$on(e,n){P(this,x)[e]=P(this,x)[e]||[];const _=(...a)=>n.call(this,...a);return P(this,x)[e].push(_),()=>{P(this,x)[e]=P(this,x)[e].filter(a=>a!==_)}}$destroy(){P(this,O).$destroy()}}x=new WeakMap,O=new WeakMap;const at="modulepreload",nt=function(t,e){return new URL(t,e).href},ie={},Y=function(e,n,_){let a=Promise.resolve();if(n&&n.length>0){const f=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),u=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(n.map(r=>{if(r=nt(r,_),r in ie)return;ie[r]=!0;const s=r.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!_)for(let m=f.length-1;m>=0;m--){const v=f[m];if(v.href===r&&(!s||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const d=document.createElement("link");if(d.rel=s?"stylesheet":at,s||(d.as="script"),d.crossOrigin="",d.href=r,u&&d.setAttribute("nonce",u),document.head.appendChild(d),s)return new Promise((m,v)=>{d.addEventListener("load",m),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${r}`)))})}))}function c(f){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=f,window.dispatchEvent(i),!i.defaultPrevented)throw f}return a.then(f=>{for(const i of f||[])i.status==="rejected"&&c(i.reason);return e().catch(c)})},mt={};var st=le('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),it=le("<!> <!>",1);function ft(t,e){Ue(e,!0);let n=J(e,"components",23,()=>[]),_=J(e,"data_0",3,null),a=J(e,"data_1",3,null);Ve(()=>e.stores.page.set(e.page)),Ye(()=>{e.stores,e.page,e.constructors,n(),e.form,_(),a(),e.stores.page.notify()});let c=Z(!1),f=Z(!1),i=Z(null);pe(()=>{const v=e.stores.page.subscribe(()=>{y(c)&&(w(f,!0),Ge().then(()=>{w(i,D(document.title||"untitled page"))}))});return w(c,!0),v});const u=q(()=>e.constructors[1]);var r=it(),s=U(r);{var l=v=>{var h=z();const S=q(()=>e.constructors[0]);var I=U(h);Q(I,()=>y(S),(E,A)=>{W(A(E,{get data(){return _()},get form(){return e.form},children:(b,C)=>{var k=z(),g=U(k);Q(g,()=>y(u),(L,B)=>{W(B(L,{get data(){return a()},get form(){return e.form}}),F=>n()[1]=F,()=>{var F;return(F=n())==null?void 0:F[1]})}),N(b,k)},$$slots:{default:!0}}),b=>n()[0]=b,()=>{var b;return(b=n())==null?void 0:b[0]})}),N(v,h)},o=v=>{var h=z();const S=q(()=>e.constructors[0]);var I=U(h);Q(I,()=>y(S),(E,A)=>{W(A(E,{get data(){return _()},get form(){return e.form}}),b=>n()[0]=b,()=>{var b;return(b=n())==null?void 0:b[0]})}),N(v,h)};H(s,v=>{e.constructors[1]?v(l):v(o,!1)})}var d=Ke(s,2);{var m=v=>{var h=st(),S=Ze(h);{var I=E=>{var A=$e();He(()=>Xe(A,y(i))),N(E,A)};H(S,E=>{y(f)&&E(I)})}ze(h),N(v,h)};H(d,v=>{y(c)&&v(m)})}N(t,r),Me()}const gt=tt(ft),yt=[()=>Y(()=>import("../nodes/0.C5-TQUzo.js"),__vite__mapDeps([0,1,2]),import.meta.url),()=>Y(()=>import("../nodes/1.COZZ65H7.js"),__vite__mapDeps([3,1,2,4,5,6,7,8]),import.meta.url),()=>Y(()=>import("../nodes/2.CqZBcxpm.js"),__vite__mapDeps([9,1,2,4,6,7,8,10]),import.meta.url),()=>Y(()=>import("../nodes/3.CQNLF2gH.js"),__vite__mapDeps([11,1,2,4,5,6,12,13]),import.meta.url)],bt=[],Et={"/":[2],"/game":[3]},ut={handleError:({error:t})=>{console.error(t)},reroute:()=>{},transport:{}},lt=Object.fromEntries(Object.entries(ut.transport).map(([t,e])=>[t,e.decode])),Pt=!1,Rt=(t,e)=>lt[t](e);export{Rt as decode,lt as decoders,Et as dictionary,Pt as hash,ut as hooks,mt as matchers,yt as nodes,gt as root,bt as server_loads};
