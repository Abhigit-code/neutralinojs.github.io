"use strict";(self.webpackChunkneutralinojs_github_io=self.webpackChunkneutralinojs_github_io||[]).push([[8916],{4274:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var l=i(4848),r=i(8453);const s={title:"CLI"},d=void 0,o={id:"release-notes/cli",title:"CLI",description:"Unreleased",source:"@site/docs/release-notes/cli.md",sourceDirName:"release-notes",slug:"/release-notes/cli",permalink:"/docs/release-notes/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/release-notes/cli.md",tags:[],version:"current",frontMatter:{title:"CLI"},sidebar:"docs",previous:{title:"Framework",permalink:"/docs/release-notes/framework"},next:{title:"Client Library",permalink:"/docs/release-notes/client-library"}},t={},c=[{value:"Unreleased",id:"unreleased",level:2},{value:"v11.2.0",id:"v1120",level:2},{value:"Core: Bundler",id:"core-bundler",level:2},{value:"Core: Version",id:"core-version",level:2},{value:"Bugfixes/improvements",id:"bugfixesimprovements",level:3},{value:"v11.1.0",id:"v1110",level:2},{value:"Core: Bundler",id:"core-bundler-1",level:3},{value:"v11.0.1",id:"v1101",level:2},{value:"Bugfixes/improvements",id:"bugfixesimprovements-1",level:3},{value:"v11.0.0",id:"v1100",level:2},{value:"Core: Runner",id:"core-runner",level:3},{value:"Bugfixes/improvements",id:"bugfixesimprovements-2",level:3},{value:"v10.1.1",id:"v1011",level:2},{value:"Bugfixes/improvements",id:"bugfixesimprovements-3",level:3},{value:"v10.1.0",id:"v1010",level:2},{value:"Bugfixes/improvements",id:"bugfixesimprovements-4",level:3},{value:"v10.0.0",id:"v1000",level:2},{value:"Core: frontend-library-based development",id:"core-frontend-library-based-development",level:3},{value:"v9.8.0",id:"v980",level:2},{value:"Core: Downloader",id:"core-downloader",level:3},{value:"v9.7.0",id:"v970",level:2},{value:"Core: Downloader/bundler",id:"core-downloaderbundler",level:3},{value:"v9.6.1",id:"v961",level:2},{value:"Bugfixes/Improvements",id:"bugfixesimprovements-5",level:3},{value:"v9.6.0",id:"v960",level:2},{value:"Core: Bundler",id:"core-bundler-2",level:3},{value:"v9.5.1",id:"v951",level:2},{value:"Bugfixes/Improvements",id:"bugfixesimprovements-6",level:3},{value:"v9.5.0",id:"v950",level:2},{value:"DevOps",id:"devops",level:3},{value:"v9.4.0",id:"v940",level:2},{value:"DevOps: new test suite",id:"devops-new-test-suite",level:3},{value:"Bugfixes/Improvements",id:"bugfixesimprovements-7",level:3},{value:"v9.3.1",id:"v931",level:2},{value:"Core: Plugins",id:"core-plugins",level:3},{value:"Core: downloader/builder",id:"core-downloaderbuilder",level:3},{value:"v9.3.0",id:"v930",level:2},{value:"General",id:"general",level:3},{value:"Bugfixes/improvements",id:"bugfixesimprovements-8",level:3},{value:"DevOps",id:"devops-1",level:3},{value:"v9.2.0",id:"v920",level:2},{value:"General",id:"general-1",level:3},{value:"Core: Runner",id:"core-runner-1",level:3},{value:"v9.1.2",id:"v912",level:2},{value:"Core: Runner",id:"core-runner-2",level:3},{value:"v9.1.1",id:"v911",level:2},{value:"Bugfixes",id:"bugfixes",level:3},{value:"v9.1.0",id:"v910",level:2},{value:"Core: Runner",id:"core-runner-3",level:3},{value:"v9.0.0",id:"v900",level:2},{value:"Core: Creator",id:"core-creator",level:3},{value:"Core: Runner",id:"core-runner-4",level:3},{value:"Bugfixes and improvements",id:"bugfixes-and-improvements",level:3},{value:"v8.1.0",id:"v810",level:2},{value:"Core: File watcher",id:"core-file-watcher",level:3},{value:"Core: Bundler",id:"core-bundler-3",level:3},{value:"v8.0.1",id:"v801",level:2},{value:"Core: Bundler",id:"core-bundler-4",level:3},{value:"Bugfixes",id:"bugfixes-1",level:3},{value:"v8.0.0",id:"v800",level:2},{value:"Core: Bundler",id:"core-bundler-5",level:3},{value:"Core: Runner",id:"core-runner-5",level:3},{value:"v7.1.0",id:"v710",level:2},{value:"Core: Downloader",id:"core-downloader-1",level:3},{value:"<code>neu version</code>",id:"neu-version",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"unreleased",children:"Unreleased"}),"\n",(0,l.jsx)(n.h2,{id:"v1120",children:"v11.2.0"}),"\n",(0,l.jsx)(n.h2,{id:"core-bundler",children:"Core: Bundler"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Introduce the ",(0,l.jsx)(n.code,{children:"--clean"})," flag to the ",(0,l.jsx)(n.code,{children:"neu build"})," command to clean previous build files."]}),"\n",(0,l.jsxs)(n.li,{children:["Add file excluding feature for the app bundle and extensions directory via ",(0,l.jsx)(n.code,{children:"cli.resourcesExclude"})," and ",(0,l.jsx)(n.code,{children:"cli.extensionsExclude"})," configuration properties. For example, now developers can use the ",(0,l.jsx)(n.code,{children:'"resourcesExclude": ".*\\\\.scss$|.*\\\\.d.ts$"'})," configuration to exclude ",(0,l.jsx)(n.code,{children:"*.scss"})," and ",(0,l.jsx)(n.code,{children:"*.d.ts"})," files from the final app bundle."]}),"\n",(0,l.jsxs)(n.li,{children:["Let app developers customize the frontend library development server wait time using the ",(0,l.jsx)(n.code,{children:"cli.frontendLibrary.waitTimeout"})," configuration property."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"core-version",children:"Core: Version"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.code,{children:"neu version"})," command now compares the installed CLI version and the framework version with the latest released versions and displays a warning messages if the users use an older versions."]}),"\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.code,{children:"neu version"})," command now displays the ",(0,l.jsx)(n.code,{children:"(latest)"})," tag with CLI, binary, client library version details."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"bugfixesimprovements",children:"Bugfixes/improvements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Check and validate ",(0,l.jsx)(n.code,{children:"neutralino.config.json"})," file before executing app-specific commands."]}),"\n",(0,l.jsx)(n.li,{children:"Check app template validity before downloading content from a specific GitHub repository using the official GitHub API."}),"\n",(0,l.jsx)(n.li,{children:"Add the app icon to the final app bundle only the specific project uses an app icon."}),"\n",(0,l.jsx)(n.li,{children:"Fix the port waiting timeout issue with frontend library-based development workflow."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v1110",children:"v11.1.0"}),"\n",(0,l.jsx)(n.h3,{id:"core-bundler-1",children:"Core: Bundler"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Add ",(0,l.jsx)(n.code,{children:"cli.distributionPath"})," into the ",(0,l.jsx)(n.code,{children:"neutralino.config.json"})," file to customize the default ",(0,l.jsx)(n.code,{children:"dist"})," distribution directory."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v1101",children:"v11.0.1"}),"\n",(0,l.jsx)(n.h3,{id:"bugfixesimprovements-1",children:"Bugfixes/improvements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Clean existing app build files before creating another build using the ",(0,l.jsx)(n.code,{children:"neu build"})," command."]}),"\n",(0,l.jsx)(n.li,{children:"Support older Node versions by removing the optional chaining feature usage."}),"\n",(0,l.jsxs)(n.li,{children:["Fix the endless port waiting issue with the ",(0,l.jsx)(n.code,{children:"--frontend-lib-dev"})," option."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v1100",children:"v11.0.0"}),"\n",(0,l.jsx)(n.h3,{id:"core-runner",children:"Core: Runner"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Change the WebSocket connection based on the v5 framework APIs."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"bugfixesimprovements-2",children:"Bugfixes/improvements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Fixed issues with the frontend library command execution."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v1011",children:"v10.1.1"}),"\n",(0,l.jsx)(n.h3,{id:"bugfixesimprovements-3",children:"Bugfixes/improvements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Fixed app development issues with the Vite server."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v1010",children:"v10.1.0"}),"\n",(0,l.jsx)(n.h3,{id:"bugfixesimprovements-4",children:"Bugfixes/improvements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Fixed several issues in the frontend-library-based development flow (i.e., removed the hardcoded port number, fixed double ",(0,l.jsx)(n.code,{children:"devCommand"})," execution, etc.,)."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v1000",children:"v10.0.0"}),"\n",(0,l.jsx)(n.h3,{id:"core-frontend-library-based-development",children:"Core: frontend-library-based development"}),"\n",(0,l.jsxs)(n.p,{children:["Added new configuration options to the ",(0,l.jsx)(n.code,{children:"cli.frontendLibrary"})," key of the ",(0,l.jsx)(n.code,{children:"neutralino.config.json"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"projectPath"}),": Sets the project path of the frontend-library project. This path will be used as the current directory while executing the frontend-app-related commands."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"initCommand"}),": A command that gets executed after downloading an app template with the ",(0,l.jsx)(n.code,{children:"neu create"})," command."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"devCommand"}),": This command will run with the ",(0,l.jsx)(n.code,{children:"neu run"})," command to start the frontend development server. The CLI doesn't wait for ",(0,l.jsx)(n.code,{children:"devCommand"})," completion, instead, it will wait for the frontend development server via the ",(0,l.jsx)(n.a,{href:"https://www.npmjs.com/package/tcp-port-used",children:(0,l.jsx)(n.code,{children:"tcp-port-used"})})," package."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"buildCommand"}),": The ",(0,l.jsx)(n.code,{children:"neu build"})," command will execute this command before generating the app bundle, so you can generate static resources of your frontend app using this command."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v980",children:"v9.8.0"}),"\n",(0,l.jsx)(n.h3,{id:"core-downloader",children:"Core: Downloader"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Download the latest Neutralinojs framework resources with the ",(0,l.jsx)(n.code,{children:"--latest"})," option in the ",(0,l.jsx)(n.code,{children:"neu update"})," command."]}),"\n",(0,l.jsx)(n.li,{children:"If framework versions are not present in the app/template configuration, download the latest framework resources automatically. The CLI will download nightly releases if it can't fetch the latest release tag because of an GitHub API-related issue (i.e., Exceeded rate limits)."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v970",children:"v9.7.0"}),"\n",(0,l.jsx)(n.h3,{id:"core-downloaderbundler",children:"Core: Downloader/bundler"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Download the TypeScript definition file for standalone client library mode. This won't include the TypeScript definition file to the final application bundle."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v961",children:"v9.6.1"}),"\n",(0,l.jsx)(n.h3,{id:"bugfixesimprovements-5",children:"Bugfixes/Improvements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Fix the hot-reloading issue that occurs with newer Node runtime versions."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v960",children:"v9.6.0"}),"\n",(0,l.jsx)(n.h3,{id:"core-bundler-2",children:"Core: Bundler"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Avoid copying the ",(0,l.jsx)(n.code,{children:"WebView2Loader.dll"})," file to the final app package since it was removed from the Neutralinojs framework."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v951",children:"v9.5.1"}),"\n",(0,l.jsx)(n.h3,{id:"bugfixesimprovements-6",children:"Bugfixes/Improvements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Use the ",(0,l.jsx)(n.code,{children:"decompress"})," library instead of ",(0,l.jsx)(n.code,{children:"unzipper"})," to fix issues with latest Node.js runtime versions."]}),"\n",(0,l.jsxs)(n.li,{children:["Generate the Mac universal binary with the ",(0,l.jsx)(n.code,{children:"neu build"})," command."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v950",children:"v9.5.0"}),"\n",(0,l.jsx)(n.h3,{id:"devops",children:"DevOps"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Implement a way to test plugins locally."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v940",children:"v9.4.0"}),"\n",(0,l.jsx)(n.h3,{id:"devops-new-test-suite",children:"DevOps: new test suite"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Initiate a new Node.js-based test suite."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"bugfixesimprovements-7",children:"Bugfixes/Improvements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Clean project files if the ",(0,l.jsx)(n.code,{children:"neu create"})," command wan't successful."]}),"\n",(0,l.jsxs)(n.li,{children:["Display an error message if the ",(0,l.jsx)(n.code,{children:"neu build --copy-storage"})," fails due to missing ",(0,l.jsx)(n.code,{children:".storage"})," directory."]}),"\n",(0,l.jsxs)(n.li,{children:["Support Darwin ",(0,l.jsx)(n.code,{children:"arm64"})," binaries natively without binary translation (",(0,l.jsx)(n.code,{children:"x64"})," -> ",(0,l.jsx)(n.code,{children:"arm64"}),")."]}),"\n",(0,l.jsxs)(n.li,{children:["Make the client library downloading process optional and support importing the client library via ",(0,l.jsx)(n.code,{children:"@neutralinojs/lib"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Download the module version of the client library based on the app configuration."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v931",children:"v9.3.1"}),"\n",(0,l.jsx)(n.h3,{id:"core-plugins",children:"Core: Plugins"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Automatically re-install plugins when the neu CLI version is upgraded/downgraded via package managers."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"core-downloaderbuilder",children:"Core: downloader/builder"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Support ARM (armhf/arm64) binaries."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v930",children:"v9.3.0"}),"\n",(0,l.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Add short descriptions for each command."}),"\n",(0,l.jsx)(n.li,{children:"Support to download nightly build versions."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"bugfixesimprovements-8",children:"Bugfixes/improvements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Fix plugin listing issue."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"devops-1",children:"DevOps"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Add a simple test-suite for testing CLI commands with a Bash script."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v920",children:"v9.2.0"}),"\n",(0,l.jsx)(n.h3,{id:"general-1",children:"General"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Improve log messages and styles"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"core-runner-1",children:"Core: Runner"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Display Neutralinojs process's STDIN and STDERR streams directly on the console."}),"\n",(0,l.jsxs)(n.li,{children:["Remove ",(0,l.jsx)(n.code,{children:"--verbose"})," option from the ",(0,l.jsx)(n.code,{children:"run"})," command."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v912",children:"v9.1.2"}),"\n",(0,l.jsx)(n.h3,{id:"core-runner-2",children:"Core: Runner"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Fix client library path issue with hot-reload workaround on Windows."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v911",children:"v9.1.1"}),"\n",(0,l.jsx)(n.h3,{id:"bugfixes",children:"Bugfixes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Fix browser mode exit issue with ",(0,l.jsx)(n.code,{children:"neu run"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v910",children:"v9.1.0"}),"\n",(0,l.jsx)(n.h3,{id:"core-runner-3",children:"Core: Runner"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Add a workaround to use hot module reloading from the app developer's existing frontend library/framework."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v900",children:"v9.0.0"}),"\n",(0,l.jsx)(n.h3,{id:"core-creator",children:"Core: Creator"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Allow downloading any community template via ",(0,l.jsx)(n.code,{children:"neu create myapp --template <template>"}),". ",(0,l.jsx)(n.code,{children:"<template>"})," accepts valid GitHub repo identifiers. The default value is ",(0,l.jsx)(n.code,{children:"neutralinojs/neutralinojs-minimal"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"core-runner-4",children:"Core: Runner"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Add ",(0,l.jsx)(n.code,{children:"--verbose"})," option to identify framework initialization crashes. It will show STDERR and STDOUT of the framework once the process was terminated."]}),"\n",(0,l.jsxs)(n.li,{children:["Support sending any internal CLI argument to the Neutralinojs process via ",(0,l.jsx)(n.code,{children:"neu run -- <additional_args>"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Remove ",(0,l.jsx)(n.code,{children:"--mode=<mode>"})," option from ",(0,l.jsx)(n.code,{children:"run"})," since the same work can be done with ",(0,l.jsx)(n.code,{children:"neu run -- --mode=<mode>"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"bugfixes-and-improvements",children:"Bugfixes and improvements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Fix the infinite retry issue with the ",(0,l.jsx)(n.code,{children:"neu run"})," command."]}),"\n",(0,l.jsx)(n.li,{children:"Show an error message for download failures."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v810",children:"v8.1.0"}),"\n",(0,l.jsx)(n.h3,{id:"core-file-watcher",children:"Core: File watcher"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Exclude auto-reload files via ",(0,l.jsx)(n.code,{children:"cli.autoReloadExclude"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Watch only the ",(0,l.jsx)(n.code,{children:"cli.resourcesDir"})," to avoid many unwanted reloads."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"core-bundler-3",children:"Core: Bundler"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Add new ",(0,l.jsx)(n.code,{children:"--copy-storage"})," flag to automatically copy storage data to the app bundle."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v801",children:"v8.0.1"}),"\n",(0,l.jsx)(n.h3,{id:"core-bundler-4",children:"Core: Bundler"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Make ",(0,l.jsx)(n.code,{children:"cli.extensionsDir"})," optional for bundling process."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"bugfixes-1",children:"Bugfixes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Fix an issue in websocket error log."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v800",children:"v8.0.0"}),"\n",(0,l.jsx)(n.h3,{id:"core-bundler-5",children:"Core: Bundler"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Copy extensions to the app bundle."}),"\n",(0,l.jsxs)(n.li,{children:["Rename ",(0,l.jsx)(n.code,{children:"res.neu"})," to ",(0,l.jsx)(n.code,{children:"resources.neu"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"core-runner-5",children:"Core: Runner"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Use websocket connection to auto reload app."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"v710",children:"v7.1.0"}),"\n",(0,l.jsx)(n.h3,{id:"core-downloader-1",children:"Core: Downloader"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Use server/client versions from config"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"neu-version",children:(0,l.jsx)(n.code,{children:"neu version"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Removed global Neutralino version details"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var l=i(6540);const r={},s=l.createContext(r);function d(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);