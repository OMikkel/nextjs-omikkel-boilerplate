(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(1382)}])},1382:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return q}});var d=c(1799),e=c(5893),f=c(7294);let g=["light","dark"],h="(prefers-color-scheme: dark)",i="undefined"==typeof window,j=(0,f.createContext)(void 0),k=a=>(0,f.useContext)(j)?f.createElement(f.Fragment,null,a.children):f.createElement(l,a),l=({forcedTheme:a,disableTransitionOnChange:b=!1,enableSystem:c=!0,enableColorScheme:d=!0,storageKey:e="theme",themes:i=["light","dark"],defaultTheme:k=c?"system":"light",attribute:l="data-theme",value:q,children:r,nonce:s})=>{let[t,u]=(0,f.useState)(()=>n(e,k)),[v,w]=(0,f.useState)(()=>n(e)),x=q?Object.values(q):i,y=(0,f.useCallback)(a=>{let e=a;if(!e)return;"system"===a&&c&&(e=p());let f=q?q[e]:e,h=b?o():null,i=document.documentElement;if("class"===l?(i.classList.remove(...x),f&&i.classList.add(f)):f?i.setAttribute(l,f):i.removeAttribute(l),d){let j=g.includes(k)?k:null,m=g.includes(e)?e:j;i.style.colorScheme=m}null==h||h()},[]),z=(0,f.useCallback)(a=>{u(a);try{localStorage.setItem(e,a)}catch(b){}},[a]),A=(0,f.useCallback)(b=>{let d=p(b);w(d),"system"===t&&c&&!a&&y("system")},[t,a]);return(0,f.useEffect)(()=>{let a=window.matchMedia(h);return a.addListener(A),A(a),()=>a.removeListener(A)},[A]),(0,f.useEffect)(()=>{let a=a=>{a.key===e&&z(a.newValue||k)};return window.addEventListener("storage",a),()=>window.removeEventListener("storage",a)},[z]),(0,f.useEffect)(()=>{y(null!=a?a:t)},[a,t]),f.createElement(j.Provider,{value:{theme:t,setTheme:z,forcedTheme:a,resolvedTheme:"system"===t?v:t,themes:c?[...i,"system"]:i,systemTheme:c?v:void 0}},f.createElement(m,{forcedTheme:a,disableTransitionOnChange:b,enableSystem:c,enableColorScheme:d,storageKey:e,themes:i,defaultTheme:k,attribute:l,value:q,children:r,attrs:x,nonce:s}),r)},m=(0,f.memo)(({forcedTheme:a,storageKey:b,attribute:c,enableSystem:d,enableColorScheme:e,defaultTheme:i,value:j,attrs:k,nonce:l})=>{let m="system"===i,n="class"===c?`var d=document.documentElement,c=d.classList;c.remove(${k.map(a=>`'${a}'`).join(",")});`:`var d=document.documentElement,n='${c}',s='setAttribute';`,o=e?g.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(a,b=!1,d=!0)=>{let f=j?j[a]:a,h=b?a+"|| ''":`'${f}'`,i="";return e&&d&&!b&&g.includes(a)&&(i+=`d.style.colorScheme = '${a}';`),"class"===c?i+=b||f?`c.add(${h})`:"null":f&&(i+=`d[s](n,${h})`),i},q=a?`!function(){${n}${p(a)}}()`:d?`!function(){try{${n}var e=localStorage.getItem('${b}');if('system'===e||(!e&&${m})){var t='${h}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${j?`var x=${JSON.stringify(j)};`:""}${p(j?"x[e]":"e",!0)}}${m?"":"else{"+p(i,!1,!1)+"}"}${o}}catch(e){}}()`:`!function(){try{${n}var e=localStorage.getItem('${b}');if(e){${j?`var x=${JSON.stringify(j)};`:""}${p(j?"x[e]":"e",!0)}}else{${p(i,!1,!1)};}${o}}catch(t){}}();`;return f.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:q}})},()=>!0),n=(a,b)=>{if(i)return;let c;try{c=localStorage.getItem(a)||void 0}catch(d){}return c||b},o=()=>{let a=document.createElement("style");return a.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(a),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(a)},1)}},p=a=>(a||(a=window.matchMedia(h)),a.matches?"dark":"light");c(906);var q=function(a){var b=a.Component,c=a.pageProps;return(0,e.jsx)(k,{attribute:"class",enableColorScheme:!1,children:(0,e.jsx)(b,(0,d.Z)({},c))})}},906:function(){},1799:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}c.d(b,{Z:function(){return e}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(387)}),_N_E=a.O()}])