(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=(n(0),n(105));const r={title:"Neutralino.init"},o={unversionedId:"api/init",id:"api/init",isDocsHomePage:!1,title:"Neutralino.init",description:"init is not a namespace, it's a function that initializes a Neutralinojs application.",source:"@site/docs/api/init.md",slug:"/api/init",permalink:"/docs/api/init",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/init.md",version:"current",sidebar:"docs",previous:{title:"Native API Overview",permalink:"/docs/api/overview"},next:{title:"Neutralino.app",permalink:"/docs/api/app"}},c=[{value:"init()",id:"init",children:[]}],l={toc:c};function p({components:e,...t}){return Object(a.b)("wrapper",Object(i.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"init")," is not a namespace, it's a function that initializes a Neutralinojs application."),Object(a.b)("h2",{id:"init"},"init()"),Object(a.b)("p",null,"The application developer needs to call this method explicitly via a JavaScript source file before using any\nnative API function. The ",Object(a.b)("inlineCode",{parentName:"p"},"init")," function does the following tasks when it's called."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Starts a WebSocket connection with the Neutralinojs server."),Object(a.b)("li",{parentName:"ul"},"Starts listening to the development server if the ",Object(a.b)("inlineCode",{parentName:"li"},"--debug-mode")," flag (the ",Object(a.b)("inlineCode",{parentName:"li"},"neu run")," command sets this flag) is provided."),Object(a.b)("li",{parentName:"ul"},"Defines ",Object(a.b)("inlineCode",{parentName:"li"},"NL_CVERSION")," with the client libary version in the ",Object(a.b)("inlineCode",{parentName:"li"},"window")," scope.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"Neutralino.init();\n\nNeutralino.events.on('ready', () => {\n    Neutralino.os.showMessageBox('Welcome', 'Hello Neutralinojs');\n});\n")),Object(a.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Aways use the ",Object(a.b)("inlineCode",{parentName:"p"},"ready")," event to call native API functions immediately. Don't call native API functions before the ",Object(a.b)("inlineCode",{parentName:"p"},"init()")," call\nor right after the ",Object(a.b)("inlineCode",{parentName:"p"},"init()")," call because the ",Object(a.b)("inlineCode",{parentName:"p"},"init()")," function doesn't synchronously wait until the WebSocket connection is\nestablished."))))}p.isMDXComponent=!0}}]);