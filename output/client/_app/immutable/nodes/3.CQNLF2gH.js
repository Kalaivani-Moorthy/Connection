import{t as B,a as H,c as se}from"../chunks/jCTKtdQ_.js";import{i as ke}from"../chunks/BKkrUJE7.js";import{J as xe,b as ge,s as U,h as R,x as je,a as we,N as p,a1 as Ie,H as Re,r as le,c as X,f as K,B as Te,d as pe,e as me,p as Se,a2 as Q,G as ye,K as te,a3 as ve,a4 as Me,a5 as ne,a6 as ae,a7 as De,F as Ce,a8 as Pe,g as He,a9 as re,aa as Le,z as Oe,_ as Ye,ab as be,Y as Ge,ac as Ve,ad as qe,ae as Be,af as Ke,v as We,ag as ze,j as Fe,ah as Y,k as Je,l as G,m as V,o as L,i as ie,S as fe,ai as Ue,aj as Xe,ak as T}from"../chunks/DiwTp2os.js";import{s as Qe}from"../chunks/yl0GpNlX.js";import{i as W}from"../chunks/CQw6z3Wc.js";import{b as Ze,l as $e,e as Z}from"../chunks/DM9iFJZv.js";function oe(e,a){return a}function ea(e,a,r,i){for(var s=[],v=a.length,f=0;f<v;f++)De(a[f].e,s,!0);var d=v>0&&s.length===0&&r!==null;if(d){var x=r.parentNode;Ce(x),x.append(r),i.clear(),O(e,a[0].prev,a[v-1].next)}Pe(s,()=>{for(var E=0;E<v;E++){var h=a[E];d||(i.delete(h.k),O(e,h.prev,h.next)),He(h.e,!d)}})}function ue(e,a,r,i,s,v=null){var f=e,d={items:new Map,first:null},x=(a&be)!==0;if(x){var E=e;f=R?U(je(E)):E.appendChild(xe())}R&&we();var h=null,D=!1,n=Ie(()=>{var c=r();return Ye(c)?c:c==null?[]:ye(c)});ge(()=>{var c=p(n),l=c.length;if(D&&l===0)return;D=l===0;let S=!1;if(R){var y=f.data===Re;y!==(l===0)&&(f=le(),U(f),X(!1),S=!0)}if(R){for(var g=null,w,b=0;b<l;b++){if(K.nodeType===8&&K.data===Te){f=K,S=!0,X(!1);break}var t=c[b],o=i(t,b);w=Ae(K,d,g,null,t,o,b,s,a,r),d.items.set(o,w),g=w}l>0&&U(le())}R||aa(c,d,f,s,a,i,r),v!==null&&(l===0?h?pe(h):h=me(()=>v(f)):h!==null&&Se(h,()=>{h=null})),S&&X(!0),p(n)}),R&&(f=K)}function aa(e,a,r,i,s,v,f){var k,N,j,C;var d=(s&Ve)!==0,x=(s&(re|ae))!==0,E=e.length,h=a.items,D=a.first,n=D,c,l=null,S,y=[],g=[],w,b,t,o;if(d)for(o=0;o<E;o+=1)w=e[o],b=v(w,o),t=h.get(b),t!==void 0&&((k=t.a)==null||k.measure(),(S??(S=new Set)).add(t));for(o=0;o<E;o+=1){if(w=e[o],b=v(w,o),t=h.get(b),t===void 0){var z=n?n.e.nodes_start:r;l=Ae(z,a,l,l===null?a.first:l.next,w,b,o,i,s,f),h.set(b,l),y=[],g=[],n=l.next;continue}if(x&&ra(t,w,o,s),t.e.f&Q&&(pe(t.e),d&&((N=t.a)==null||N.unfix(),(S??(S=new Set)).delete(t))),t!==n){if(c!==void 0&&c.has(t)){if(y.length<g.length){var q=g[0],M;l=q.prev;var _=y[0],u=y[y.length-1];for(M=0;M<y.length;M+=1)ce(y[M],q,r);for(M=0;M<g.length;M+=1)c.delete(g[M]);O(a,_.prev,u.next),O(a,l,_),O(a,u,q),n=q,l=u,o-=1,y=[],g=[]}else c.delete(t),ce(t,n,r),O(a,t.prev,t.next),O(a,t,l===null?a.first:l.next),O(a,l,t),l=t;continue}for(y=[],g=[];n!==null&&n.k!==b;)n.e.f&Q||(c??(c=new Set)).add(n),g.push(n),n=n.next;if(n===null)continue;t=n}y.push(t),l=t,n=t.next}if(n!==null||c!==void 0){for(var m=c===void 0?[]:ye(c);n!==null;)n.e.f&Q||m.push(n),n=n.next;var A=m.length;if(A>0){var I=s&be&&E===0?r:null;if(d){for(o=0;o<A;o+=1)(j=m[o].a)==null||j.measure();for(o=0;o<A;o+=1)(C=m[o].a)==null||C.fix()}ea(a,m,I,h)}}d&&Ge(()=>{var P;if(S!==void 0)for(t of S)(P=t.a)==null||P.apply()}),te.first=a.first&&a.first.e,te.last=l&&l.e}function ra(e,a,r,i){i&re&&ve(e.v,a),i&ae?ve(e.i,r):e.i=r}function Ae(e,a,r,i,s,v,f,d,x,E){var h=(x&re)!==0,D=(x&Le)===0,n=h?D?Me(s):ne(s):s,c=x&ae?ne(f):f,l={i:c,v:n,k:v,a:null,e:null,prev:r,next:i};try{return l.e=me(()=>d(e,n,c,E),R),l.e.prev=r&&r.e,l.e.next=i&&i.e,r===null?a.first=l:(r.next=l,r.e.next=l.e),i!==null&&(i.prev=l,i.e.prev=l.e),l}finally{}}function ce(e,a,r){for(var i=e.next?e.next.e.nodes_start:r,s=a?a.e.nodes_start:r,v=e.e.nodes_start;v!==i;){var f=Oe(v);s.before(v),v=f}}function O(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function _e(e){if(R){var a=!1,r=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var i=e.value;de(e,"value",null),e.value=i}if(e.hasAttribute("checked")){var s=e.checked;de(e,"checked",null),e.checked=s}}};e.__on_r=r,qe(r),Ze()}}function de(e,a,r,i){var s=e.__attributes??(e.__attributes={});R&&(s[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||s[a]!==(s[a]=r)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[Be]=r),e.removeAttribute(a))}function sa(e,a,r){var i=e.__className,s=la(a);R&&e.className===s?e.__className=s:(i!==s||R&&e.className!==s)&&(a==null?e.removeAttribute("class"):e.className=s,e.__className=s)}function la(e,a){return(e??"")+""}function he(e,a,r=a){var i=Ke();$e(e,"input",s=>{var v=s?e.defaultValue:e.value;if(v=$(e)?ee(v):v,r(v),i&&v!==(v=a())){var f=e.selectionStart,d=e.selectionEnd;e.value=v??"",d!==null&&(e.selectionStart=f,e.selectionEnd=Math.min(d,e.value.length))}}),(R&&e.defaultValue!==e.value||We(a)==null&&e.value)&&r($(e)?ee(e.value):e.value),ze(()=>{var s=a();$(e)&&s===ee(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function $(e){var a=e.type;return a==="number"||a==="range"}function ee(e){return e===""?null:+e}var ta=B("<div></div>"),va=B('<div class="overlay svelte-eop2vj"><div class="popup start-modal svelte-eop2vj"><h2>Enter Player Names</h2> <input type="text" placeholder="Player 1 (Red)" class="svelte-eop2vj"> <input type="text" placeholder="Player 2 (Yellow)" class="svelte-eop2vj"> <button class="svelte-eop2vj">Start Game</button></div></div>'),na=B("<h2> </h2>"),ia=B("<h2>It's a Draw!</h2>"),fa=B('<div class="overlay svelte-eop2vj"><div class="victory-popup svelte-eop2vj"><!> <div class="score-container svelte-eop2vj"><p>Score:</p> <span class="score svelte-eop2vj">10012</span></div> <div class="stats svelte-eop2vj"><div class="svelte-eop2vj"><span class="svelte-eop2vj">❤️</span> <span class="svelte-eop2vj">201</span></div> <div class="svelte-eop2vj"><span class="svelte-eop2vj">🍀</span> <span class="svelte-eop2vj">056</span></div></div> <div class="buttons svelte-eop2vj"><button class="restart svelte-eop2vj">↺ Restart</button> <button class="next svelte-eop2vj">→ Next</button> <button class="menu svelte-eop2vj">☰ Menu</button></div></div></div>'),oa=B('<div class="game-container svelte-eop2vj"><h1>Connect 4</h1> <div class="board svelte-eop2vj"></div> <!> <!></div>');function ma(e,a){Fe(a,!1);let r=6,i=7,s=Y(Array.from({length:r},()=>Array(i).fill(null))),v="Red",f=Y(null),d=Y(!1),x=Y(""),E=Y(""),h="Player 1",D="Player 2",n=Y(!0),c=Y(!1);const l=_=>{if(!(p(f)||p(d))){for(let u=r-1;u>=0;u--)if(!p(s)[u][_]){Xe(s,p(s)[u][_]=v),S(u,_)?(T(f,v==="Red"?h:D),T(c,!0)):p(s).every(m=>m.every(A=>A))?(T(d,!0),T(c,!0)):v=v==="Red"?"Yellow":"Red";return}}},S=(_,u)=>y(_,u,1,0)||y(_,u,0,1)||y(_,u,1,1)||y(_,u,1,-1),y=(_,u,m,A)=>{let I=1;for(let k=-1;k<=1;k+=2){let N=_+k*m,j=u+k*A;for(;N>=0&&N<r&&j>=0&&j<i&&p(s)[N][j]===v;)I++,N+=k*m,j+=k*A}return I>=4},g=()=>{T(s,Array.from({length:r},()=>Array(i).fill(null))),v="Red",T(f,null),T(d,!1),T(c,!1)},w=()=>{h=p(x)||"Player 1",D=p(E)||"Player 2",T(n,!1)};ke();var b=oa(),t=G(V(b),2);ue(t,5,()=>p(s),oe,(_,u)=>{var m=se(),A=ie(m);ue(A,1,()=>p(u),oe,(I,k,N)=>{var j=ta();fe(()=>sa(j,`cell ${p(k)??""} svelte-eop2vj`)),Z("click",j,()=>l(N)),H(I,j)}),H(_,m)}),L(t);var o=G(t,2);{var z=_=>{var u=va(),m=V(u),A=G(V(m),2);_e(A);var I=G(A,2);_e(I);var k=G(I,2);L(m),L(u),he(A,()=>p(x),N=>T(x,N)),he(I,()=>p(E),N=>T(E,N)),Z("click",k,w),H(_,u)};W(o,_=>{p(n)&&_(z)})}var q=G(o,2);{var M=_=>{var u=fa(),m=V(u),A=V(m);{var I=C=>{var P=na(),F=V(P);L(P),fe(()=>Qe(F,`🎉 ${p(f)??""} Wins! 🎉`)),H(C,P)},k=C=>{var P=se(),F=ie(P);{var Ee=J=>{var Ne=ia();H(J,Ne)};W(F,J=>{p(d)&&J(Ee)},!0)}H(C,P)};W(A,C=>{p(f)?C(I):C(k,!1)})}var N=G(A,6),j=V(N);Ue(4),L(N),L(m),L(u),Z("click",j,g),H(_,u)};W(q,_=>{p(c)&&_(M)})}L(b),H(e,b),Je()}export{ma as component};
