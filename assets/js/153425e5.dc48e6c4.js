(self.webpackChunk=self.webpackChunk||[]).push([[82494],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(44256),r=n(67294);function l(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var o=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:l},"Filing a task"))},p=function(){return r.createElement(i,null,r.createElement(s,null),r.createElement(o,null))},c=function(){return r.createElement(i,null,r.createElement(o,null))};const u=function(){return(0,a.fbContent)({internal:r.createElement(p,null),external:r.createElement(c,null)})}},34130:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>m});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i=n(68629),o=(n(44256),["components"]),s={id:"installation-and-setup",title:"Installation and Setup",slug:"/getting-started/installation-and-setup/",description:"Relay installation and setup guide",keywords:["installation","setup","compiler","babel-plugin-relay"]},p=void 0,c={unversionedId:"getting-started/installation-and-setup",id:"getting-started/installation-and-setup",isDocsHomePage:!1,title:"Installation and Setup",description:"Relay installation and setup guide",source:"@site/docs/getting-started/installation-and-setup.md",sourceDirName:"getting-started",slug:"/getting-started/installation-and-setup/",permalink:"/docs/next/getting-started/installation-and-setup/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/getting-started/installation-and-setup.md",version:"current",lastUpdatedBy:"Curtis Li",lastUpdatedAt:1629307839,formattedLastUpdatedAt:"8/18/2021",frontMatter:{id:"installation-and-setup",title:"Installation and Setup",slug:"/getting-started/installation-and-setup/",description:"Relay installation and setup guide",keywords:["installation","setup","compiler","babel-plugin-relay"]},sidebar:"docs",previous:{title:"Prerequisites",permalink:"/docs/next/getting-started/prerequisites/"},next:{title:"Step-by-step Guide",permalink:"/docs/next/getting-started/step-by-step-guide/"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Set up Relay with a single config file",id:"set-up-relay-with-a-single-config-file",children:[]},{value:"Set up babel-plugin-relay",id:"set-up-babel-plugin-relay",children:[]},{value:"Set up relay-compiler",id:"set-up-relay-compiler",children:[]},{value:"JavaScript environment requirements",id:"javascript-environment-requirements",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Install React and Relay using ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add react react-dom react-relay\n")),(0,l.kt)("h2",{id:"set-up-relay-with-a-single-config-file"},"Set up Relay with a single config file"),(0,l.kt)("p",null,"The below configuration of ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-relay")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"relay-compiler")," can be applied using a single configuration file by\nusing the ",(0,l.kt)("inlineCode",{parentName:"p"},"relay-config")," package. Besides unifying all Relay configuration in a single place, other tooling can leverage\nthis to provide zero-config setup (e.g. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/relay-tools/vscode-apollo-relay"},"vscode-apollo-relay"),")."),(0,l.kt)("p",null,"Install the package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev relay-config\n")),(0,l.kt)("p",null,"And create the configuration file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'// relay.config.js\nmodule.exports = {\n  // ...\n  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.\n  src: "./src",\n  schema: "./data/schema.graphql",\n  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],\n}\n')),(0,l.kt)("h2",{id:"set-up-babel-plugin-relay"},"Set up babel-plugin-relay"),(0,l.kt)("p",null,"Relay Modern requires a Babel plugin to convert GraphQL to runtime artifacts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev babel-plugin-relay graphql\n")),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},'"relay"')," to the list of plugins your ",(0,l.kt)("inlineCode",{parentName:"p"},".babelrc")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    "relay"\n  ]\n}\n')),(0,l.kt)("p",null,"Please note that the ",(0,l.kt)("inlineCode",{parentName:"p"},'"relay"')," plugin should run before other plugins or\npresets to ensure the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," template literals are correctly transformed. See\nBabel's ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/#pluginpreset-ordering"},"documentation on this topic"),"."),(0,l.kt)("p",null,"Alternatively, instead of using ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-relay"),", you can use Relay with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros"},"babel-plugin-macros"),". After installing ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-macros")," and adding it to your Babel config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const graphql = require('babel-plugin-relay/macro');\n")),(0,l.kt)("p",null,"If you need to configure ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-relay")," further (e.g. to enable ",(0,l.kt)("inlineCode",{parentName:"p"},"compat")," mode), you can do so by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros/blob/main/other/docs/user.md#config-experimental"},"specifying the options in a number of ways"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// babel-plugin-macros.config.js\nmodule.exports = {\n  // ...\n  // Other macros config\n  relay: {\n    compat: true,\n  },\n}\n")),(0,l.kt)("h2",{id:"set-up-relay-compiler"},"Set up relay-compiler"),(0,l.kt)("p",null,"Relay's ahead-of-time compilation requires the ",(0,l.kt)("a",{parentName:"p",href:"../../guides/compiler/"},"Relay Compiler"),", which you can install via ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev relay-compiler\n")),(0,l.kt)("p",null,"This installs the bin script ",(0,l.kt)("inlineCode",{parentName:"p"},"relay-compiler")," in your node_modules folder. It's recommended to run this from a ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," script by adding a script to your ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql"\n}\n')),(0,l.kt)("p",null,"or if you are using jsx:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --extensions js jsx"\n}\n')),(0,l.kt)("p",null,"Then, after making edits to your application files, just run the ",(0,l.kt)("inlineCode",{parentName:"p"},"relay")," script to generate new compiled artifacts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn run relay\n")),(0,l.kt)("p",null,"Alternatively, you can pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"--watch")," option to watch for file changes in your source code and automatically re-generate the compiled artifacts (",(0,l.kt)("strong",{parentName:"p"},"Note:")," Requires ",(0,l.kt)("a",{parentName:"p",href:"https://facebook.github.io/watchman"},"watchman")," to be installed):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn run relay --watch\n")),(0,l.kt)("p",null,"For more details, check out our ",(0,l.kt)("a",{parentName:"p",href:"../../guides/compiler/"},"Relay Compiler docs"),"."),(0,l.kt)("h2",{id:"javascript-environment-requirements"},"JavaScript environment requirements"),(0,l.kt)("p",null,"The Relay Modern packages distributed on NPM use the widely-supported ES5\nversion of JavaScript to support as many browser environments as possible."),(0,l.kt)("p",null,"However, Relay Modern expects modern JavaScript global types (",(0,l.kt)("inlineCode",{parentName:"p"},"Map"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Set"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Object.assign"),") to be defined. If you support older browsers and\ndevices which may not yet provide these natively, consider including a global\npolyfill in your bundled application, such as ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," or\n",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/usage/polyfill/"},"@babel/polyfill"),"."),(0,l.kt)("p",null,"A polyfilled environment for Relay using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," to support older browsers\nmight look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"require('core-js/es6/map');\nrequire('core-js/es6/set');\nrequire('core-js/es6/promise');\nrequire('core-js/es6/object');\n\nrequire('./myRelayApplication');\n")),(0,l.kt)(i.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);