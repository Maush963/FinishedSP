!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4036a89b-f090-4201-8d92-793b5428fbcc",e._sentryDebugIdIdentifier="sentry-dbid-4036a89b-f090-4201-8d92-793b5428fbcc")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5190:function(e,t,n){Promise.resolve().then(n.bind(n,3241)),Promise.resolve().then(n.t.bind(n,936,23)),Promise.resolve().then(n.t.bind(n,8877,23))},3241:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return b}});var c=n(7437),o=n(2265),a=["light","dark"],r="(prefers-color-scheme: dark)",l="undefined"==typeof window,s=o.createContext(void 0),i=e=>o.useContext(s)?e.children:o.createElement(m,{...e}),d=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:c=!0,enableColorScheme:l=!0,storageKey:i="theme",themes:m=d,defaultTheme:b=c?"system":"light",attribute:g="data-theme",value:v,children:p,nonce:w}=e,[_,S]=o.useState(()=>h(i,b)),[k,E]=o.useState(()=>h(i)),C=v?Object.values(v):m,T=o.useCallback(e=>{let t=e;if(!t)return;"system"===e&&c&&(t=y());let o=v?v[t]:t,r=n?f():null,s=document.documentElement;if("class"===g?(s.classList.remove(...C),o&&s.classList.add(o)):o?s.setAttribute(g,o):s.removeAttribute(g),l){let e=a.includes(b)?b:null,n=a.includes(t)?t:e;s.style.colorScheme=n}null==r||r()},[]),I=o.useCallback(e=>{let t="function"==typeof e?e(e):e;S(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),x=o.useCallback(e=>{E(y(e)),"system"===_&&c&&!t&&T("system")},[_,t]);o.useEffect(()=>{let e=window.matchMedia(r);return e.addListener(x),x(e),()=>e.removeListener(x)},[x]),o.useEffect(()=>{let e=e=>{e.key===i&&I(e.newValue||b)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[I]),o.useEffect(()=>{T(null!=t?t:_)},[t,_]);let L=o.useMemo(()=>({theme:_,setTheme:I,forcedTheme:t,resolvedTheme:"system"===_?k:_,themes:c?[...m,"system"]:m,systemTheme:c?k:void 0}),[_,I,t,k,c,m]);return o.createElement(s.Provider,{value:L},o.createElement(u,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:c,enableColorScheme:l,storageKey:i,themes:m,defaultTheme:b,attribute:g,value:v,children:p,attrs:C,nonce:w}),p)},u=o.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:c,enableSystem:l,enableColorScheme:s,defaultTheme:i,value:d,attrs:m,nonce:u}=e,h="system"===i,f="class"===c?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(m.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(c,"',s='setAttribute';"),y=s?(a.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",b=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=d?d[e]:e,r=t?e+"|| ''":"'".concat(o,"'"),l="";return s&&n&&!t&&a.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===c?t||o?l+="c.add(".concat(r,")"):l+="null":o&&(l+="d[s](n,".concat(r,")")),l},g=t?"!function(){".concat(f).concat(b(t),"}()"):l?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(r,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(b("dark"),"}else{").concat(b("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(b(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+b(i,!1,!1)+"}").concat(y,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(b(d?"x[e]":"e",!0),"}else{").concat(b(i,!1,!1),";}").concat(y,"}catch(t){}}();");return o.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:g}})}),h=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(r)),e.matches?"dark":"light");function b(e){let{children:t,...n}=e;return(0,c.jsx)(i,{...n,children:t})}},8877:function(){},936:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}}},function(e){e.O(0,[232,991,971,332,744],function(){return e(e.s=5190)}),_N_E=e.O()}]);