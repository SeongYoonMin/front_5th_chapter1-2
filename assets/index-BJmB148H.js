var H=Object.defineProperty;var T=(e,t,r)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var v=(e,t,r)=>T(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();const j=()=>{const e=new Set;return{subscribe:s=>e.add(s),notify:()=>e.forEach(s=>s())}},W=(e,t)=>{const{subscribe:r,notify:s}=j();let o={...e};const l=c=>{o={...o,...c},s()},a=()=>({...o}),g=Object.fromEntries(Object.entries(t).map(([c,p])=>[c,(...E)=>l(p(a(),...E))]));return{getState:a,setState:l,subscribe:r,actions:g}},V=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:l=>t.setItem(e,JSON.stringify(l)),reset:()=>t.removeItem(e)}),O="/front_5th_chapter1-2/",J=e=>{const{subscribe:t,notify:r}=j(),s=()=>window.location.pathname.replace(O,""),o=()=>e[s()],l=a=>{a=`${O}${a}`,window.history.pushState(null,null,a),r()};return window.addEventListener("popstate",()=>r()),{get path(){return s()},push:l,subscribe:t,getTarget:o}};function n(e,t,...r){return r=r.filter(s=>s!=null&&s!==!1),{type:e,props:t,children:r.flat(1/0)}}const R=1e3,P=R*60,C=P*60,z=C*24,K=e=>{const t=Date.now()-e;return t<P?"방금 전":t<C?`${Math.floor(t/P)}분 전`:t<z?`${Math.floor(t/C)}시간 전`:new Date(e).toLocaleString()};function D(e){return e==null||typeof e=="boolean"}const u={},Y=e=>{const t=u[e.type];if(!t)return;let r=e.target;for(;r&&r!==document.body;){const s=t.get(r);if(s){s(e);break}r=r.parentElement}};function Q(e){Object.keys(u).forEach(t=>{e.addEventListener(t,Y)})}function $(e,t,r){u[t]||(u[t]=new WeakMap),u[t].set(e,r)}function X(e,t,r){if(!u[t])return;const s=u[t];console.log(r),s&&s.delete(e)}function f(e){if(typeof e=="string"||typeof e=="number")return document.createTextNode(e.toString());if(D(e))return document.createTextNode("");if(Array.isArray(e)){const r=document.createDocumentFragment();return e.forEach(s=>{const o=f(s);o&&r.appendChild(o)}),r}const t=document.createElement(e.type);return e.props&&Z(t,e.props),e.children&&Array.isArray(e.children)&&e.children.map(f).flat().forEach(s=>{t.appendChild(s)}),t}function Z(e,t){Object.entries(t).filter(([r,s])=>r&&s).forEach(([r,s])=>{if(r==="className")return r="class",e.setAttribute(r,s);if(r.startsWith("on")){$(e,r.slice(2).toLowerCase(),s);return}return e.setAttribute(r,s)})}function x(e){return D(e)?"":typeof e=="string"||typeof e=="number"?e.toString():Array.isArray(e)&&e.length===1?e[0].toString():typeof e.type=="function"?x(e.type({...e.props,children:e.children})):{type:e.type,props:e.props,children:Array.isArray(e.children)?e.children.filter(t=>!D(t)).map(x):x(e.children)}}function _(e,t,r){Object.entries(t).forEach(([s,o])=>{if(t[s]!==r[s]){if(s==="className"){e.setAttribute("class",o);return}if(s.startsWith("on")){$(e,s.slice(2).toLowerCase(),o);return}return e.setAttribute(s,o)}}),Object.entries(r).forEach(([s,o])=>{if(t[s]===void 0){if(s==="className"){e.removeAttribute("class");return}if(s.startsWith("on")){X(e,s.slice(2).toLowerCase(),o);return}e.removeAttribute(s.slice(2).toLowerCase())}})}function M(e,t,r,s=0){if(r&&!t)return e.removeChild(e.childNodes[s]);if(!r&&t)return e.appendChild(f(t));if(typeof r=="string"&&typeof t=="string")return r===t?void 0:e.replaceChild(f(t),e.childNodes[s]);if(r.type!==t.type)return e.replaceChild(f(t),e.childNodes[s]);_(e.childNodes[s],t.props||{},r.props||{});const o=Math.max(r.children.length,t.children.length);for(let l=0;l<o;l++)M(e.childNodes[s],t.children[l],r.children[l],l)}const A={node:null};function ee(e,t){const r=x(e);if(t.childNodes.length)M(t,r,A.node),A.node=r;else{const s=f(r);t.appendChild(s),A.node=r}Q(t)}const h=V("user"),te=1e3,b=te*60,re=b*60,i=W({currentUser:h.get(),loggedIn:!!h.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*b,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*b,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*b,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*b,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*re,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(e){return h.reset(),{...e,currentUser:null,loggedIn:!1}}}),ne=({id:e,author:t,time:r,content:s,likeUsers:o,isLoggedIn:l,activationLike:a=!1})=>{const g=()=>{if(!l){alert("로그인 후 이용해주세요");return}const{posts:c,currentUser:p}=i.getState(),E=c.map(d=>{if(d.id===e){if(d.likeUsers.includes(p)){const B=d.likeUsers.filter(G=>G!==p);return{...d,likeUsers:B}}return{...d,likeUsers:[p]}}return d});i.setState({posts:E})};return n("div",{className:"bg-white rounded-lg shadow p-4 mb-4"},n("div",{className:"flex items-center mb-2"},n("div",null,n("div",{className:"font-bold"},t),n("div",{className:"text-gray-500 text-sm"},K(r)))),n("p",null,s),n("div",{className:"mt-2 flex justify-between text-gray-500"},n("span",{className:`like-button cursor-pointer${a?" text-blue-500":""}`,onClick:g},"좋아요 ",o.length),n("span",null,"댓글"),n("span",null,"공유")))},se=()=>{const{posts:e,currentUser:t}=i.getState(),r=document.getElementById("post-content").value,s=new Date().getTime(),o={id:e.length+1,author:t.username,time:s,content:r,likeUsers:[]};i.setState({posts:[...e,o]}),document.getElementById("post-content").value=""},oe=()=>n("div",{className:"mb-4 bg-white rounded-lg shadow p-4"},n("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),n("button",{id:"post-submit",onClick:se,className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded"},"게시")),F=()=>n("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},n("h1",{className:"text-2xl font-bold"},"항해플러스")),k=()=>n("footer",{className:"bg-gray-200 p-4 text-center"},n("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),m={value:null,get(){return this.value},set(e){this.value=e}},L=e=>m.get().path===e?"text-blue-600 font-bold":"text-gray-600";function U({onClick:e,children:t,...r}){return n("a",{onClick:o=>{o.preventDefault(),e==null||e(),m.get().push(o.target.href.replace(window.location.origin,""))},...r},t)}const q=()=>{const{loggedIn:e}=i.getState(),{logout:t}=i.actions;return n("nav",{className:"bg-white shadow-md p-2 sticky top-14"},n("ul",{className:"flex justify-around"},n("li",null,n(U,{href:"/",className:L("/")},"홈")),!e&&n("li",null,n(U,{href:"/login",className:L("/login")},"로그인")),e&&n("li",null,n(U,{href:"/profile",className:L("/profile")},"프로필")),e&&n("li",null,n("a",{href:"#",id:"logout",className:"text-gray-600",onClick:r=>{r.preventDefault(),t()}},"로그아웃"))))},le=()=>{const{posts:e,loggedIn:t}=i.getState();return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(F,null),n(q,null),n("main",{className:"p-4"},t&&n(oe,null),n("div",{id:"posts-container",className:"space-y-4"},[...e].sort((r,s)=>s.time-r.time).map(r=>n(ne,{...r,isLoggedIn:t,activationLike:r.likeUsers.length>0})))),n(k,null)))};function ae(e){const t={username:e,email:"",bio:""};i.setState({currentUser:t,loggedIn:!0}),h.set(t)}const ie=()=>n("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},n("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),n("form",{id:"login-form",onSubmit:t=>{t.preventDefault();const r=document.getElementById("username").value;ae(r)}},n("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),n("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded"},"로그인")),n("div",{className:"mt-4 text-center"},n("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),n("hr",{className:"my-6"}),n("div",{className:"text-center"},n("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기")))),ce=()=>n("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},n("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),n("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),n("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),n("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),n("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function ue(e){const t={...i.getState().currentUser,...e};i.setState({currentUser:t}),h.set(t)}const me=()=>{const{loggedIn:e,currentUser:t}=i.getState(),{username:r="",email:s="",bio:o=""}=t??{};return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(F,null),n(q,{loggedIn:e}),n("main",{className:"p-4"},n("div",{className:"bg-white p-8 rounded-lg shadow-md"},n("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),n("form",{id:"profile-form",onSubmit:a=>{a.preventDefault();const g=new FormData(a.target),c=Object.fromEntries(g);ue(c)}},n("div",{className:"mb-4"},n("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),n("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:r,required:!0})),n("div",{className:"mb-4"},n("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),n("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:s,required:!0})),n("div",{className:"mb-6"},n("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),n("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},o)),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),n(k,null)))},S=class S extends Error{constructor(){super(S.MESSAGE)}};v(S,"MESSAGE","ForbiddenError");let y=S;const N=class N extends Error{constructor(){super(N.MESSAGE)}};v(N,"MESSAGE","UnauthorizedError");let w=N;function I(){const e=m.get().getTarget()??ce,t=document.querySelector("#root");try{ee(n(e,null),t)}catch(r){if(r instanceof y){m.get().push("/");return}if(r instanceof w){m.get().push("/login");return}console.error(r)}}m.set(J({"/":le,"/login":()=>{const{loggedIn:e}=i.getState();if(e)throw new y;return n(ie,null)},"/profile":()=>{const{loggedIn:e}=i.getState();if(!e)throw new w;return n(me,null)}}));function de(){m.get().subscribe(I),i.subscribe(I),I()}de();
