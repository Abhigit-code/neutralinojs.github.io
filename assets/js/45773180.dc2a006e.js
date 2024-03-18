(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,h=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(121)),i={title:"Frequently Asked Questions"},s={unversionedId:"contributing/frequently-asked-questions",id:"contributing/frequently-asked-questions",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Please checkout the following questions before dropping your queries on the Discord server. If your query has been resolved and you feel that others may face the same issue, make sure to help them by adding them below via a pull request.",source:"@site/docs/contributing/frequently-asked-questions.md",slug:"/contributing/frequently-asked-questions",permalink:"/docs/contributing/frequently-asked-questions",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/contributing/frequently-asked-questions.md",version:"current",sidebar:"docs",previous:{title:"Committers",permalink:"/docs/contributing/committers"},next:{title:"About Neutralinojs",permalink:"/docs/contributing/about-neutralinojs"}},c=[{value:"Framework",id:"framework",children:[{value:"Error Code 127: <code>libayatana-appindicator3.so.1 cannot open shared object file: No such file or directory</code>",id:"error-code-127-libayatana-appindicator3so1-cannot-open-shared-object-file-no-such-file-or-directory",children:[]}]},{value:"CLI",id:"cli",children:[{value:"What should I do when I get <code>Missing permission to execute the native method: &lt;namespace.func&gt;</code> error ?",id:"what-should-i-do-when-i-get-missing-permission-to-execute-the-native-method-namespacefunc-error-",children:[]},{value:"<code>yarn global add @neutralinojs/neu</code> doesn&#39;t complete the installation process.",id:"yarn-global-add-neutralinojsneu-doesnt-complete-the-installation-process",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Please checkout the following questions before dropping your queries on the Discord server. If your query has been resolved and you feel that others may face the same issue, make sure to help them by adding them below via a pull request."),Object(a.b)("h2",{id:"framework"},"Framework"),Object(a.b)("h3",{id:"error-code-127-libayatana-appindicator3so1-cannot-open-shared-object-file-no-such-file-or-directory"},"Error Code 127: ",Object(a.b)("inlineCode",{parentName:"h3"},"libayatana-appindicator3.so.1 cannot open shared object file: No such file or directory")),Object(a.b)("p",null,"We fixed this issue in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs/releases/tag/v4.5.0"},"v4.5.0"),", so please upgrade your framework version.\nIf you need to use a lower framework version, you need to install the missing package with the following commands to start the app properly:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"apt update\napt install -y libayatana-appindicator3-1\n")),Object(a.b)("p",null,"Make sure to run the above commands with ",Object(a.b)("inlineCode",{parentName:"p"},"sudo"),". Check ",Object(a.b)("a",{parentName:"p",href:"https://ubuntu.pkgs.org/18.04/ubuntu-universe-amd64/libayatana-appindicator3-1_0.5.3-3_amd64.deb.html"},"the package information")," for further reference."),Object(a.b)("h2",{id:"cli"},"CLI"),Object(a.b)("h3",{id:"what-should-i-do-when-i-get-missing-permission-to-execute-the-native-method-namespacefunc-error-"},"What should I do when I get ",Object(a.b)("inlineCode",{parentName:"h3"},"Missing permission to execute the native method: <namespace.func>")," error ?"),Object(a.b)("p",null,"This error occurs when permissions are not given to execute a specific native method. To be able to run this function, add the ",Object(a.b)("inlineCode",{parentName:"p"},"namespace.func")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"nativeAllowList"),". To allow all functions of the particular namespace, use ",Object(a.b)("inlineCode",{parentName:"p"},"namespace.*"),". Check ",Object(a.b)("a",{parentName:"p",href:"https://neutralino.js.org/docs/configuration/neutralino.config.json/#nativeallowlist-string"},"here")," to learn more about allowlists."),Object(a.b)("h3",{id:"yarn-global-add-neutralinojsneu-doesnt-complete-the-installation-process"},Object(a.b)("inlineCode",{parentName:"h3"},"yarn global add @neutralinojs/neu")," doesn't complete the installation process."),Object(a.b)("p",null,"When ",Object(a.b)("inlineCode",{parentName:"p"},"yarn")," is used to install ",Object(a.b)("inlineCode",{parentName:"p"},"neu"),", the output shows ",Object(a.b)("inlineCode",{parentName:"p"},'success Installed "@neutralinojs/neu"'),". But, neu commands don't work even after installation, ",Object(a.b)("inlineCode",{parentName:"p"},"which neu")," outputs nothing. Check ",Object(a.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs-cli/issues/64"},"here")," for further information about the particular issue."),Object(a.b)("p",null,"This error is more of an yarn issue. To fix it, the developer needs to add the ",Object(a.b)("inlineCode",{parentName:"p"},"yarn global bin")," command output to ",Object(a.b)("inlineCode",{parentName:"p"},"$PATH"),". For example, we can add the following command to the ",Object(a.b)("inlineCode",{parentName:"p"},".bashrc")," file (or other Shell interpreter initialization scripts):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'export PATH="$(yarn global bin):$PATH"\n')),Object(a.b)("p",null,"For more information, check the official documentation of yarn ",Object(a.b)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/cli/global"},"here"),"."))}u.isMDXComponent=!0}}]);