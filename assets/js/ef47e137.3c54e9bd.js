(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{105:function(e,t,n){"use strict";var a=n(0),i=n(106);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},106:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},142:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/myapp-running-linux-6b64836102a03dea98022af84f9b189c.png"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return f})),n.d(t,"toc",(function(){return g})),n.d(t,"default",(function(){return v}));var a=n(3),i=n(0),r=n.n(i),o=n(96),l=n(105),c=n(98),s=n(90),p=n.n(s);const u=37,b=39;var d=function(e){const{lazy:t,block:n,defaultValue:a,values:o,groupId:s,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(l.a)(),[f,g]=Object(i.useState)(a),j=i.Children.toArray(e.children),v=[];if(null!=s){const e=m[s];null!=e&&e!==f&&o.some((t=>t.value===e))&&g(e)}const O=e=>{const t=e.target,n=v.indexOf(t),a=j[n].props.value;g(a),null!=s&&(h(s,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return t>=0&&i<=o&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p.a.tabItemActive),setTimeout((()=>t.classList.remove(p.a.tabItemActive)),2e3))}),150))},y=e=>{var t;let n;switch(e.keyCode){case b:{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case u:{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},o.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(c.a)("tabs__item",p.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:y,onFocus:O,onClick:O},t)))),t?Object(i.cloneElement)(j.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))};var m=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)};const h={title:"Your First Neutralinojs App"},f={unversionedId:"getting-started/your-first-neutralinojs-app",id:"getting-started/your-first-neutralinojs-app",isDocsHomePage:!1,title:"Your First Neutralinojs App",description:"Introduction",source:"@site/docs/getting-started/your-first-neutralinojs-app.mdx",slug:"/getting-started/your-first-neutralinojs-app",permalink:"/docs/getting-started/your-first-neutralinojs-app",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/getting-started/your-first-neutralinojs-app.mdx",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Neutralino.app",permalink:"/docs/api/app"}},g=[{value:"Introduction",id:"introduction",children:[]},{value:"Step 0: Installing neu CLI",id:"step-0-installing-neu-cli",children:[]},{value:"Step 1: Creating a new app",id:"step-1-creating-a-new-app",children:[]},{value:"Step 2: Writing JavaScript, HTML, and CSS",id:"step-2-writing-javascript-html-and-css",children:[]},{value:"Step 3: Running your application",id:"step-3-running-your-application",children:[]},{value:"Step 4: Building your application\xa0",id:"step-4-building-your-application",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],j={toc:g};function v({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},j,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"We are going to create a simple application using Neutralinojs. This sample application will display Hello with the\ncurrent username of your operating system. For example, if the current username is Shalitha, it will show, Hello Shalitha."),Object(o.b)("h2",{id:"step-0-installing-neu-cli"},"Step 0: Installing neu CLI"),Object(o.b)("p",null,"You need to install neu CLI to create Neutralinojs applications. However, you can develop applications without CLI as well.\nBut, the CLI will make some hard stuff easy. Run the following command on your terminal to install neu CLI globally."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm install -g @neutralinojs/neu\n")),Object(o.b)("h2",{id:"step-1-creating-a-new-app"},"Step 1: Creating a new app"),Object(o.b)("p",null,"Enter the following command to scaffold a new app."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"neu create myapp\n")),Object(o.b)("p",null,"The above command will create a new app inside myapp directory. To make sure whether everything is fine, Run your application."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cd myapp\nneu run\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you are on Windows, you might get an empty white screen.\nThe reason is that accessing localhost from a UWP context is disabled by default.\nRun the following command with administrative privileges on the command prompt.\xa0"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre"},'CheckNetIsolation.exe LoopbackExempt -a -n="Microsoft.Win32WebViewHost_cw5n1h2txyewy"\n')),Object(o.b)("p",{parentName:"div"},"You may include this in your Windows setup files (with the user's consent) because users also may get an empty white screen on Windows."))),Object(o.b)("h2",{id:"step-2-writing-javascript-html-and-css"},"Step 2: Writing JavaScript, HTML, and CSS"),Object(o.b)("p",null,"Insert the following content into your application resource files."),Object(o.b)(d,{defaultValue:"index.html",values:[{label:"index.html",value:"index.html"},{label:"styles.css",value:"styles.css"},{label:"main.js",value:"main.js"}],mdxType:"Tabs"},Object(o.b)(m,{value:"index.html",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>NeutralinoJs</title>\n    <link rel="stylesheet" href="styles.css">\n  </head>\n  <body>\n    <div id="neutralinoapp">\n      <h1 id="name"></h1>\n    </div>\n    <script src="js/neutralino.js"><\/script>\n    <script src="js/main.js"><\/script>\n  </body>\n</html>\n'))),Object(o.b)(m,{value:"styles.css",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},"html, body{\n    margin: 0px;\n    padding: 0px;\n}\n\n#neutralinoapp {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #FFD700;\n}\n\n#neutralinoapp h1 {\n    position: relative;\n    float: left;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-family: Arial;\n    font-size: 48px;\n    padding: 0px;\n    margin: 0px;\n}\n"))),Object(o.b)(m,{value:"main.js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let getUsername = async () => {\n  const key = NL_OS == 'Windows' ? 'USERNAME' : 'USER';\n  let value = '';\n  try {\n      value = (await Neutralino.os.getEnvar({ key })).value;\n  }\n  catch(e) {\n      console.error(e);\n  }\n  document.getElementById('name').innerText = `Hello ${value}`;\n}\n\nNeutralino.init();\ngetUsername();\n")))),Object(o.b)("h2",{id:"step-3-running-your-application"},"Step 3: Running your application"),Object(o.b)("p",null,"As mentioned above, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"run")," command to start your application."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"neu run\n")),Object(o.b)("p",null,"Congrats! your application works."),Object(o.b)("p",null,Object(o.b)("img",{alt:"mypp is running on Linux",src:n(142).default})),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"For debugging purposes, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"neu listen")," command.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"listen")," command will reload your application when there is a change in application resources."))),Object(o.b)("h2",{id:"step-4-building-your-application"},"Step 4: Building your application\xa0"),Object(o.b)("p",null,"To make portable binaries for your application, we can use the build command.\nEnter the following command on your terminal to make final binaries.\xa0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"neu build --release\n")),Object(o.b)("p",null,"The above command will produce binaries for all platforms into the ",Object(o.b)("inlineCode",{parentName:"p"},"dist")," directory.\nThis command will do the work blazing fast because there is no compilation process behind."),Object(o.b)("h2",{id:"whats-next"},"What's next?"),Object(o.b)("p",null,"Now you know how to create Neutralinojs applications. We will suggest you to look into the\nfollowing topics next."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../developer-environment/neutralino.config.json"},"neutralino.config.json")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../developer-environment/project-structure"},"Project structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../developer-environment/cli"},"neu CLI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../developer-environment/global-variables"},"Global variables")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../developer-environment/modes"},"Application modes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../api/app"},"Native API"))))}v.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}}}]);